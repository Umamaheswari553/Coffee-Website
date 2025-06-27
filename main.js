
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const panel  = document.getElementById('panel');
  const close  = document.getElementById('close');

  if (!burger || !panel || !close) return;

  burger.addEventListener('click', () => panel.classList.add('show'));
  close.addEventListener('click', () => panel.classList.remove('show'));

  panel.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => panel.classList.remove('show'))
  );
});
