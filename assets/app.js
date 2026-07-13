document.querySelectorAll('.menu-toggle').forEach(button=>button.addEventListener('click',()=>button.closest('header').querySelector('.mobile-menu').classList.toggle('open')));
document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
