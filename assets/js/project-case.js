"use strict";

document.addEventListener("DOMContentLoaded", () => {
  setupContactCopy();
  setupCaseMediaCarousels();
  setupCaseVideoPlayers();
  setupCaseScreens();
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

      hideTimer = window.setTimeout(() => {
        button.classList.remove("is-copied");

        cleanupTimer = window.setTimeout(() => {
          button.classList.remove("is-copy-failed");
        }, 60);
      }, 1750);
    });
  });
}


function setupCaseMediaCarousels() {
  const carousels = document.querySelectorAll(
    "[data-case-carousel]"
  );

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  carousels.forEach((carousel) => {
    const track = carousel.querySelector(
      "[data-case-carousel-track]"
    );

    const slides = Array.from(
      carousel.querySelectorAll(
        "[data-case-carousel-slide]"
      )
    );

    const dots = Array.from(
      carousel.querySelectorAll(
        "[data-case-carousel-dot]"
      )
    );

    const previousButton = carousel.querySelector(
      "[data-case-carousel-previous]"
    );

    const nextButton = carousel.querySelector(
      "[data-case-carousel-next]"
    );

    const currentLabel = carousel.querySelector(
      "[data-case-carousel-current]"
    );

    const progress = carousel.querySelector(
      "[data-case-carousel-progress]"
    );

    if (!track || slides.length === 0) {
      return;
    }

    slides.forEach((slide) => {
      const image = slide.querySelector(
        "[data-case-carousel-image]"
      );

      if (!image) {
        return;
      }

      function markMissing() {
        slide.classList.add("is-missing");
      }

      if (image.complete && image.naturalWidth === 0) {
        markMissing();
      }

      image.addEventListener("error", markMissing);
    });

    let activeIndex = 0;
    let autoplayTimer = null;
    let resumeTimer = null;
    let progressAnimation = null;
    let isPointerInside = false;
    let hasFocusInside = false;

    const autoplayDuration = 6000;
    const interactionDelay = 12000;

    function formatIndex(index) {
      return String(index + 1).padStart(2, "0");
    }

    function stopProgress() {
      progressAnimation?.cancel();
      progressAnimation = null;

      if (progress) {
        progress.style.width = "0";
      }
    }

    function stopAutoplay() {
      window.clearTimeout(autoplayTimer);
      autoplayTimer = null;
      stopProgress();
    }

    function canAutoplay() {
      return (
        slides.length > 1
        && !reducedMotion.matches
        && !document.hidden
        && !isPointerInside
        && !hasFocusInside
      );
    }

    function startAutoplay(delay = autoplayDuration) {
      stopAutoplay();

      if (!canAutoplay()) {
        return;
      }

      if (progress) {
        progressAnimation = progress.animate(
          [
            { width: "0%" },
            { width: "100%" },
          ],
          {
            duration: delay,
            easing: "linear",
            fill: "forwards",
          }
        );
      }

      autoplayTimer = window.setTimeout(() => {
        showSlide(activeIndex + 1, {
          restartAutoplay: true,
        });
      }, delay);
    }

    function scheduleResume() {
      stopAutoplay();
      window.clearTimeout(resumeTimer);

      resumeTimer = window.setTimeout(() => {
        startAutoplay();
      }, interactionDelay);
    }

    function showSlide(
      requestedIndex,
      options = {}
    ) {
      const {
        restartAutoplay = false,
        deliberate = false,
      } = options;

      activeIndex =
        (
          requestedIndex % slides.length
          + slides.length
        ) % slides.length;

      track.style.transform =
        `translate3d(${-activeIndex * 100}%, 0, 0)`;

      slides.forEach((slide, index) => {
        const isActive = index === activeIndex;

        slide.classList.toggle("is-active", isActive);
        slide.setAttribute(
          "aria-hidden",
          String(!isActive)
        );
      });

      dots.forEach((dot, index) => {
        const isActive = index === activeIndex;

        dot.classList.toggle("is-active", isActive);
        dot.setAttribute(
          "aria-selected",
          String(isActive)
        );
      });

      if (currentLabel) {
        currentLabel.textContent =
          formatIndex(activeIndex);
      }

      if (deliberate) {
        scheduleResume();
      } else if (restartAutoplay) {
        startAutoplay();
      }
    }

    previousButton?.addEventListener("click", () => {
      showSlide(activeIndex - 1, {
        deliberate: true,
      });
    });

    nextButton?.addEventListener("click", () => {
      showSlide(activeIndex + 1, {
        deliberate: true,
      });
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = Number.parseInt(
          dot.dataset.caseCarouselDot,
          10
        );

        if (Number.isNaN(index)) {
          return;
        }

        showSlide(index, {
          deliberate: true,
        });
      });
    });

    carousel.addEventListener("pointerenter", () => {
      isPointerInside = true;
      stopAutoplay();
    });

    carousel.addEventListener("pointerleave", () => {
      isPointerInside = false;
      startAutoplay();
    });

    carousel.addEventListener("focusin", () => {
      hasFocusInside = true;
      stopAutoplay();
    });

    carousel.addEventListener("focusout", (event) => {
      if (
        event.relatedTarget
        && carousel.contains(event.relatedTarget)
      ) {
        return;
      }

      hasFocusInside = false;
      startAutoplay();
    });

    document.addEventListener(
      "visibilitychange",
      () => {
        if (document.hidden) {
          stopAutoplay();
        } else {
          startAutoplay();
        }
      }
    );

    reducedMotion.addEventListener?.(
      "change",
      () => {
        if (reducedMotion.matches) {
          stopAutoplay();
        } else {
          startAutoplay();
        }
      }
    );

    showSlide(0);
    startAutoplay();
  });
}

