(() => {
 const button = document.getElementById('discord-copy');
 const status = document.getElementById('discord-status');
 let timer;
 button.addEventListener('click', async () => {
   clearTimeout(timer);
   try {
     await navigator.clipboard.writeText('hannn_nn');
     status.textContent = '已複製 hannn_nn';
   } catch (_) {
     status.textContent = '請手動複製：hannn_nn';
   }
   timer = setTimeout(() => { status.textContent = ''; }, 6000);
 });
})();
