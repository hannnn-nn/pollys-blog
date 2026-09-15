(() => {
 const banner = document.getElementById('banner-carousel');
 const slides = [...banner.querySelectorAll('.banner-slide')];
 if (slides.length < 2) return;
 const controls = banner.querySelector('.banner-controls');
 const pause = banner.querySelector('[data-pause]');
 const motion = matchMedia('(prefers-reduced-motion: reduce)');
 let index = 0, paused = motion.matches, timer;
 controls.hidden = false;
 function show(next) {
   index = (next + slides.length) % slides.length;
   slides.forEach((slide, i) => { slide.hidden = i !== index; });
   banner.querySelector('[data-slide-count]').textContent = `${index + 1} / ${slides.length}`;
 }
 function schedule() {
   clearInterval(timer);
   pause.textContent = paused ? '播放' : '暫停';
   if (!paused && !document.hidden) timer = setInterval(() => show(index + 1), Math.max(3, Number(banner.dataset.interval) || 6) * 1000);
 }
 banner.querySelector('[data-prev]').addEventListener('click', () => { show(index - 1); schedule(); });
 banner.querySelector('[data-next]').addEventListener('click', () => { show(index + 1); schedule(); });
 pause.addEventListener('click', () => { paused = !paused; schedule(); });
 banner.addEventListener('focusin', () => { paused = true; schedule(); });
 motion.addEventListener('change', () => { paused = motion.matches; schedule(); });
 document.addEventListener('visibilitychange', schedule);
 show(0); schedule();
})();
