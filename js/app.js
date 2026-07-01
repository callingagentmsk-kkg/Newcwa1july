/* ============================================================
   CWA SCIENCE CLASSES — Global App JS
   Mobile menu, navbar scroll, hero slider, AOS-lite reveal,
   marquee, back-to-top, typed hero text.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => preloader.classList.add('hide'), 350);
    });
    // fallback in case load event already fired
    setTimeout(() => preloader.classList.add('hide'), 1800);
  }

  /* ---------- Navbar scroll shadow ---------- */
  const navbar = document.querySelector('.navbar');
  const onScroll = () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 10);
    const backTop = document.querySelector('.back-top');
    if (backTop) backTop.classList.toggle('show', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* ---------- Mobile Menu ---------- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuOverlay = document.querySelector('.menu-overlay');
  const closeBtn = document.querySelector('.mobile-menu .close-btn');

  function openMenu() {
    hamburger && hamburger.classList.add('open');
    mobileMenu && mobileMenu.classList.add('open');
    menuOverlay && menuOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger && hamburger.classList.remove('open');
    mobileMenu && mobileMenu.classList.remove('open');
    menuOverlay && menuOverlay.classList.remove('show');
    document.body.style.overflow = '';
  }
  hamburger && hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });
  closeBtn && closeBtn.addEventListener('click', closeMenu);
  menuOverlay && menuOverlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', closeMenu));

  /* ---------- Back to top ---------- */
  const backTop = document.querySelector('.back-top');
  backTop && backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- AOS-lite scroll reveal ---------- */
  const revealEls = document.querySelectorAll('[data-aos]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-aos-delay') || 0;
          setTimeout(() => entry.target.classList.add('aos-animate'), parseInt(delay));
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('aos-animate'));
  }

  /* ---------- Animated Counters ---------- */
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length && 'IntersectionObserver' in window) {
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterIO.observe(c));
  }
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-counter'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1600;
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
  }

  /* ---------- Hero Typed Text ---------- */
  const typedEl = document.getElementById('typedText');
  if (typedEl) {
    const words = JSON.parse(typedEl.getAttribute('data-words') || '[]');
    let wIndex = 0, chIndex = 0, deleting = false;
    function typeLoop() {
      const word = words[wIndex];
      if (!deleting) {
        chIndex++;
        typedEl.textContent = word.substring(0, chIndex);
        if (chIndex === word.length) { deleting = true; setTimeout(typeLoop, 1400); return; }
      } else {
        chIndex--;
        typedEl.textContent = word.substring(0, chIndex);
        if (chIndex === 0) { deleting = false; wIndex = (wIndex + 1) % words.length; }
      }
      setTimeout(typeLoop, deleting ? 40 : 85);
    }
    if (words.length) typeLoop();
  }

  /* ---------- Hero Slider ---------- */
  const slider = document.querySelector('.hero-slider');
  if (slider) {
    const slides = slider.querySelectorAll('.hero-slide');
    const dotsWrap = slider.querySelector('.slider-dots');
    let current = 0, timer;
    slides.forEach((s, i) => {
      const dot = document.createElement('button');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dotsWrap && dotsWrap.appendChild(dot);
    });
    const dots = dotsWrap ? dotsWrap.querySelectorAll('button') : [];
    function goTo(idx) {
      slides[current].classList.remove('active');
      dots[current] && dots[current].classList.remove('active');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current] && dots[current].classList.add('active');
    }
    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }
    slider.querySelector('.slider-arrow.next') && slider.querySelector('.slider-arrow.next').addEventListener('click', () => { next(); resetTimer(); });
    slider.querySelector('.slider-arrow.prev') && slider.querySelector('.slider-arrow.prev').addEventListener('click', () => { prev(); resetTimer(); });
    function resetTimer() { clearInterval(timer); timer = setInterval(next, 4500); }
    resetTimer();
  }

  /* ---------- Testimonial / Topper Carousel drag scroll ---------- */
  document.querySelectorAll('.topper-carousel').forEach(carousel => {
    let isDown = false, startX, scrollLeft;
    carousel.addEventListener('mousedown', (e) => { isDown = true; startX = e.pageX - carousel.offsetLeft; scrollLeft = carousel.scrollLeft; });
    carousel.addEventListener('mouseleave', () => isDown = false);
    carousel.addEventListener('mouseup', () => isDown = false);
    carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      carousel.scrollLeft = scrollLeft - (x - startX) * 1.5;
    });
  });

  /* ---------- Active nav link highlight (based on current page) ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a, .mobile-actionbar a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.split('/').pop() === currentPage && currentPage !== '') {
      a.classList.add('active');
    }
  });

});
