"use strict";

/* =================================================================
   GAME DESIGN ADAPTIVE FITTER
   =================================================================
   Measures actual section overflow on desktop and applies the minimum
   compactness level that makes the section fit inside one viewport.

   Manual tuning lives in:
   assets/css/gamedesign-adaptive-config.css
   ================================================================= */

(() => {
  const root = document.documentElement;
  const body = document.body;

  const readNumber = (name, fallback) => {
    const raw = getComputedStyle(root).getPropertyValue(name).trim();
    const parsed = Number.parseFloat(raw);
    return Number.isFinite(parsed) ? parsed : fallback;
  };

  const config = () => ({
    desktopMinWidth: readNumber("--gd-adapt-desktop-min-width", 961),
    desktopMinHeight: readNumber("--gd-adapt-desktop-min-height", 540),
    tolerance: readNumber("--gd-adapt-overflow-tolerance", 3),
    maxLevel: Math.max(0, Math.min(3, Math.round(readNumber("--gd-adapt-max-level", 3)))),
    recheckMs: Math.max(40, readNumber("--gd-adapt-recheck-ms", 120)),
    debug: readNumber("--gd-adapt-debug", 0) >= 1,
  });

  const getScreens = () => [
    ...document.querySelectorAll(".gd-screen")
  ].filter((screen) => !screen.classList.contains("gd-section--projects"));

  const isDesktop = (cfg) =>
    window.innerWidth >= cfg.desktopMinWidth &&
    window.innerHeight >= cfg.desktopMinHeight;

  const hasOverflow = (screen, tolerance) => {
    const ownVertical = screen.scrollHeight - screen.clientHeight;
    const ownHorizontal = screen.scrollWidth - screen.clientWidth;

    if (ownVertical > tolerance || ownHorizontal > tolerance) {
      return true;
    }

    const screenRect = screen.getBoundingClientRect();
    let maxBottom = screenRect.top;
    let minLeft = screenRect.right;
    let maxRight = screenRect.left;

    const children = screen.querySelectorAll(
      ".gd-background-card, .gd-workflow-stage, .gd-workflow-principle, " +
      ".gd-skill-card, .gd-contact-card, .gd-contact-intro, " +
      ".gd-section__header, .gd-workflow-heading"
    );

    children.forEach((child) => {
      const rect = child.getBoundingClientRect();
      maxBottom = Math.max(maxBottom, rect.bottom);
      minLeft = Math.min(minLeft, rect.left);
      maxRight = Math.max(maxRight, rect.right);
    });

    return (
      maxBottom - screenRect.bottom > tolerance ||
      screenRect.left - minLeft > tolerance ||
      maxRight - screenRect.right > tolerance
    );
  };

  const fitScreen = (screen, cfg) => {
    screen.removeAttribute("data-fit-level");

    if (!hasOverflow(screen, cfg.tolerance)) return 0;

    for (let level = 1; level <= cfg.maxLevel; level += 1) {
      screen.dataset.fitLevel = String(level);
      void screen.offsetHeight;

      if (!hasOverflow(screen, cfg.tolerance)) return level;
    }

    return cfg.maxLevel;
  };

  let resizeTimer = null;
  let running = false;

  const run = () => {
    if (running) return;
    running = true;

    const cfg = config();
    const screens = getScreens();

    if (!isDesktop(cfg)) {
      screens.forEach((screen) => screen.removeAttribute("data-fit-level"));
      body.classList.remove("gd-has-adaptive-fit");
      running = false;
      return;
    }

    const selected = [];

    screens.forEach((screen) => {
      const level = fitScreen(screen, cfg);
      selected.push([screen.id || "unnamed", level]);
    });

    body.classList.add("gd-has-adaptive-fit");

    if (cfg.debug) {
      console.table(selected.map(([section, level]) => ({ section, fitLevel: level })));
    }

    running = false;
  };

  const schedule = () => {
    const cfg = config();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(run, cfg.recheckMs);
  };

  const start = () => {
    requestAnimationFrame(() => requestAnimationFrame(run));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }

  window.addEventListener("load", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  window.addEventListener("orientationchange", schedule, { passive: true });

  if (document.fonts?.ready) {
    document.fonts.ready.then(schedule).catch(() => {});
  }
})();
