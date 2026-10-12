export type Theme = "light" | "dark";

/** localStorage key holding the visitor's explicit theme choice. */
export const THEME_STORAGE_KEY = "theme";

/**
 * Runs synchronously in <head>, before first paint, so a saved theme
 * choice applies without a flash of the other theme. With no saved choice
 * the CSS simply follows `prefers-color-scheme`.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;
