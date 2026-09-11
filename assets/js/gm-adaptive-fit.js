(() => {
  const root = document.documentElement;
  const body = document.body;
  const screens = Array.from(document.querySelectorAll(".gm-main > section"));
  const flowingScreenIds = new Set(["faq"]);

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

  const clearFlowGeometry = (screen) => {
    screen.style.removeProperty("height");
    screen.style.removeProperty("min-height");
    screen.style.removeProperty("overflow");
    screen.style.removeProperty("padding-top");
    screen.style.removeProperty("padding-bottom");
    screen.style.removeProperty("display");
    screen.style.removeProperty("align-items");

    const content = screen.querySelector(":scope > .gm-container");
    if (!content) return;

    content.style.removeProperty("height");
    content.style.removeProperty("min-height");
    content.style.removeProperty("align-content");
    content.style.removeProperty("align-items");
    content.style.removeProperty("grid-template-columns");
    content.style.removeProperty("grid-template-rows");
    content.style.removeProperty("gap");

    if (screen.id === "faq") {
      const heading = content.firstElementChild;
      const headingTitle = heading?.querySelector("h2");
      const list = content.querySelector(".gm-faq-list");

      heading?.style.removeProperty("text-align");
      heading?.style.removeProperty("align-self");
      heading?.style.removeProperty("justify-self");
      headingTitle?.style.removeProperty("margin-bottom");

      if (list) {
        list.style.removeProperty("width");
        list.style.removeProperty("justify-self");
        list.style.removeProperty("align-self");

        list.querySelectorAll("summary").forEach((summary) => {
          summary.style.removeProperty("font-size");
          summary.style.removeProperty("padding-top");
          summary.style.removeProperty("padding-bottom");
        });
      }
    }
  };

  const applyFlowGeometry = (screen, wide) => {
    if (!flowingScreenIds.has(screen.id)) return false;

    resetScreen(screen);

    if (!wide) {
      clearFlowGeometry(screen);
      return true;
    }

    /*
      FAQ keeps one visible-screen minimum, but its real height is content-driven.
      Opening answers therefore extends normal page flow instead of triggering a
      fitter level, clipping content, or introducing an internal scrollbar.
    */
    screen.style.height = "auto";
    screen.style.minHeight = "var(--gm-viewport-fit)";
    screen.style.overflow = "visible";
    screen.style.paddingTop = "clamp(46px, 6dvh, 64px)";
    screen.style.paddingBottom = "clamp(46px, 6dvh, 64px)";
    screen.style.display = "block";
    screen.style.removeProperty("align-items");

    const content = screen.querySelector(":scope > .gm-container");
    if (content) {
      content.style.height = "auto";
      content.style.minHeight = "calc(var(--gm-viewport-fit) - 128px)";
      content.style.alignContent = "stretch";
      content.style.alignItems = "stretch";

      if (screen.id === "faq") {
        content.style.gridTemplateColumns = "1fr";
        content.style.gridTemplateRows = "auto minmax(0, 1fr)";
        content.style.gap = "clamp(18px, 2.5dvh, 28px)";

        const heading = content.firstElementChild;
        const headingTitle = heading?.querySelector("h2");
        const list = content.querySelector(".gm-faq-list");

        if (heading) {
          heading.style.textAlign = "center";
          heading.style.alignSelf = "start";
          heading.style.justifySelf = "stretch";
        }

        if (headingTitle) {
          headingTitle.style.marginBottom = "0";
        }

        if (list) {
          list.style.width = "min(100%, 1080px)";
          list.style.justifySelf = "center";
          list.style.alignSelf = "start";

          list.querySelectorAll("summary").forEach((summary) => {
            summary.style.fontSize = "clamp(1.35rem, 2.8dvh, 1.7rem)";
            summary.style.paddingTop = "clamp(17px, 2.25dvh, 24px)";
            summary.style.paddingBottom = "clamp(17px, 2.25dvh, 24px)";
          });
        }
      }
    }

    return true;
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
    const wide = isWideMode();

    screens.forEach((screen) => {
      if (applyFlowGeometry(screen, wide)) return;

      if (!wide) {
        resetScreen(screen);
        return;
      }

      fitScreen(screen, cfg);
    });
  };

  let timer = 0;
  const scheduleFit = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      window.requestAnimationFrame(fitAll);
    }, config().recheckMs);
  };

  const setupFaqAccordion = () => {
    const faq = document.getElementById("faq");
    if (!faq) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    faq.querySelectorAll(".gm-faq-list details").forEach((details) => {
      const summary = details.querySelector(":scope > summary");
      if (!summary || details.dataset.faqAnimated === "true") return;

      const answer = document.createElement("div");
      const inner = document.createElement("div");
      answer.className = "gm-faq-answer";
      inner.className = "gm-faq-answer__inner";

      Array.from(details.childNodes).forEach((node) => {
        if (node === summary || node === answer) return;
        if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) return;
        inner.appendChild(node);
      });

      answer.appendChild(inner);
      details.appendChild(answer);
      details.dataset.faqAnimated = "true";

      Object.assign(answer.style, {
        overflow: "hidden",
        height: details.open ? "auto" : "0px",
        opacity: details.open ? "1" : "0",
        transition: "height 380ms cubic-bezier(.22, 1, .36, 1), opacity 220ms ease"
      });

      summary.addEventListener("click", (event) => {
        event.preventDefault();
        if (details.dataset.faqAnimating === "true") return;

        const opening = !details.open;

        if (reducedMotion.matches) {
          details.open = opening;
          answer.style.height = opening ? "auto" : "0px";
          answer.style.opacity = opening ? "1" : "0";
          scheduleFit();
          return;
        }

        details.dataset.faqAnimating = "true";

        if (opening) {
          details.open = true;
          answer.style.height = "0px";
          answer.style.opacity = "0";
          forceLayout(answer);

          window.requestAnimationFrame(() => {
            answer.style.height = `${inner.scrollHeight}px`;
            answer.style.opacity = "1";
          });
        } else {
          answer.style.height = `${answer.scrollHeight}px`;
          answer.style.opacity = "1";
          forceLayout(answer);

          window.requestAnimationFrame(() => {
            answer.style.height = "0px";
            answer.style.opacity = "0";
          });
        }

        const finish = (transitionEvent) => {
          if (transitionEvent.propertyName !== "height") return;
          answer.removeEventListener("transitionend", finish);

          if (opening) {
            answer.style.height = "auto";
          } else {
            details.open = false;
          }

          delete details.dataset.faqAnimating;
          scheduleFit();
        };

        answer.addEventListener("transitionend", finish);
      });
    });
  };

  window.addEventListener("resize", scheduleFit, { passive: true });
  window.addEventListener("orientationchange", scheduleFit, { passive: true });
  window.addEventListener("load", scheduleFit, { once: true });

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

  setupFaqAccordion();
  fitAll();
})();
