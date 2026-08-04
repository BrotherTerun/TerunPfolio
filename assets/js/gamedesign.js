document.addEventListener("DOMContentLoaded", () => {
  setupProjectRail();
  setupSegmentedScroll();
});

function setupProjectRail() {
  const rail = document.querySelector("[data-project-rail]");
  const controls = document.querySelectorAll("[data-rail-direction]");

  if (!rail || controls.length === 0) {
    return;
  }

  const getStep = () => {
    const card = rail.querySelector(".gd-project-card");

    if (!card) {
      return rail.clientWidth * 0.8;
    }

    const styles = window.getComputedStyle(rail);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");

    return card.getBoundingClientRect().width + gap;
  };

  controls.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = Number(button.dataset.railDirection);

      rail.scrollBy({
        left: getStep() * direction,
        behavior: "smooth"
      });
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
  const sideNavToggle = document.querySelector("[data-side-nav-toggle]");
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

  const scrollDuration = 1200;

  updateNavigation(activeIndex);

  if (sideNav && sideNavToggle) {
    sideNavToggle.addEventListener("click", () => {
      const isOpen = sideNav.classList.toggle("is-pinned-open");

      sideNavToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      sideNavToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Закрыть навигацию по разделам"
          : "Открыть навигацию по разделам"
      );
    });

    sideNav.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") {
        return;
      }

      sideNav.classList.remove("is-pinned-open");
      sideNavToggle.setAttribute("aria-expanded", "false");
      sideNavToggle.setAttribute(
        "aria-label",
        "Открыть навигацию по разделам"
      );
      sideNavToggle.focus();
    });
  }


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
      sideNav.classList.toggle("is-visible", activeIndex > 0);
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
    sections.forEach((section, index) => {
      if (section.querySelector(".gd-section-step")) {
        return;
      }

      const upButton = document.createElement("button");
      upButton.type = "button";
      upButton.className =
        "gd-section-step gd-section-step--up";
      upButton.setAttribute(
        "aria-label",
        index === 0
          ? "Предыдущего раздела нет"
          : "Перейти к предыдущему разделу"
      );
      upButton.innerHTML =
        '<span aria-hidden="true">⌃</span>';
      upButton.disabled = index === 0;

      const downButton = document.createElement("button");
      downButton.type = "button";
      downButton.className =
        "gd-section-step gd-section-step--down";
      downButton.setAttribute(
        "aria-label",
        index === sections.length - 1
          ? "Следующего раздела нет"
          : "Перейти к следующему разделу"
      );
      downButton.innerHTML =
        '<span aria-hidden="true">⌄</span>';
      downButton.disabled = index === sections.length - 1;

      upButton.addEventListener("click", () => {
        goToSection(index - 1);
      });

      downButton.addEventListener("click", () => {
        goToSection(index + 1);
      });

      section.prepend(upButton);
      section.append(downButton);
    });
  }

  createSectionStepControls();

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

      const projectRail = event.target.closest("[data-project-rail]");

      // Preserve deliberate horizontal trackpad scrolling in the rail.
      if (
        projectRail &&
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
      ) {
        projectRail.scrollLeft += event.deltaX;
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
      '.gd-header__nav a[href^="#"], [data-side-nav-link]'
    )
    .forEach((link) => {
      link.addEventListener("click", (event) => {
        const index = getSectionIndexByHash(link.hash);

        if (index === -1 || !desktopMode.matches) {
          return;
        }

        event.preventDefault();

        if (sideNav && sideNavToggle) {
          sideNav.classList.remove("is-pinned-open");
          sideNavToggle.setAttribute("aria-expanded", "false");
          sideNavToggle.setAttribute(
            "aria-label",
            "Открыть навигацию по разделам"
          );
        }

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
