document.addEventListener("DOMContentLoaded", () => {
  setupGmContactCopy();
  setupGmReviewCarousel();
  setupGmReveal();
});

function setupGmContactCopy() {
  const copyButtons = document.querySelectorAll("[data-copy-contact]");
  if (copyButtons.length === 0) return;

  async function copyText(value) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return;
    }

    const fallback = document.createElement("textarea");
    fallback.value = value;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    fallback.style.pointerEvents = "none";
    document.body.append(fallback);
    fallback.select();
    fallback.setSelectionRange(0, fallback.value.length);

    const copied = document.execCommand("copy");
    fallback.remove();
    if (!copied) throw new Error("Copy command failed.");
  }

  copyButtons.forEach((button) => {
    let hideTimer = null;
    let cleanupTimer = null;

    button.addEventListener("click", async () => {
      const value = button.dataset.copyContact;
      const toast = button.querySelector("[data-copy-toast]");
      if (!value || !toast) return;

      window.clearTimeout(hideTimer);
      window.clearTimeout(cleanupTimer);
      button.classList.remove("is-copied", "is-copy-failed");
      void button.offsetWidth;

      try {
        await copyText(value);
        toast.textContent = "Скопировано!";
        button.classList.add("is-copied");
      } catch (error) {
        toast.textContent = "Не удалось скопировать";
        button.classList.add("is-copied", "is-copy-failed");
      }

      hideTimer = window.setTimeout(() => {
        button.classList.remove("is-copied");
        cleanupTimer = window.setTimeout(() => {
          button.classList.remove("is-copy-failed");
        }, 80);
      }, 1750);
    });
  });
}

