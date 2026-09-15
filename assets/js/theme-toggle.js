(() => {
 const button = document.getElementById('theme-toggle');
 function syncThemeButton() {
   const light = document.documentElement.dataset.theme === 'light';
   button.textContent = light ? '☾ 深色模式' : '☀ 淺色模式';
   button.setAttribute('aria-label', light ? '切換為深色模式' : '切換為淺色模式');
 }
 button.addEventListener('click', () => {
   const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
   document.documentElement.dataset.theme = theme;
   try { localStorage.setItem('polly-theme', theme); } catch (_) {}
   syncThemeButton();
 });
 syncThemeButton();
})();
