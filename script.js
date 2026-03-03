const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');
const form = document.querySelector('.booking-form');
const message = document.querySelector('.form-message');
const yearEl = document.getElementById('year');
const toTopBtn = document.querySelector('.to-top-btn');

yearEl.textContent = new Date().getFullYear();

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 980) {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

if (form && message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      message.textContent = 'Molimo popuni obavezna polja prije slanja.';
      return;
    }

    const formData = new FormData(form);
    const name = formData.get('ime');

    message.textContent = `Hvala, ${name}. Tvoja rezervacija je zaprimljena (demo poruka).`;
    form.reset();
  });
}

const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealItems.forEach((el) => observer.observe(el));

if (toTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 260) {
      toTopBtn.classList.add('is-visible');
    } else {
      toTopBtn.classList.remove('is-visible');
    }
  });

  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const heroCarousel = document.querySelector('.hero-carousel');

if (heroCarousel) {
  const slides = Array.from(heroCarousel.querySelectorAll('.hero-slide'));
  const dots = Array.from(heroCarousel.querySelectorAll('.hero-dot'));
  const intervalMs = Number(heroCarousel.dataset.interval) || 5000;
  let activeIndex = 0;
  let timer = null;

  const setActiveSlide = (index) => {
    activeIndex = index;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
  };

  const nextSlide = () => {
    const nextIndex = (activeIndex + 1) % slides.length;
    setActiveSlide(nextIndex);
  };

  const startAutoplay = () => {
    timer = window.setInterval(nextSlide, intervalMs);
  };

  const resetAutoplay = () => {
    if (timer) {
      window.clearInterval(timer);
    }
    startAutoplay();
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      setActiveSlide(index);
      resetAutoplay();
    });
  });

  setActiveSlide(0);
  startAutoplay();
}
