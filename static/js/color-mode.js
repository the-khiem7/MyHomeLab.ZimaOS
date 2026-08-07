(function () {
  "use strict";

  var storageKey = "fcaj-color-mode";
  var root = document.documentElement;
  var control = document.getElementById("color-mode-control");
  var menu = document.getElementById("color-mode-menu");
  if (!control || !menu) return;

  var options = menu.querySelectorAll("[data-color-mode-option]");
  var preference = root.dataset.colorModePreference || "system";
  var mediaQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function effectiveMode(mode) {
    return mode === "system" ? (mediaQuery && mediaQuery.matches ? "dark" : "light") : mode;
  }

  function updateUi() {
    var activeMode = effectiveMode(preference);
    root.dataset.colorModePreference = preference;
    root.dataset.colorMode = activeMode;
    control.dataset.colorMode = activeMode;
    control.setAttribute("data-preference", preference);

    Array.prototype.forEach.call(options, function (option) {
      var selected = option.dataset.colorModeOption === preference;
      option.setAttribute("aria-checked", String(selected));
      option.classList.toggle("is-selected", selected);
    });
  }

  function renderMermaid() {
    if (typeof window.fcajRenderMermaid === "function") window.fcajRenderMermaid();
  }

  function setPreference(nextPreference) {
    preference = nextPreference;
    try {
      window.localStorage.setItem(storageKey, preference);
    } catch (error) {}
    updateUi();
    renderMermaid();
  }

  function closeMenu() {
    menu.hidden = true;
    control.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    var opening = menu.hidden;
    menu.hidden = !opening;
    control.setAttribute("aria-expanded", String(opening));
    if (opening) {
      var selected = menu.querySelector('[aria-checked="true"]');
      if (selected) selected.focus();
    }
  }

  control.addEventListener("click", toggleMenu);
  Array.prototype.forEach.call(options, function (option) {
    option.addEventListener("click", function () {
      setPreference(option.dataset.colorModeOption);
      closeMenu();
      control.focus();
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest("#color-mode-switcher")) closeMenu();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !menu.hidden) {
      closeMenu();
      control.focus();
    }
  });

  function handleSystemChange() {
    if (preference === "system") {
      updateUi();
      renderMermaid();
    }
  }
  if (mediaQuery) {
    if (mediaQuery.addEventListener) mediaQuery.addEventListener("change", handleSystemChange);
    else if (mediaQuery.addListener) mediaQuery.addListener(handleSystemChange);
  }

  updateUi();
})();
