document.querySelectorAll("[data-collection]").forEach((collection) => {
  const buttons = [...collection.querySelectorAll("[data-pick]")];
  const entries = [...collection.querySelectorAll("[data-entry]")];
  function filter(kind) {
    let count = 0;
    entries.forEach((entry) => {
      entry.hidden = kind !== "全部" && entry.dataset.kind !== kind;
      if (!entry.hidden) count++;
    });
    buttons.forEach((button) =>
      button.setAttribute("aria-pressed", String(button.dataset.pick === kind)),
    );
    collection.querySelector("[data-result-count]").textContent = `${count} 個項目`;
    collection.querySelector("[data-no-results]").hidden = count > 0;
  }
  buttons.forEach((button) => button.addEventListener("click", () => filter(button.dataset.pick)));
  filter("全部");
});
