(() => {
 const layer = document.getElementById('snow-layer');
 const button = document.getElementById('snow-toggle');
 const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
 let enabled = true;
 try { enabled = localStorage.getItem('polly-snow') !== 'off'; } catch (_) {}
 for (let i = 0; i < 28; i++) {
   const flake = document.createElement('span');
   flake.className = 'snowflake';
   flake.style.setProperty('--x', `${Math.random() * 100}%`);
   flake.style.setProperty('--size', `${1.5 + Math.random() * 2.5}px`);
   flake.style.setProperty('--alpha', `${0.16 + Math.random() * 0.24}`);
   flake.style.setProperty('--duration', `${16 + Math.random() * 18}s`);
   flake.style.setProperty('--delay', `${-Math.random() * 34}s`);
   flake.style.setProperty('--drift', `${Math.random() * 90 - 45}px`);
   layer.appendChild(flake);
 }
 function sync() {
   const active = enabled && !motion.matches;
   layer.hidden = !active;
   button.setAttribute('aria-pressed', String(active));
   button.textContent = active ? '❄ 飄雪：開' : '❄ 飄雪：關';
   button.disabled = motion.matches;
   button.title = motion.matches ? '依系統減少動態效果設定停用' : '切換飄雪效果';
   layer.querySelectorAll('.snowflake').forEach(flake => {
     flake.style.animationPlayState = active && !document.hidden ? 'running' : 'paused';
   });
 }
 button.addEventListener('click', () => {
   enabled = !enabled;
   try { localStorage.setItem('polly-snow', enabled ? 'on' : 'off'); } catch (_) {}
   sync();
 });
 motion.addEventListener('change', sync);
 document.addEventListener('visibilitychange', sync);
 sync();
})();
