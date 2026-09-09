(() => {
  const root = document.documentElement;
  const body = document.body;
  const screens = Array.from(document.querySelectorAll(".gm-main > section"));

  if (!body.classList.contains("gm-page") || screens.length === 0) return;

  const readNumber = (name, fallback) => {
    const raw = getComputedStyle(root).getPropertyValue(name).trim();
    const value = Number.parseFloat(raw);
    return Number.isFinite(value) ? value : fallback;
  };

  const config = () => ({
    desktopMinWidth: readNumber("--gm-adapt-desktop-min-width", 961),
    tolerance: readNumber("--gm-adapt-overflow-tolerance", 3),
    maxLevel: Math.max(0, Math.round(readNumber("--gm-adapt-max-level", 3))),
    recheckMs: Math.max(0, Math.round(readNumber("--gm-adapt-recheck-ms", 120)))
  });

  const isWideMode = () => window.innerWidth >= config().desktopMinWidth;

  const hasOverflow = (screen, tolerance) => {
    const vertical = screen.scrollHeight - screen.clientHeight > tolerance;
    const horizontal = screen.scrollWidth - screen.clientWidth > tolerance;
    return vertical || horizontal;
  };

  const resetScreen = (screen) => {
    screen.removeAttribute("data-fit-level");
    screen.removeAttribute("data-fit-overflow");
  };

  const forceLayout = (node) => node.getBoundingClientRect();

  const fitScreen = (screen, cfg) => {
    resetScreen(screen);
    forceLayout(screen);

    if (!hasOverflow(screen, cfg.tolerance)) return;

    for (let level = 1; level <= cfg.maxLevel; level += 1) {
      screen.dataset.fitLevel = String(level);
      forceLayout(screen);

      if (!hasOverflow(screen, cfg.tolerance)) return;
    }

    screen.dataset.fitOverflow = "true";
  };

  const fitAll = () => {
    const cfg = config();

    if (!isWideMode()) {
      screens.forEach(resetScreen);
      return;
    }

    screens.forEach((screen) => fitScreen(screen, cfg));
  };

  let timer = 0;
  const scheduleFit = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      window.requestAnimationFrame(fitAll);
    }, config().recheckMs);
  };

  window.addEventListener("resize", scheduleFit, { passive: true });
  window.addEventListener("orientationchange", scheduleFit, { passive: true });
  window.addEventListener("load", scheduleFit, { once: true });

  /* FAQ changes its real content height after opening/closing. */
  document.addEventListener("toggle", (event) => {
    if (event.target instanceof HTMLDetailsElement) scheduleFit();
  }, true);

  if (document.fonts?.ready) {
    document.fonts.ready.then(scheduleFit).catch(() => {});
  }

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(scheduleFit);
    screens.forEach((screen) => {
      const content = screen.querySelector(":scope > .gm-container, :scope > .gm-split__content");
      if (content) observer.observe(content);
    });
  }

  fitAll();
})();
