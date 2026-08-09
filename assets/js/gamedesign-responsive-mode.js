"use strict";

/*
  Current gamedesign.js historically treats desktop as:
  (min-width: 961px) and (min-height: 761px)

  Browser chrome / bookmarks / taskbar can easily make a normal laptop
  fall below 761 CSS px. Remap only that exact legacy query. All other
  matchMedia calls keep native behaviour.
*/
(() => {
  const nativeMatchMedia = window.matchMedia.bind(window);

  const normalize = (query) =>
    String(query).replace(/\s+/g, " ").trim().toLowerCase();

  const legacyDesktopQuery = normalize(
    "(min-width: 961px) and (min-height: 761px)"
  );

  const responsiveDesktopQuery =
    "(min-width: 961px) and (min-height: 540px)";

  window.matchMedia = (query) => {
    if (normalize(query) === legacyDesktopQuery) {
      return nativeMatchMedia(responsiveDesktopQuery);
    }

    return nativeMatchMedia(query);
  };
})();
