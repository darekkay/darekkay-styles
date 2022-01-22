/**
 * Theme select component
 *
 * Uses progressive enhancement, so no picker will be displayed if JS is turned off.
 */

const THEME_PICKER_SELECTOR = ".dk-theme-picker";

const ICON_LIGHT = `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0zm-.464 4.95l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414zm2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414zM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1z" fill="currentColor"/>`;

const ICON_DARK = `<path d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z" fill="currentColor"/>`;

const svgIcon = (path, theme) => `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" data-theme-icon="${theme}"><g fill="none">${path}</g></svg>`;

const getNextTheme = (theme) => theme === "default" ? "dark" : "default";

const getTitle = (currentTheme) => `Switch to ${getNextTheme(currentTheme)} theme`;

[...document.querySelectorAll(THEME_PICKER_SELECTOR)].forEach((themePickerElement) => {
  const button = document.createElement("button");
  button.className = "btn flex items-center justify-center border-0 rounded-full";
  button.innerHTML = `${svgIcon(ICON_LIGHT, "default")} ${svgIcon(ICON_DARK, "dark")}`;
  button.title = getTitle(document.documentElement.dataset.theme);

  button.addEventListener("click", () => {
    const nextTheme = getNextTheme(document.documentElement.dataset.theme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    button.title = getTitle(nextTheme);
  });

  themePickerElement.appendChild(button);
});

// sync color scheme preference changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function(event) {
    const nextTheme = event.matches ? "dark" : "default";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);

    [...document.querySelectorAll(`${THEME_PICKER_SELECTOR} button`)].forEach((themePickerButton) => {
      themePickerButton.title = getTitle(nextTheme);
    });
  });