function setupCaseVideoPlayers() {
  const players = document.querySelectorAll(
    "[data-case-video-player]"
  );

  function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return "0:00";
    }

    const rounded = Math.floor(seconds);
    const minutes = Math.floor(rounded / 60);
    const remainder = rounded % 60;

    return `${minutes}:${String(remainder).padStart(2, "0")}`;
  }

  function waitForMetadata(video) {
    if (
      video.readyState >= HTMLMediaElement.HAVE_METADATA
      && Number.isFinite(video.duration)
    ) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      function cleanup() {
        video.removeEventListener(
          "loadedmetadata",
          handleMetadata
        );

        video.removeEventListener(
          "error",
          handleError
        );
      }

      function handleMetadata() {
        cleanup();
        resolve();
      }

      function handleError() {
        cleanup();
        reject(video.error || new Error("Video metadata error."));
      }

      video.addEventListener(
        "loadedmetadata",
        handleMetadata,
        { once: true }
      );

      video.addEventListener(
        "error",
        handleError,
        { once: true }
      );
    });
  }

  players.forEach((player) => {
    const video = player.querySelector(
      "[data-case-video]"
    );

    const loader = player.querySelector(
      "[data-case-video-loader]"
    );

    const playButtons = Array.from(
      player.querySelectorAll(
        "[data-case-video-play]"
      )
    );

    const progress = player.querySelector(
      "[data-case-video-progress]"
    );

    const time = player.querySelector(
      "[data-case-video-time]"
    );

    const volume = player.querySelector(
      "[data-case-video-volume]"
    );

    const fullscreenButton = player.querySelector(
      "[data-case-video-fullscreen]"
    );

    if (
      !video
      || !progress
      || !time
      || !volume
      || !fullscreenButton
    ) {
      return;
    }

    const sourceUrl = video.dataset.caseVideoSrc;
    const sourceMime =
      video.dataset.caseVideoMime || "video/mp4";

    let isSeeking = false;
    let blobUrl = null;
    let loadPromise = null;
    let loadFailed = false;

    function setLoading(isLoading) {
      player.classList.toggle(
        "is-loading",
        isLoading
      );

      player.setAttribute(
        "aria-busy",
        String(isLoading)
      );

      playButtons.forEach((button) => {
        button.disabled = isLoading;
      });

      if (loader) {
        loader.hidden = !isLoading;
      }
    }

    function describeMediaError(error) {
      const mediaError = video.error;

      return {
        sourceUrl,
        fetchOrPlaybackError:
          error instanceof Error
            ? error.message
            : String(error),
        mediaErrorCode: mediaError?.code ?? null,
        mediaErrorMessage: mediaError?.message ?? null,
        networkState: video.networkState,
        readyState: video.readyState,
        currentSrc: video.currentSrc,
      };
    }

    function updatePlayState() {
      const isPlaying =
        !video.paused
        && !video.ended;

      player.classList.toggle(
        "is-playing",
        isPlaying
      );

      playButtons.forEach((button) => {
        button.setAttribute(
          "aria-label",
          isPlaying
            ? "Поставить видео на паузу"
            : (
              loadFailed
                ? "Повторить загрузку видео"
                : "Воспроизвести видео"
            )
        );
      });
    }

    function updateTimeline() {
      const duration = Number.isFinite(video.duration)
        ? video.duration
        : 0;

      const current = Number.isFinite(video.currentTime)
        ? video.currentTime
        : 0;

      if (!isSeeking) {
        const value =
          duration > 0
            ? Math.round((current / duration) * 1000)
            : 0;

        progress.value = String(value);

        progress.style.setProperty(
          "--pc-range-progress",
          `${value / 10}%`
        );
      }

      const remaining = Math.max(
        0,
        duration - current
      );

      time.textContent =
        `${formatTime(current)} / −${formatTime(remaining)}`;
    }

    function releaseBlobUrl() {
      if (!blobUrl) {
        return;
      }

      URL.revokeObjectURL(blobUrl);
      blobUrl = null;
    }

    async function loadVideoBlob(forceReload = false) {
      if (blobUrl && !forceReload) {
        return;
      }

      if (loadPromise && !forceReload) {
        return loadPromise;
      }

      if (!sourceUrl) {
        throw new Error("Video source is not configured.");
      }

      if (forceReload) {
        loadPromise = null;
        releaseBlobUrl();
        video.removeAttribute("src");
      }

      loadPromise = (async () => {
        setLoading(true);
        loadFailed = false;
        player.classList.remove("is-error");

        try {
          const separator =
            sourceUrl.includes("?")
              ? "&"
              : "?";

          const requestUrl =
            `${sourceUrl}${separator}request=${Date.now()}`;

          const response = await fetch(
            requestUrl,
            {
              cache: "no-store",
              credentials: "same-origin",
            }
          );

          if (!response.ok) {
            throw new Error(
              `HTTP ${response.status} ${response.statusText}`
            );
          }

          const buffer = await response.arrayBuffer();

          if (buffer.byteLength === 0) {
            throw new Error("The video response is empty.");
          }

          const blob = new Blob(
            [buffer],
            { type: sourceMime }
          );

          blobUrl = URL.createObjectURL(blob);
          video.src = blobUrl;

          /*
            load() is called exactly once, after the complete file is
            already available locally as a Blob. It no longer interrupts
            an in-progress HTTP media request.
          */
          video.load();

          await waitForMetadata(video);

          player.classList.add("is-ready");
          updateTimeline();
        } catch (error) {
          loadFailed = true;
          player.classList.add("is-error");

          console.error(
            "Project case video failed to load.",
            describeMediaError(error)
          );

          throw error;
        } finally {
          setLoading(false);
        }
      })();

      try {
        await loadPromise;
      } finally {
        loadPromise = null;
      }
    }

    async function togglePlayback() {
      if (!video.paused && !video.ended) {
        video.pause();
        return;
      }

      try {
        await loadVideoBlob(loadFailed);
        await video.play();
      } catch (error) {
        updatePlayState();
      }
    }

    function updateFullscreenState() {
      const isFullscreen =
        document.fullscreenElement === player;

      player.classList.toggle(
        "is-fullscreen",
        isFullscreen
      );

      fullscreenButton.setAttribute(
        "aria-label",
        isFullscreen
          ? "Свернуть видео"
          : "Развернуть видео на весь экран"
      );
    }

    playButtons.forEach((button) => {
      button.addEventListener(
        "click",
        togglePlayback
      );
    });

    video.addEventListener(
      "click",
      togglePlayback
    );

    video.addEventListener(
      "play",
      updatePlayState
    );

    video.addEventListener(
      "pause",
      updatePlayState
    );

    video.addEventListener(
      "ended",
      updatePlayState
    );

    video.addEventListener(
      "loadedmetadata",
      updateTimeline
    );

    video.addEventListener(
      "durationchange",
      updateTimeline
    );

    video.addEventListener(
      "timeupdate",
      updateTimeline
    );

    video.addEventListener(
      "error",
      () => {
        loadFailed = true;
        player.classList.add("is-error");
        updatePlayState();

        console.error(
          "Project case video playback error.",
          describeMediaError(
            video.error || new Error("Unknown media error.")
          )
        );
      }
    );

    progress.addEventListener("input", () => {
      isSeeking = true;

      const value = Number(progress.value);

      progress.style.setProperty(
        "--pc-range-progress",
        `${value / 10}%`
      );

      const duration = Number.isFinite(video.duration)
        ? video.duration
        : 0;

      const previewTime =
        duration * (value / 1000);

      time.textContent =
        `${formatTime(previewTime)} / −${formatTime(
          Math.max(0, duration - previewTime)
        )}`;
    });

    progress.addEventListener("change", () => {
      const duration = Number.isFinite(video.duration)
        ? video.duration
        : 0;

      if (duration > 0) {
        video.currentTime =
          duration
          * (Number(progress.value) / 1000);
      }

      isSeeking = false;
      updateTimeline();
    });

    volume.addEventListener("input", () => {
      video.volume = Number(volume.value);

      volume.style.setProperty(
        "--pc-range-progress",
        `${Number(volume.value) * 100}%`
      );
    });

    fullscreenButton.addEventListener(
      "click",
      async () => {
        try {
          if (document.fullscreenElement === player) {
            await document.exitFullscreen();
            return;
          }

          if (player.requestFullscreen) {
            await player.requestFullscreen();
            return;
          }

          if (video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
          }
        } catch (error) {
          console.warn(
            "Fullscreen request was rejected.",
            error
          );
        }
      }
    );

    document.addEventListener(
      "fullscreenchange",
      updateFullscreenState
    );

    window.addEventListener(
      "pagehide",
      releaseBlobUrl,
      { once: true }
    );

    video.volume = Number(volume.value);

    volume.style.setProperty(
      "--pc-range-progress",
      `${Number(volume.value) * 100}%`
    );

    updatePlayState();
    updateTimeline();

    loadVideoBlob().catch(() => {
      // The center play button becomes a retry control.
    });
  });
}

