try {
  document.documentElement.dataset.theme =
    localStorage.getItem("polly-theme") === "light" ? "light" : "dark";
} catch (_) {
  document.documentElement.dataset.theme = "dark";
}
