document
  .querySelector(".toggle-grid-debug-checkbox")
  .addEventListener("change", () => toggleGridDebug());

const toggleGridDebug = () => document.body.classList.toggle("fluxgrid-debug");
