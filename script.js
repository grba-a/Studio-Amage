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
    document.body.classList.toggle('nav-open', isOpen && window.innerWidth < 980);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 980) {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 980) {
      document.body.classList.remove('nav-open');
    }
  });
}

if (form && message) {
  const formStartInput = form.querySelector('[data-form-start]');
  const honeypotInput = form.querySelector('input[name="website"]');
  const submitButton = form.querySelector('button[type="submit"]');

  const setFormStartTimestamp = () => {
    if (formStartInput) {
      formStartInput.value = String(Date.now());
    }
  };

  setFormStartTimestamp();

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      message.textContent = 'Molimo popuni obavezna polja prije slanja.';
      if (typeof form.reportValidity === 'function') {
        form.reportValidity();
      }
      return;
    }

    if (honeypotInput && honeypotInput.value.trim() !== '') {
      message.textContent = 'Došlo je do greške pri slanju. Pokušaj ponovno.';
      return;
    }

    const startedAt = Number(formStartInput?.value || 0);
    const elapsedMs = Date.now() - startedAt;
    if (!Number.isFinite(elapsedMs) || elapsedMs < 3000) {
      message.textContent = 'Molimo pričekaj par sekundi pa pokušaj ponovno.';
      return;
    }

    const endpoint = form.getAttribute('action') || '';
    if (!endpoint || endpoint.includes('REPLACE_ME')) {
      message.textContent = 'Kontakt forma još nije spojena. Pošalji Formspree link.';
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get('ime') || 'hvala');

    if (submitButton) {
      submitButton.disabled = true;
    }
    message.textContent = 'Šaljemo upit...';

    fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Form submit failed with status ${response.status}`);
        }

        message.textContent = `Hvala, ${name}. Upit je uspješno poslan.`;
        form.reset();
        setFormStartTimestamp();
      })
      .catch(() => {
        message.textContent = 'Došlo je do greške pri slanju. Pokušaj ponovno.';
      })
      .finally(() => {
        if (submitButton) {
          submitButton.disabled = false;
        }
      });
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

const urgencyTimerEl = document.getElementById('urgency-timer');

if (urgencyTimerEl) {
  const cycleSeconds = 20 * 60;
  let remainingSeconds = cycleSeconds - 1;

  const renderUrgencyTime = (secondsLeft) => {
    const mins = Math.floor(secondsLeft / 60);
    const secs = secondsLeft % 60;
    urgencyTimerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  renderUrgencyTime(remainingSeconds);

  window.setInterval(() => {
    remainingSeconds -= 1;

    if (remainingSeconds < 0) {
      remainingSeconds = cycleSeconds - 1;
    }

    renderUrgencyTime(remainingSeconds);
  }, 1000);
}

const transformPlayers = document.querySelectorAll('.transform-video-player');

if (transformPlayers.length) {
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  transformPlayers.forEach((player) => {
    const video = player.querySelector('.transform-video');
    const toggleBtn = player.querySelector('.transform-video-toggle');

    if (!video || !toggleBtn) return;

    video.muted = true;
    video.controls = false;
    video.playsInline = true;

    const updateUi = () => {
      const isPlaying = !video.paused && !video.ended;
      player.classList.toggle('is-playing', isPlaying);
      toggleBtn.setAttribute('aria-label', isPlaying ? 'Pauziraj video' : 'Pokreni video');
    };

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {});
      }
    };

    video.addEventListener('loadeddata', () => {
      if (video.readyState >= 2) {
        video.currentTime = Math.min(0.08, Math.max(video.duration - 0.01, 0));
      }
    });

    video.addEventListener('play', updateUi);
    video.addEventListener('pause', updateUi);
    video.addEventListener('ended', updateUi);

    toggleBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      if (video.paused || video.ended) {
        playVideo();
      } else {
        video.pause();
      }
    });

    video.addEventListener('click', () => {
      if (video.paused || video.ended) {
        playVideo();
      } else {
        video.pause();
      }
    });

    if (supportsHover) {
      player.addEventListener('mouseenter', () => {
        if (video.paused || video.ended) {
          playVideo();
        }
      });

      player.addEventListener('mouseleave', () => {
        if (!video.paused) {
          video.pause();
        }
      });
    }

    updateUi();
  });
}

const promoPlayers = document.querySelectorAll('.promo-video-player');

if (promoPlayers.length) {
  promoPlayers.forEach((player) => {
    const video = player.querySelector('.promo-video');
    const toggleBtn = player.querySelector('.promo-video-toggle');
    let hasAutoPlayed = false;

    if (!video || !toggleBtn) return;

    video.muted = false;
    video.controls = false;
    video.playsInline = true;

    const updateUi = () => {
      const isPlaying = !video.paused && !video.ended;
      player.classList.toggle('is-playing', isPlaying);
      toggleBtn.setAttribute('aria-label', isPlaying ? 'Pauziraj promo video' : 'Pokreni promo video');
    };

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {});
      }
    };

    video.addEventListener('play', updateUi);
    video.addEventListener('pause', updateUi);
    video.addEventListener('ended', updateUi);

    toggleBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      if (video.paused || video.ended) {
        playVideo();
      } else {
        video.pause();
      }
    });

    video.addEventListener('click', () => {
      if (video.paused || video.ended) {
        playVideo();
      } else {
        video.pause();
      }
    });

    const promoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!hasAutoPlayed && entry.isIntersecting && entry.intersectionRatio >= 0.55) {
            hasAutoPlayed = true;
            playVideo();
          }

          if (!entry.isIntersecting || entry.intersectionRatio < 0.2) {
            if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      {
        threshold: [0.2, 0.55],
      }
    );

    promoObserver.observe(player);

    updateUi();
  });
}

const galleryLightbox = document.getElementById('gallery-lightbox');
const galleryLightboxImage = document.getElementById('gallery-lightbox-image');
const galleryLightboxClose = document.querySelector('.gallery-lightbox-close');
const galleryThumbs = document.querySelectorAll('.gallery-lightbox-img');

if (galleryLightbox && galleryLightboxImage && galleryThumbs.length) {
  const openLightbox = (src, alt) => {
    galleryLightboxImage.src = src;
    galleryLightboxImage.alt = alt || '';
    galleryLightbox.hidden = false;
    document.body.classList.add('no-scroll');
  };

  const closeLightbox = () => {
    galleryLightbox.hidden = true;
    galleryLightboxImage.src = '';
    document.body.classList.remove('no-scroll');
  };

  galleryThumbs.forEach((img) => {
    img.addEventListener('click', () => {
      openLightbox(img.currentSrc || img.src, img.alt);
    });
  });

  if (galleryLightboxClose) {
    galleryLightboxClose.addEventListener('click', closeLightbox);
  }

  galleryLightbox.addEventListener('click', (event) => {
    if (event.target === galleryLightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !galleryLightbox.hidden) {
      closeLightbox();
    }
  });
}