function setupCaseScreens() {
  const desktopMode = window.matchMedia(
    "(min-width: 961px) and (min-height: 761px)"
  );

  const page = document.querySelector("[data-project-case]");
  const navigation = document.querySelector("[data-case-nav]");
  const toggle = document.querySelector("[data-case-nav-toggle]");

  const sections = Array.from(
    document.querySelectorAll("[data-case-screen]")
  );

  const links = Array.from(
    document.querySelectorAll("[data-case-nav-link]")
  );

  if (!page || sections.length === 0) {
    return;
  }

  let activeIndex = findClosestSectionIndex();
  let isAnimating = false;
  let unlockTimer = null;
  let scrollFrame = null;
  let upButton = null;
  let downButton = null;

  const scrollDuration = 1200;

  function getHeaderHeight() {
    const value = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--gd-header-height");

    return Number.parseFloat(value) || 72;
  }

  function findClosestSectionIndex() {
    const headerHeight = getHeaderHeight();
    const probe =
      window.scrollY
      + headerHeight
      + (window.innerHeight - headerHeight) * 0.5;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    sections.forEach((section, index) => {
      const center =
        section.offsetTop + section.offsetHeight * 0.5;

      const distance = Math.abs(center - probe);

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
    activeIndex = Math.max(
      0,
      Math.min(index, sections.length - 1)
    );

    links.forEach((link) => {
      const linkIndex = getSectionIndexByHash(link.hash);
      const isActive = linkIndex === activeIndex;

      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
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

    if (upButton && downButton) {
      upButton.disabled = activeIndex === 0;
      downButton.disabled =
        activeIndex === sections.length - 1;
    }
  }

  function easeInOutCubic(progress) {
    return progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  }

  function animateWindowScroll(
    targetY,
    duration,
    onComplete
  ) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(
        0,
        startY + distance * easedProgress
      );

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

    page.classList.remove("pc-is-segment-scrolling");
    updateNavigation(index);
  }

  function goToSection(index, updateHash = true) {
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

    page.classList.add("pc-is-segment-scrolling");
    updateNavigation(nextIndex);

    /*
      .pc-main already reserves the fixed-header height.
      Subtracting it again exposed the previous screen.
    */
    const targetY = Math.max(
      0,
      target.offsetTop
    );

    window.clearTimeout(unlockTimer);

    animateWindowScroll(
      targetY,
      scrollDuration,
      () => finishScroll(nextIndex)
    );

    unlockTimer = window.setTimeout(() => {
      if (isAnimating) {
        window.scrollTo(0, targetY);
        finishScroll(nextIndex);
      }
    }, scrollDuration + 180);

    if (updateHash) {
      history.replaceState(
        null,
        "",
        `#${target.id}`
      );
    }
  }

  function createStepControls() {
    if (
      document.querySelector(
        "[data-case-step-controls]"
      )
    ) {
      return;
    }

    const controls = document.createElement("div");

    controls.className = "pc-page-step-controls";
    controls.dataset.caseStepControls = "";

    upButton = document.createElement("button");
    upButton.type = "button";
    upButton.className =
      "pc-section-step pc-section-step--up";
    upButton.innerHTML =
      '<span aria-hidden="true">‹</span>';
    upButton.setAttribute(
      "aria-label",
      "Перейти к предыдущему экрану"
    );

    downButton = document.createElement("button");
    downButton.type = "button";
    downButton.className =
      "pc-section-step pc-section-step--down";
    downButton.innerHTML =
      '<span aria-hidden="true">›</span>';
    downButton.setAttribute(
      "aria-label",
      "Перейти к следующему экрану"
    );

    upButton.addEventListener("click", () => {
      goToSection(activeIndex - 1);
    });

    downButton.addEventListener("click", () => {
      goToSection(activeIndex + 1);
    });

    controls.append(upButton, downButton);
    document.body.append(controls);
  }

  function closeMobileNavigation() {
    navigation?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  }

  createStepControls();
  updateNavigation(activeIndex);

  window.addEventListener(
    "wheel",
    (event) => {
      if (!desktopMode.matches) {
        return;
      }

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
      tagName === "INPUT"
      || tagName === "TEXTAREA"
      || tagName === "SELECT"
      || tagName === "VIDEO"
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
      "[data-case-nav-link], [data-case-link]"
    )
    .forEach((link) => {
      link.addEventListener("click", (event) => {
        const index = getSectionIndexByHash(link.hash);

        if (index === -1) {
          return;
        }

        closeMobileNavigation();

        if (!desktopMode.matches) {
          return;
        }

        event.preventDefault();

        if (index === activeIndex) {
          return;
        }

        goToSection(index);
      });
    });

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle(
        "is-open"
      );

      toggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });
  }

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
    isAnimating = false;
    page.classList.remove("pc-is-segment-scrolling");

    updateNavigation(findClosestSectionIndex());
  });

  const initialIndex = window.location.hash
    ? getSectionIndexByHash(window.location.hash)
    : -1;

  if (initialIndex >= 0) {
    window.requestAnimationFrame(() => {
      const target = sections[initialIndex];
      /*
        .pc-main already reserves the fixed-header height.
        Subtracting it again exposed the previous screen.
      */
      const targetY = Math.max(
        0,
        target.offsetTop
      );

      window.scrollTo(0, targetY);
      updateNavigation(initialIndex);
    });
  }
}
