(() => {
  const views = [...document.querySelectorAll("[data-view]")];
  const panels = [...document.querySelectorAll("[data-panel]")];
  const filters = [...document.querySelectorAll("[data-category]")];
  const posts = [...document.querySelectorAll("[data-post]")];
  function render() {
    const state = new URLSearchParams(location.hash.slice(1));
    const view = views.some((b) => b.dataset.view === state.get("view"))
      ? state.get("view")
      : "journal";
    const category = filters.some((b) => b.dataset.category === state.get("category"))
      ? state.get("category")
      : "全部";
    views.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.view === view)));
    panels.forEach((p) => (p.hidden = p.id !== view));
    filters.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.category === category)));
    let count = 0;
    posts.forEach((p) => {
      const categories = JSON.parse(p.dataset.categories || "null") || [];
      p.hidden = category !== "全部" && !categories.includes(category);
      if (!p.hidden) count++;
    });
    document.getElementById("post-count").textContent = `${count} 篇文章`;
    document.getElementById("empty-posts").hidden = count > 0;
  }
  function update(key, value) {
    const state = new URLSearchParams(location.hash.slice(1));
    state.set(key, value);
    location.hash = state.toString();
  }
  views.forEach((b) => b.addEventListener("click", () => update("view", b.dataset.view)));
  filters.forEach((b) => b.addEventListener("click", () => update("category", b.dataset.category)));
  window.addEventListener("hashchange", render);
  render();
})();
