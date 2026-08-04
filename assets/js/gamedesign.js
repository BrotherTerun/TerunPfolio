document.addEventListener("DOMContentLoaded", () => {
  setupProjectCarousel();
  setupContactCopy();
  setupSegmentedScroll();
});


function setupContactCopy() {
  const copyButtons = document.querySelectorAll("[data-copy-contact]");

  if (copyButtons.length === 0) {
    return;
  }

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

    if (!copied) {
      throw new Error("Copy command failed.");
    }
  }

  copyButtons.forEach((button) => {
    let hideTimer = null;
    let cleanupTimer = null;

    button.addEventListener("click", async () => {
      const value = button.dataset.copyContact;
      const toast = button.querySelector("[data-copy-toast]");

      if (!value || !toast) {
        return;
      }

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

      /*
        Keep the message visible for 1.75 seconds, then remove the
        visible state. CSS fades opacity over the requested 50ms.
      */
      hideTimer = window.setTimeout(() => {
        button.classList.remove("is-copied");

        cleanupTimer = window.setTimeout(() => {
          button.classList.remove("is-copy-failed");
        }, 60);
      }, 1750);
    });
  });
}

function setupProjectCarousel() {
  const root = document.querySelector("[data-project-carousel]");
  const viewport = root?.querySelector("[data-carousel-viewport]");
  const track = root?.querySelector("[data-carousel-track]");
  const previousButton = root?.querySelector("[data-carousel-prev]");
  const nextButton = root?.querySelector("[data-carousel-next]");
  const pagination = root?.querySelector("[data-carousel-pagination]");
  const status = root?.querySelector("[data-carousel-status]");

  if (
    !root ||
    !viewport ||
    !track ||
    !previousButton ||
    !nextButton ||
    !pagination
  ) {
    return;
  }

  const originalSlides = Array.from(
    track.querySelectorAll("[data-project-slide]")
  );

  if (originalSlides.length === 0) {
    return;
  }

  const progress = document.createElement("div");
  const progressFill = document.createElement("div");

  progress.className = "gd-project-progress";
  progress.setAttribute("aria-hidden", "true");

  progressFill.className = "gd-project-progress__fill";

  progress.append(progressFill);
  viewport.append(progress);

  const transitionDuration = 1200;
  const dwellDuration = 7000;
  const interactionDelay = 18000;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  let trackIndex = 1;
  let logicalIndex = 0;
  let isAnimating = false;
  let autoplayTimer = null;
  let progressAnimation = null;
  let pendingAutoplayDelay = dwellDuration;
  let pointerStartX = null;
  let resizeFrame = null;

  const firstClone = originalSlides[0].cloneNode(true);
  const lastClone =
    originalSlides[originalSlides.length - 1].cloneNode(true);

  firstClone.dataset.carouselClone = "true";
  lastClone.dataset.carouselClone = "true";

  firstClone.setAttribute("aria-hidden", "true");
  lastClone.setAttribute("aria-hidden", "true");

  firstClone
    .querySelectorAll("a, button, input, select, textarea, [tabindex]")
    .forEach((element) => element.setAttribute("tabindex", "-1"));

  lastClone
    .querySelectorAll("a, button, input, select, textarea, [tabindex]")
    .forEach((element) => element.setAttribute("tabindex", "-1"));

  track.prepend(lastClone);
  track.append(firstClone);

  const allSlides = () =>
    Array.from(track.querySelectorAll(".gd-project-card"));

  function normalizeLogicalIndex(index) {
    const count = originalSlides.length;

    return ((index % count) + count) % count;
  }

  function getSlideName(index) {
    return (
      originalSlides[index]?.getAttribute("aria-label") ||
      `Проект ${index + 1}`
    );
  }

  function updateAccessibility() {
    allSlides().forEach((slide, index) => {
      slide.classList.toggle("is-active", index === trackIndex);
    });

    originalSlides.forEach((slide, index) => {
      const isActive = index === logicalIndex;

      slide.setAttribute("aria-hidden", String(!isActive));

      slide
        .querySelectorAll("a, button, input, select, textarea, [tabindex]")
        .forEach((element) => {
          if (isActive) {
            element.removeAttribute("tabindex");
          } else {
            element.setAttribute("tabindex", "-1");
          }
        });
    });

    pagination
      .querySelectorAll("[data-carousel-dot]")
      .forEach((dot, index) => {
        const isActive = index === logicalIndex;

        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });

    if (status) {
      status.textContent =
        `${getSlideName(logicalIndex)}. ` +
        `${logicalIndex + 1} из ${originalSlides.length}.`;
    }
  }

  function setTransform(index, animate = true) {
    track.classList.toggle("is-jumping", !animate);
    track.style.transform =
      `translate3d(-${index * 100}%, 0, 0)`;

    if (!animate) {
      void track.offsetWidth;
      track.classList.remove("is-jumping");
    }
  }

  function stopProgress() {
    progressAnimation?.cancel();
    progressAnimation = null;

    progressFill.style.transform = "scaleX(0)";
  }

  function restartProgress(duration) {
    stopProgress();

    progressAnimation = progressFill.animate(
      [
        { transform: "scaleX(0)" },
        { transform: "scaleX(1)" }
      ],
      {
        duration,
        easing: "linear",
        fill: "forwards"
      }
    );
  }

  function clearAutoplay() {
    window.clearTimeout(autoplayTimer);
    autoplayTimer = null;
    stopProgress();
  }

  function canAutoplay() {
    return (
      !reducedMotion.matches &&
      !document.hidden &&
      !isAnimating
    );
  }

  function scheduleAutoplay(delay = dwellDuration) {
    clearAutoplay();

    if (!canAutoplay()) {
      root.classList.add("is-paused");
      return;
    }

    root.classList.remove("is-paused");
    restartProgress(delay);

    autoplayTimer = window.setTimeout(() => {
      stopProgress();
      pendingAutoplayDelay = dwellDuration;
      moveBy(1, false);
    }, delay);
  }

  /*
    Any deliberate activity postpones the next automatic transition.
    The timer does not die: it restarts for 18 seconds and remains
    visible through the progress line.
  */
  function registerInteraction() {
    pendingAutoplayDelay = interactionDelay;
    clearAutoplay();

    if (!isAnimating) {
      scheduleAutoplay(interactionDelay);
    }
  }

  function finishInfiniteLoopJump() {
    const count = originalSlides.length;
    let jumpTarget = null;

    if (trackIndex === 0) {
      jumpTarget = count;
    }

    if (trackIndex === count + 1) {
      jumpTarget = 1;
    }

    if (jumpTarget === null) {
      return;
    }

    /*
      Disable both track and card transitions before swapping the
      active clone for the matching original slide.
    */
    track.classList.add("is-loop-jumping");
    track.classList.add("is-jumping");

    trackIndex = jumpTarget;
    logicalIndex = normalizeLogicalIndex(trackIndex - 1);

    track.style.transform =
      `translate3d(-${trackIndex * 100}%, 0, 0)`;

    updateAccessibility();

    void track.offsetWidth;

    track.classList.remove("is-jumping");

    window.requestAnimationFrame(() => {
      track.classList.remove("is-loop-jumping");
    });
  }

  function moveToTrackIndex(nextTrackIndex, userInitiated = true) {
    if (isAnimating || originalSlides.length < 2) {
      return;
    }

    if (userInitiated) {
      pendingAutoplayDelay = interactionDelay;
    }

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
    const nextLogicalIndex = normalizeLogicalIndex(index);

    if (nextLogicalIndex === logicalIndex || isAnimating) {
      registerInteraction();
      return;
    }

    moveToTrackIndex(nextLogicalIndex + 1, true);
  }

  function fitViewport() {
    const sectionRect = root.getBoundingClientRect();
    const desktop = window.matchMedia(
      "(min-width: 961px) and (min-height: 761px)"
    ).matches;

    if (!desktop) {
      viewport.style.removeProperty("--gd-carousel-width");
      viewport.style.removeProperty("--gd-carousel-height");
      return;
    }

    const sidePreview = 70;
    const horizontalReserve = sidePreview * 2;
    const verticalReserve = 2;

    const availableWidth = Math.max(
      320,
      sectionRect.width - horizontalReserve
    );
    const availableHeight = Math.max(
      180,
      sectionRect.height - verticalReserve
    );

    const width = Math.min(
      availableWidth,
      availableHeight * (16 / 9),
      1600
    );
    const height = width * (9 / 16);

    viewport.style.setProperty(
      "--gd-carousel-width",
      `${Math.round(width)}px`
    );
    viewport.style.setProperty(
      "--gd-carousel-height",
      `${Math.round(height)}px`
    );
  }

  originalSlides.forEach((slide, index) => {
    const dot = document.createElement("button");

    dot.type = "button";
    dot.className = "gd-project-dot";
    dot.dataset.carouselDot = String(index);
    dot.setAttribute(
      "aria-label",
      `Показать проект ${getSlideName(index)}`
    );

    dot.addEventListener("click", () => {
      moveToLogicalIndex(index);
    });

    pagination.append(dot);
  });

  track.classList.add("is-loop-jumping");
  setTransform(trackIndex, false);
  updateAccessibility();
  void track.offsetWidth;
  track.classList.remove("is-loop-jumping");

  fitViewport();
  progress.hidden = reducedMotion.matches;
  scheduleAutoplay(dwellDuration);

  previousButton.addEventListener("click", () => {
    moveBy(-1, true);
  });

  nextButton.addEventListener("click", () => {
    moveBy(1, true);
  });

  track.addEventListener("transitionend", (event) => {
    if (
      event.propertyName !== "transform" ||
      event.target !== track
    ) {
      return;
    }

    finishInfiniteLoopJump();
    isAnimating = false;

    const delay = pendingAutoplayDelay;
    pendingAutoplayDelay = dwellDuration;

    scheduleAutoplay(delay);
  });

  root.addEventListener("pointerdown", () => {
    registerInteraction();
  });

  root.addEventListener("focusin", () => {
    registerInteraction();
  });

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
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    pointerStartX = event.clientX;
  });

  viewport.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) {
      return;
    }

    const distance = event.clientX - pointerStartX;
    pointerStartX = null;

    if (Math.abs(distance) >= 48) {
      moveBy(distance > 0 ? -1 : 1, true);
    }
  });

  viewport.addEventListener("pointercancel", () => {
    pointerStartX = null;
    registerInteraction();
  });

  root.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      moveBy(event.deltaX > 0 ? 1 : -1, true);
    },
    { passive: false }
  );

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      clearAutoplay();
      return;
    }

    scheduleAutoplay(pendingAutoplayDelay);
  });

  reducedMotion.addEventListener?.("change", () => {
    progress.hidden = reducedMotion.matches;

    if (reducedMotion.matches) {
      clearAutoplay();
      return;
    }

    scheduleAutoplay(pendingAutoplayDelay);
  });

  window.addEventListener("resize", () => {
    window.cancelAnimationFrame(resizeFrame);

    resizeFrame = window.requestAnimationFrame(() => {
      fitViewport();

      track.classList.add("is-loop-jumping");
      setTransform(trackIndex, false);
      updateAccessibility();
      void track.offsetWidth;
      track.classList.remove("is-loop-jumping");
    });
  });
}

