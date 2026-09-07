/* The teaser link also works without JavaScript. */
const dialog = document.querySelector('.figure-dialog');
const teaserLink = document.querySelector('.teaser-link');
if (dialog && typeof dialog.showModal === 'function') {
  teaserLink.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
  document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
}

/* Three independent video cases; empty data-src values make no media requests. */
const showcase = document.querySelector('.case-showcase');
if (showcase) {
  const slides = [...showcase.querySelectorAll('.case-slide')];
  const dots = [...showcase.querySelectorAll('.case-dot')];
  const videos = slides.map(slide => slide.querySelector('video'));
  const viewport = showcase.querySelector('.case-viewport');
  const previousButton = showcase.querySelector('.case-prev');
  const nextButton = showcase.querySelector('.case-next');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let transitionId = 0;
  let inView = false;
  let gesture = null;

  function playCurrent() {
    if (!inView || document.hidden || reducedMotion.matches) return;
    const video = videos[current];
    if (video.getAttribute('src') && !video.error) video.play().catch(() => {});
  }

  function prepareVideo(index) {
    const video = videos[index];
    const source = video.dataset.src.trim();
    if (!source || video.getAttribute('src')) return;
    slides[index].querySelector('.case-placeholder p').textContent = 'Loading video…';
    video.muted = true;
    video.preload = 'metadata';
    video.src = source;
    video.load();
  }

  function announce() {
    const message = videos[current].dataset.src.trim() ? '' : ' Video coming soon.';
    showcase.querySelector('.case-announcement').textContent = `Case ${current + 1} of ${slides.length}.${message}`;
  }

  function selectCase(index, direction = Math.sign(index - current)) {
    index = (index + slides.length) % slides.length;
    if (index === current) return;
    const previous = slides[current];
    const id = ++transitionId;
    slides.forEach((slide, i) => {
      slide.getAnimations().forEach(animation => animation.cancel());
      slide.hidden = i !== current;
      slide.inert = i !== index;
      slide.setAttribute('aria-hidden', String(i !== index));
    });
    videos.forEach(video => video.pause());
    current = index;
    const active = slides[current];
    active.hidden = false;
    dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
    showcase.querySelector('#case-current').textContent = String(current + 1).padStart(2, '0');
    prepareVideo(current);
    playCurrent();
    announce();

    if (reducedMotion.matches) {
      previous.hidden = true;
      return;
    }
    const timing = { duration: 520, easing: 'cubic-bezier(.22,.68,0,1)' };
    active.animate([
      { transform: `translateX(${direction * 100}%)`, opacity: .65 },
      { transform: 'translateX(0)', opacity: 1 }
    ], timing);
    const leaving = previous.animate([
      { transform: 'translateX(0)', opacity: 1 },
      { transform: `translateX(${-direction * 100}%)`, opacity: .65 }
    ], timing);
    leaving.onfinish = () => { if (transitionId === id) previous.hidden = true; };
  }

  videos.forEach((video, index) => {
    video.loop = true;
    // Keep the visible case repeating if a browser still emits an ended event.
    video.addEventListener('ended', () => {
      if (index !== current || !inView || document.hidden || reducedMotion.matches || video.error) return;
      video.currentTime = 0;
      playCurrent();
    });
    video.addEventListener('loadedmetadata', () => {
      video.hidden = false;
      slides[index].querySelector('.case-placeholder').hidden = true;
    });
    video.addEventListener('error', () => {
      video.hidden = true;
      const placeholder = slides[index].querySelector('.case-placeholder');
      placeholder.hidden = false;
      placeholder.querySelector('p').textContent = 'Video unavailable. Please try again later.';
    });
    // Native controls on a hidden/offscreen video must never start playback.
    video.addEventListener('play', () => {
      if (index !== current || !inView || document.hidden) video.pause();
    });
  });

  previousButton.addEventListener('click', () => selectCase(current - 1, -1));
  nextButton.addEventListener('click', () => selectCase(current + 1, 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => selectCase(index)));
  showcase.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest('video, input, textarea, select, a')) return;
    const destinations = { ArrowLeft: current - 1, ArrowRight: current + 1, Home: 0, End: slides.length - 1 };
    if (!(event.key in destinations)) return;
    event.preventDefault();
    selectCase(destinations[event.key], event.key === 'ArrowLeft' ? -1 : event.key === 'ArrowRight' ? 1 : Math.sign(destinations[event.key] - current));
  });

  // Swipe on touchscreens or drag a placeholder, preserving native video controls.
  viewport.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0) return;
    if (event.pointerType === 'mouse' && event.target.closest('video')) return;
    const bounds = viewport.getBoundingClientRect();
    if (event.target.closest('video') && event.clientY > bounds.bottom - 60) return;
    gesture = { id: event.pointerId, x: event.clientX, y: event.clientY };
    viewport.setPointerCapture(event.pointerId);
  });
  viewport.addEventListener('pointerup', event => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    gesture = null;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) selectCase(current + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
  });
  viewport.addEventListener('pointercancel', () => { gesture = null; });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting && entries[0].intersectionRatio >= .2;
      if (inView) playCurrent();
      else videos.forEach(video => video.pause());
    }, { threshold: .2 }).observe(viewport);
  } else inView = true;
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) videos.forEach(video => video.pause());
    else playCurrent();
  });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) {
      ++transitionId;
      videos.forEach(video => video.pause());
      slides.forEach((slide, index) => {
        slide.getAnimations().forEach(animation => animation.cancel());
        slide.hidden = index !== current;
      });
    }
  });
  previousButton.hidden = false;
  nextButton.hidden = false;
  showcase.querySelector('.case-navigation').hidden = false;
  prepareVideo(current);
  playCurrent();
}
