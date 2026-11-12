document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".content-wrapper");
  if (!wrapper) return;

  const panels = Array.from(wrapper.querySelectorAll(".content"));
  if (panels.length < 2) return;

  let currentIndex = panels.findIndex(panel => panel.classList.contains("active"));
  if (currentIndex < 0) currentIndex = 0;

  let isAnimating = false;
  const durationFallback = 800;

  function showPanel(nextIndex, direction = "down") {
    if (isAnimating || nextIndex === currentIndex) return;
    if (nextIndex < 0 || nextIndex >= panels.length) return;

    isAnimating = true;
    const current = panels[currentIndex];
    const next = panels[nextIndex];

    next.classList.remove("active", "slide-in", "slide-in-down");
    current.classList.remove("slide-out", "slide-out-down");

    if (direction === "down") {
      current.classList.add("slide-out");
      next.classList.add("slide-in");
    } else {
      current.classList.add("slide-out-down");
      next.classList.add("slide-in-down");
    }

    let finished = false;
    function finish() {
      if (finished) return;
      finished = true;
      current.classList.remove("slide-out", "slide-out-down", "active");
      next.classList.remove("slide-in", "slide-in-down");
      next.classList.add("active");
      current.setAttribute("aria-hidden", "true");
      next.removeAttribute("aria-hidden");
      current.removeEventListener("animationend", onAnimationEnd);
      window.clearTimeout(fallbackTimer);
      currentIndex = nextIndex;
      isAnimating = false;

      const focusTarget = next.querySelector("a, button");
      if (focusTarget) focusTarget.focus({ preventScroll: true });
    }

    function onAnimationEnd(event) {
      if (event.target === current) finish();
    }

    current.addEventListener("animationend", onAnimationEnd);
    const fallbackTimer = window.setTimeout(finish, durationFallback);
  }

  wrapper.addEventListener("click", event => {
    const button = event.target.closest("button[data-target]");
    if (!button || !wrapper.contains(button)) return;

    if (button.dataset.target === "next") {
      showPanel(currentIndex + 1, "down");
    } else if (button.dataset.target === "prev") {
      showPanel(currentIndex - 1, "up");
    }
  });

  panels.forEach((panel, index) => {
    if (index !== currentIndex) panel.setAttribute("aria-hidden", "true");
    else panel.removeAttribute("aria-hidden");
  });
});