function setupSegmentedScroll() {
  const desktopMode = window.matchMedia(
    "(min-width: 961px) and (min-height: 761px)"
  );

  const page = document.querySelector(".gd-page");
  const sections = Array.from(document.querySelectorAll(".gd-screen"));
  const sideNav = document.querySelector("[data-side-nav]");
  const sideLinks = Array.from(
    document.querySelectorAll("[data-side-nav-link]")
  );

  if (!page || sections.length === 0) {
    return;
  }

  let activeIndex = findClosestSectionIndex();
  let isAnimating = false;
  let unlockTimer = null;
  let scrollFrame = null;
  let fixedUpButton = null;
  let fixedDownButton = null;

  const scrollDuration = 1200;

  updateNavigation(activeIndex);

  function getHeaderHeight() {
    const value = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--gd-header-height");

    return Number.parseFloat(value) || 72;
  }

  function findClosestSectionIndex() {
    const headerHeight = getHeaderHeight();
    const viewportProbe =
      window.scrollY +
      headerHeight +
      (window.innerHeight - headerHeight) * 0.5;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    sections.forEach((section, index) => {
      const sectionCenter =
        section.offsetTop + section.offsetHeight * 0.5;

      const distance = Math.abs(sectionCenter - viewportProbe);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  }

  function getSectionIndexByHash(hash) {
    const target = document.querySelector(hash);

    if (!target) {
      return -1;
    }

    return sections.indexOf(target);
  }

  function updateNavigation(index) {
    activeIndex = Math.max(0, Math.min(index, sections.length - 1));

    if (sideNav) {
      sideNav.classList.toggle(
        "is-visible",
        desktopMode.matches
      );
    }

    if (fixedUpButton && fixedDownButton) {
      fixedUpButton.disabled = activeIndex === 0;
      fixedDownButton.disabled =
        activeIndex === sections.length - 1;

      fixedUpButton.setAttribute(
        "aria-label",
        activeIndex === 0
          ? "Предыдущего раздела нет"
          : "Перейти к предыдущему разделу"
      );

      fixedDownButton.setAttribute(
        "aria-label",
        activeIndex === sections.length - 1
          ? "Следующего раздела нет"
          : "Перейти к следующему разделу"
      );
    }

    sideLinks.forEach((link) => {
      const linkIndex = getSectionIndexByHash(link.hash);
      const isActive = linkIndex === activeIndex;

      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    sections.forEach((section, sectionIndex) => {
      section.classList.toggle(
        "is-scroll-target",
        sectionIndex === activeIndex
      );
    });
  }

  function easeInOutCubic(progress) {
    return progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  }

  function animateWindowScroll(targetY, duration, onComplete) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        window.requestAnimationFrame(step);
        return;
      }

      window.scrollTo(0, targetY);
      onComplete();
    }

    window.requestAnimationFrame(step);
  }

  function finishScroll(index) {
    activeIndex = index;
    isAnimating = false;
    page.classList.remove("gd-is-segment-scrolling");
    updateNavigation(index);
  }

  function goToSection(index) {
    const nextIndex = Math.max(
      0,
      Math.min(index, sections.length - 1)
    );

    const target = sections[nextIndex];

    if (!target || isAnimating || nextIndex === activeIndex) {
      return;
    }

    isAnimating = true;
    activeIndex = nextIndex;

    page.classList.add("gd-is-segment-scrolling");
    updateNavigation(nextIndex);

    const targetY = Math.max(
      0,
      target.offsetTop - getHeaderHeight()
    );

    window.clearTimeout(unlockTimer);

    animateWindowScroll(
      targetY,
      scrollDuration,
      () => finishScroll(nextIndex)
    );

    // Safety fallback in case an animation frame is interrupted.
    unlockTimer = window.setTimeout(() => {
      if (isAnimating) {
        window.scrollTo(0, targetY);
        finishScroll(nextIndex);
      }
    }, scrollDuration + 180);
  }


  function createSectionStepControls() {
    if (document.querySelector("[data-page-step-controls]")) {
      return;
    }

    const controls = document.createElement("div");
    controls.className = "gd-page-step-controls";
    controls.dataset.pageStepControls = "";

    fixedUpButton = document.createElement("button");
    fixedUpButton.type = "button";
    fixedUpButton.className =
      "gd-section-step gd-section-step--up";
    fixedUpButton.innerHTML =
      '<span aria-hidden="true">‹</span>';

    fixedDownButton = document.createElement("button");
    fixedDownButton.type = "button";
    fixedDownButton.className =
      "gd-section-step gd-section-step--down";
    fixedDownButton.innerHTML =
      '<span aria-hidden="true">›</span>';

    fixedUpButton.addEventListener("click", () => {
      goToSection(activeIndex - 1);
    });

    fixedDownButton.addEventListener("click", () => {
      goToSection(activeIndex + 1);
    });

    controls.append(fixedUpButton, fixedDownButton);
    document.body.append(controls);
  }

  createSectionStepControls();
  updateNavigation(activeIndex);

  window.addEventListener(
    "wheel",
    (event) => {
      if (!desktopMode.matches) {
        return;
      }

      // Momentum events must not move the document while a segment
      // transition is already in progress.
      event.preventDefault();

      if (isAnimating || Math.abs(event.deltaY) < 8) {
        return;
      }

      const direction = event.deltaY > 0 ? 1 : -1;
      goToSection(activeIndex + direction);
    },
    { passive: false }
  );

  window.addEventListener("keydown", (event) => {
    if (!desktopMode.matches || isAnimating) {
      return;
    }

    const tagName = document.activeElement?.tagName;

    if (
      tagName === "INPUT" ||
      tagName === "TEXTAREA" ||
      tagName === "SELECT"
    ) {
      return;
    }

    if (["ArrowDown", "PageDown"].includes(event.key)) {
      event.preventDefault();
      goToSection(activeIndex + 1);
    }

    if (["ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      goToSection(activeIndex - 1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      goToSection(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      goToSection(sections.length - 1);
    }
  });

  document
    .querySelectorAll(
      '.gd-header__nav a[href^="#"], ' +
      '[data-side-nav-link], [data-section-link]'
    )
    .forEach((link) => {
      link.addEventListener("click", (event) => {
        const index = getSectionIndexByHash(link.hash);

        if (index === -1 || !desktopMode.matches) {
          return;
        }

        event.preventDefault();

        if (index === activeIndex) {
          return;
        }

        goToSection(index);
      });
    });

  // Keeps navigation correct after scrollbar dragging, history jumps,
  // resizing and other non-wheel changes.
  window.addEventListener(
    "scroll",
    () => {
      if (isAnimating) {
        return;
      }

      window.cancelAnimationFrame(scrollFrame);

      scrollFrame = window.requestAnimationFrame(() => {
        updateNavigation(findClosestSectionIndex());
      });
    },
    { passive: true }
  );

  window.addEventListener("resize", () => {
    if (!desktopMode.matches) {
      sideNav?.classList.remove("is-visible");
      page.classList.remove("gd-is-segment-scrolling");
      isAnimating = false;
      return;
    }

    updateNavigation(findClosestSectionIndex());
  });
}
