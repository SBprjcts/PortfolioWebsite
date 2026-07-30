// nav: mark current section.
// Scroll-position based rather than IntersectionObserver ratios, because
// sections taller than the viewport never reach a meaningful ratio.
(function () {
  const links = [...document.querySelectorAll('.nav-links a')];
  const pairs = links
    .map(a => ({ a, el: document.querySelector(a.getAttribute('href')) }))
    .filter(p => p.el);
  if (!pairs.length) return;

  let queued = false;
  function mark() {
    queued = false;
    const line = 90; // just below the sticky nav
    let current = null;
    for (const p of pairs) {
      if (p.el.getBoundingClientRect().top <= line) current = p;
    }
    // past the last section's end, keep the last one lit
    const atBottom = innerHeight + scrollY >= document.body.scrollHeight - 2;
    if (atBottom) current = pairs[pairs.length - 1];
    links.forEach(a => a.classList.toggle('on', !!current && a === current.a));
  }
  function onScroll() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(mark);
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  addEventListener('load', mark);
  mark();
})();

// details: swap +/- marker
document.querySelectorAll('details').forEach(d => {
  const m = d.querySelector('.p-mark');
  if (m) d.addEventListener('toggle', () => { m.textContent = d.open ? '\u2212' : '+'; });
});

// video facades: load the player only on click.
// Avoids YouTube's embed-configuration errors (153) on load and keeps the
// page light; the caption below each one always links out as a fallback.
document.querySelectorAll('.embed[data-vid]').forEach(box => {
  const btn = box.querySelector('.play');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const id = box.dataset.vid;
    const f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + id +
            '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
    f.title = btn.getAttribute('aria-label') || 'Video';
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    f.referrerPolicy = 'strict-origin-when-cross-origin';
    box.replaceChildren(f);
  });
});
