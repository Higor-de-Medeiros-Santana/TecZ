// Carousel só no mobile (até 900px)
document.addEventListener('DOMContentLoaded', function () {
  function isMobile() {
    return window.innerWidth <= 900;
  }
  const track = document.querySelector('.carousel-track');
  const cards = Array.from(document.querySelectorAll('.related-card'));
  const prevBtn = document.querySelector('.carousel-nav.prev');
  const nextBtn = document.querySelector('.carousel-nav.next');
  const dots = Array.from(document.querySelectorAll('.carousel-dots .dot'));
  let idx = 0;
  function updateCarousel() {
    cards.forEach((card, i) => card.classList.toggle('active', i === idx));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
    if (isMobile()) {
      track.style.transform = `translateX(-${idx * 100}vw)`;
    } else {
      track.style.transform = '';
      cards.forEach(card => card.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
    }
  }
  function enableCarousel() {
    prevBtn.addEventListener('click', onPrev);
    nextBtn.addEventListener('click', onNext);
    dots.forEach((dot, i) =>
      dot.addEventListener('click', () => {
        idx = i;
        updateCarousel();
      })
    );
    updateCarousel();
  }
  function disableCarousel() {
    prevBtn.removeEventListener('click', onPrev);
    nextBtn.removeEventListener('click', onNext);
    track.style.transform = '';
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
  }
  function onPrev() {
    idx = idx > 0 ? idx - 1 : cards.length - 1;
    updateCarousel();
  }
  function onNext() {
    idx = idx < cards.length - 1 ? idx + 1 : 0;
    updateCarousel();
  }
  function handleResize() {
    if (isMobile()) {
      enableCarousel();
    } else {
      disableCarousel();
    }
  }
  window.addEventListener('resize', handleResize);
  handleResize();
});