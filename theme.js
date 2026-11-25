// Light / dark mode, shared by both pages. Loaded in <head> so the saved choice applies before the page paints.
// With no saved choice the page follows the computer's setting.
(() => {
  const KEY = "workflow-concept-theme";
  const root = document.documentElement;
  try { const t = localStorage.getItem(KEY); if (t === "light" || t === "dark") root.dataset.theme = t; } catch {}

  const current = () => root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  function label(btn) {
    const dark = current() === "dark";
    btn.textContent = dark ? "☀ Light mode" : "☾ Dark mode";
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("themeBtn");
    if (!btn) return;
    label(btn);
    btn.addEventListener("click", () => {
      const next = current() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem(KEY, next); } catch {}
      label(btn);
    });
    // Keep the label right if the computer's setting changes while no choice is saved.
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => label(btn));
  });
})();
