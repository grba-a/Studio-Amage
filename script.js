const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');
const form = document.querySelector('.booking-form');
const message = document.querySelector('.form-message');
const yearEl = document.getElementById('year');
const toTopBtn = document.querySelector('.to-top-btn');
const navCtaBtn = document.querySelector('.nav-cta-btn');
const navCtaMobile = document.querySelector('.nav-cta-mobile');
const mobileCtaSection = document.getElementById('mobile-cta');
const floatingReserveCta = document.querySelector('.floating-reserve-cta');

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

if (navCtaBtn) {
  const toggleNavCtaFixed = () => {
    navCtaBtn.classList.toggle('is-fixed', window.scrollY > 100);
  };

  window.addEventListener('scroll', toggleNavCtaFixed, { passive: true });
  toggleNavCtaFixed();
}

if (navCtaMobile) {
  const mobileCtaBreakpoint = window.matchMedia('(max-width: 768px)');
  let mobileCtaObserver = null;

  const toggleNavCtaMobileFallback = () => {
    navCtaMobile.classList.toggle('is-visible', window.scrollY > 100);
  };

  const disconnectMobileCtaObserver = () => {
    if (mobileCtaObserver) {
      mobileCtaObserver.disconnect();
      mobileCtaObserver = null;
    }
  };

  const setupNavCtaMobileVisibility = () => {
    disconnectMobileCtaObserver();
    window.removeEventListener('scroll', toggleNavCtaMobileFallback);

    if (!mobileCtaBreakpoint.matches) {
      navCtaMobile.classList.remove('is-visible');
      return;
    }

    if (!mobileCtaSection || typeof IntersectionObserver === 'undefined') {
      window.addEventListener('scroll', toggleNavCtaMobileFallback, { passive: true });
      toggleNavCtaMobileFallback();
      return;
    }

    mobileCtaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          navCtaMobile.classList.toggle('is-visible', !entry.isIntersecting);
        });
      },
      {
        threshold: 0,
      }
    );

    mobileCtaObserver.observe(mobileCtaSection);
  };

  if (typeof mobileCtaBreakpoint.addEventListener === 'function') {
    mobileCtaBreakpoint.addEventListener('change', setupNavCtaMobileVisibility);
  } else if (typeof mobileCtaBreakpoint.addListener === 'function') {
    mobileCtaBreakpoint.addListener(setupNavCtaMobileVisibility);
  }

  setupNavCtaMobileVisibility();
}

if (floatingReserveCta) {
  const toggleFloatingReserveCta = () => {
    floatingReserveCta.classList.toggle('is-visible', window.scrollY > 100);
  };

  window.addEventListener('scroll', toggleFloatingReserveCta, { passive: true });
  toggleFloatingReserveCta();
}

const heroCarousel = document.querySelector('.hero-carousel');

if (heroCarousel) {
  const slides = Array.from(heroCarousel.querySelectorAll('.hero-slide'));
  const dots = Array.from(heroCarousel.querySelectorAll('.hero-dot'));
  const intervalMs = Number(heroCarousel.dataset.interval) || 5000;
  const swipeThresholdPx = 46;
  let activeIndex = 0;
  let timer = null;
  let touchStartX = 0;
  let touchDeltaX = 0;

  const setActiveSlide = (index) => {
    activeIndex = index;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
  };

  const nextSlide = () => {
    const nextIndex = (activeIndex + 1) % slides.length;
    setActiveSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    setActiveSlide(prevIndex);
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

  heroCarousel.addEventListener(
    'touchstart',
    (event) => {
      if (event.touches.length !== 1) return;
      touchStartX = event.touches[0].clientX;
      touchDeltaX = 0;
    },
    { passive: true }
  );

  heroCarousel.addEventListener(
    'touchmove',
    (event) => {
      if (event.touches.length !== 1 || touchStartX === 0) return;
      touchDeltaX = event.touches[0].clientX - touchStartX;
    },
    { passive: true }
  );

  heroCarousel.addEventListener(
    'touchend',
    () => {
      if (Math.abs(touchDeltaX) < swipeThresholdPx) {
        touchStartX = 0;
        touchDeltaX = 0;
        return;
      }

      if (touchDeltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }

      resetAutoplay();
      touchStartX = 0;
      touchDeltaX = 0;
    },
    { passive: true }
  );

  setActiveSlide(0);
  startAutoplay();
}

const urgencyTimerEl = document.getElementById('urgency-timer');
const mobileBottomTimerEl = document.getElementById('mobile-bottom-timer');

if (urgencyTimerEl || mobileBottomTimerEl) {
  const cycleSeconds = 20 * 60;
  let remainingSeconds = cycleSeconds - 1;

  const renderUrgencyTime = (secondsLeft) => {
    const mins = Math.floor(secondsLeft / 60);
    const secs = secondsLeft % 60;
    const formattedTime = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (urgencyTimerEl) {
      urgencyTimerEl.textContent = formattedTime;
    }

    if (mobileBottomTimerEl) {
      mobileBottomTimerEl.textContent = formattedTime;
    }
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

const galleryFilterButtons = document.querySelectorAll('.gallery-filter-btn');
const galleryMasonryItems = Array.from(document.querySelectorAll('.gallery-masonry-item'));

if (galleryFilterButtons.length && galleryMasonryItems.length) {
  const filterFadeMs = 300;

  const normalizeFilterValue = (value) => String(value || '').trim().toLowerCase();

  const setActiveFilterButton = (activeButton) => {
    galleryFilterButtons.forEach((button) => {
      const isActive = button === activeButton;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  };

  const showMasonryItem = (item) => {
    if (item.classList.contains('is-filter-hidden')) {
      item.classList.remove('is-filter-hidden');
      item.classList.add('is-filter-fading');
      window.requestAnimationFrame(() => {
        item.classList.remove('is-filter-fading');
      });
      return;
    }

    item.classList.remove('is-filter-fading');
  };

  const hideMasonryItem = (item) => {
    if (item.classList.contains('is-filter-hidden')) return;

    item.classList.add('is-filter-fading');
    window.setTimeout(() => {
      if (!item.classList.contains('is-filter-fading')) return;
      item.classList.add('is-filter-hidden');
      item.classList.remove('is-filter-fading');
    }, filterFadeMs);
  };

  const applyGalleryFilter = (filterValue) => {
    const normalizedFilter = normalizeFilterValue(filterValue);

    galleryMasonryItems.forEach((item) => {
      const image = item.querySelector('.gallery-lightbox-img');
      const itemCategory = normalizeFilterValue(image?.dataset.category);
      const isAllFilter = normalizedFilter === 'all';
      const shouldShow = isAllFilter || (itemCategory !== '' && itemCategory === normalizedFilter);

      if (shouldShow) {
        showMasonryItem(item);
      } else {
        hideMasonryItem(item);
      }
    });
  };

  galleryFilterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setActiveFilterButton(button);
      applyGalleryFilter(button.dataset.filter || 'all');
    });
  });

  applyGalleryFilter('all');
}