function setupGmReviewCarousel() {
  const root = document.querySelector("[data-review-carousel]");
  const viewport = root?.querySelector("[data-review-viewport]");
  const track = root?.querySelector("[data-review-track]");
  const previousButton = root?.querySelector("[data-review-prev]");
  const nextButton = root?.querySelector("[data-review-next]");
  const pagination = root?.querySelector("[data-review-pagination]");
  const status = root?.querySelector("[data-review-status]");

  if (!root || !viewport || !track || !previousButton || !nextButton || !pagination) return;

  const originalSlides = Array.from(track.querySelectorAll("[data-review-slide]"));
  if (originalSlides.length === 0) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const dwellDuration = 7000;
  const interactionDelay = 18000;

  let trackIndex = 1;
  let logicalIndex = 0;
  let isAnimating = false;
  let autoplayTimer = null;
  let progressAnimation = null;
  let pendingAutoplayDelay = dwellDuration;
  let pointerStartX = null;
  let resizeFrame = null;
  let jumpCleanupFrame = null;

  const firstClone = originalSlides[0].cloneNode(true);
  const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);
  firstClone.dataset.reviewClone = "true";
  lastClone.dataset.reviewClone = "true";
  firstClone.setAttribute("aria-hidden", "true");
  lastClone.setAttribute("aria-hidden", "true");
  track.prepend(lastClone);
  track.append(firstClone);

  const progress = document.createElement("div");
  const progressFill = document.createElement("div");
  progress.className = "gm-review-carousel__progress";
  progress.setAttribute("aria-hidden", "true");
  progressFill.className = "gm-review-carousel__progress-fill";
  progress.append(progressFill);
  viewport.append(progress);

  const allSlides = () => Array.from(track.querySelectorAll("[data-review-slide]"));

  function normalizeLogicalIndex(index) {
    const count = originalSlides.length;
    return ((index % count) + count) % count;
  }

  function getSlideName(index) {
    return originalSlides[index]?.getAttribute("aria-label") || `Отзыв ${index + 1}`;
  }

  function getMetrics() {
    const viewportWidth = viewport.clientWidth;
    const slide = allSlides()[trackIndex] || allSlides()[0];
    const slideWidth = slide?.getBoundingClientRect().width || viewportWidth * .7;
    return {
      viewportWidth,
      slideWidth,
      inset: Math.max(0, (viewportWidth - slideWidth) / 2)
    };
  }

  function releaseJumpState() {
    window.cancelAnimationFrame(jumpCleanupFrame);
    jumpCleanupFrame = window.requestAnimationFrame(() => {
      track.classList.remove("is-jumping");
      jumpCleanupFrame = null;
    });
  }

  function setTransform(index, animate = true) {
    const { slideWidth, inset } = getMetrics();

    if (animate) {
      window.cancelAnimationFrame(jumpCleanupFrame);
      jumpCleanupFrame = null;
      track.classList.remove("is-jumping");
    } else {
      track.classList.add("is-jumping");
    }

    track.style.transform = `translate3d(${Math.round(inset - index * slideWidth)}px, 0, 0)`;

    if (!animate) {
      /* Keep the no-transition state alive through the accompanying active-slide
         class swap. Removing it synchronously made the cloned boundary slide
         animate vertically while the rail itself snapped horizontally. */
      void track.offsetWidth;
      releaseJumpState();
    }
  }

  function updateAccessibility() {
    const slides = allSlides();
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === trackIndex);
    });

    originalSlides.forEach((slide, index) => {
      slide.setAttribute("aria-hidden", String(index !== logicalIndex));
    });

    pagination.querySelectorAll("[data-review-dot]").forEach((dot, index) => {
      const active = index === logicalIndex;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", active ? "true" : "false");
    });

    if (status) {
      status.textContent = `${getSlideName(logicalIndex)}. ${logicalIndex + 1} из ${originalSlides.length}.`;
    }
  }

  function stopProgress() {
    progressAnimation?.cancel();
    progressAnimation = null;
    progressFill.style.transform = "scaleX(0)";
  }

  function restartProgress(duration) {
    stopProgress();
    if (reducedMotion.matches) return;

    progressAnimation = progressFill.animate(
      [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
      { duration, easing: "linear", fill: "forwards" }
    );
  }

  function clearAutoplay() {
    window.clearTimeout(autoplayTimer);
    autoplayTimer = null;
    stopProgress();
  }

  function canAutoplay() {
    return !reducedMotion.matches && !document.hidden && !isAnimating && originalSlides.length > 1;
  }

  function scheduleAutoplay(delay = dwellDuration) {
    clearAutoplay();
    if (!canAutoplay()) return;

    restartProgress(delay);
    autoplayTimer = window.setTimeout(() => {
      pendingAutoplayDelay = dwellDuration;
      moveBy(1, false);
    }, delay);
  }

  function registerInteraction() {
    pendingAutoplayDelay = interactionDelay;
    clearAutoplay();
    if (!isAnimating) scheduleAutoplay(interactionDelay);
  }

  function finishLoopJump() {
    const count = originalSlides.length;
    let jumpTarget = null;

    if (trackIndex === 0) jumpTarget = count;
    if (trackIndex === count + 1) jumpTarget = 1;
    if (jumpTarget === null) return;

    trackIndex = jumpTarget;
    logicalIndex = normalizeLogicalIndex(trackIndex - 1);
    setTransform(trackIndex, false);
    updateAccessibility();
  }

  function moveToTrackIndex(nextTrackIndex, userInitiated = true) {
    if (isAnimating || originalSlides.length < 2) return;
    if (userInitiated) pendingAutoplayDelay = interactionDelay;

    clearAutoplay();
    trackIndex = nextTrackIndex;
    logicalIndex = normalizeLogicalIndex(trackIndex - 1);
    isAnimating = true;
    setTransform(trackIndex, true);
    updateAccessibility();
  }

  function moveBy(direction, userInitiated = true) {
    moveToTrackIndex(trackIndex + direction, userInitiated);
  }

  function moveToLogicalIndex(index) {
    const next = normalizeLogicalIndex(index);
    if (next === logicalIndex || isAnimating) {
      registerInteraction();
      return;
    }
    moveToTrackIndex(next + 1, true);
  }

  originalSlides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "gm-review-carousel__dot";
    dot.dataset.reviewDot = String(index);
    dot.setAttribute("aria-label", `Показать ${getSlideName(index)}`);
    dot.addEventListener("click", () => moveToLogicalIndex(index));
    pagination.append(dot);
  });

  track.addEventListener("transitionend", (event) => {
    if (event.target !== track || event.propertyName !== "transform") return;

    finishLoopJump();
    isAnimating = false;
    const delay = pendingAutoplayDelay;
    pendingAutoplayDelay = dwellDuration;
    scheduleAutoplay(delay);
  });

  previousButton.addEventListener("click", () => moveBy(-1, true));
  nextButton.addEventListener("click", () => moveBy(1, true));

  viewport.addEventListener("keydown", (event) => {
    registerInteraction();
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveBy(-1, true);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveBy(1, true);
    }
    if (event.key === "Home") {
      event.preventDefault();
      moveToLogicalIndex(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      moveToLogicalIndex(originalSlides.length - 1);
    }
  });

  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStartX = event.clientX;
    registerInteraction();
  });

  viewport.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;
    const distance = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(distance) >= 48) moveBy(distance > 0 ? -1 : 1, true);
  });

  viewport.addEventListener("pointercancel", () => {
    pointerStartX = null;
  });

  root.addEventListener("focusin", registerInteraction);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) clearAutoplay();
    else scheduleAutoplay(pendingAutoplayDelay);
  });

  reducedMotion.addEventListener?.("change", () => {
    progress.hidden = reducedMotion.matches;
    if (reducedMotion.matches) clearAutoplay();
    else scheduleAutoplay(pendingAutoplayDelay);
  });

  window.addEventListener("resize", () => {
    window.cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(() => {
      setTransform(trackIndex, false);
      updateAccessibility();
    });
  });

  progress.hidden = reducedMotion.matches;
  setTransform(trackIndex, false);
  updateAccessibility();
  scheduleAutoplay(dwellDuration);
}

function setupGmReveal() {
  const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
  if (nodes.length === 0) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: .16, rootMargin: "0px 0px -7% 0px" }
  );

  nodes.forEach((node) => observer.observe(node));
}
