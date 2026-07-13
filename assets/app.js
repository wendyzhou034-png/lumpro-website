
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.year').forEach(e => e.textContent = new Date().getFullYear());

  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  }

  document.querySelectorAll('form[data-form]').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(f);
    const lines = [
      'Hello LumProTech, I would like an LED display quotation.',
      `Name: ${data.get('name') || '-'}`,
      `Email: ${data.get('email') || '-'}`,
      `WhatsApp: ${data.get('whatsapp') || '-'}`,
      `Country: ${data.get('country') || '-'}`,
      `Product: ${data.get('product') || '-'}`,
      `Screen size: ${data.get('screenSize') || '-'}`,
      `Environment: ${data.get('environment') || '-'}`,
      `Target delivery: ${data.get('delivery') || '-'}`,
      `Details: ${data.get('message') || '-'}`
    ];
    window.open(`https://wa.me/8615015513397?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  }));

  const slider = document.querySelector('.hero-slider');
  if (slider) {
    const slides = Array.from(slider.querySelectorAll('.hero-slide'));
    const dots = Array.from(slider.querySelectorAll('.hero-dot'));
    const prev = slider.querySelector('.hero-nav.prev');
    const next = slider.querySelector('.hero-nav.next');
    let current = 0;
    let timer = null;
    function showSlide(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
      dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    }
    function startAuto(){ stopAuto(); timer = setInterval(() => showSlide(current + 1), 5000); }
    function stopAuto(){ if (timer) clearInterval(timer); timer = null; }
    if(prev) prev.addEventListener('click', () => { showSlide(current - 1); startAuto(); });
    if(next) next.addEventListener('click', () => { showSlide(current + 1); startAuto(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { showSlide(i); startAuto(); }));
    slider.addEventListener('mouseenter', stopAuto);
    slider.addEventListener('mouseleave', startAuto);
    showSlide(0);
    startAuto();
  }
});
