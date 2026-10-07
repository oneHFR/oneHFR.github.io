// Homepage behaviour: table of contents, animated covers, lazy media, theme, AI twin chat.
(function () {
  var hasIO = 'IntersectionObserver' in window;

  // ---- Table of contents: one entry per <section id> with an <h2> ----
  var list = document.querySelector('[data-toc]');
  var sections = Array.prototype.slice.call(document.querySelectorAll('.main section[id]'))
    .filter(function (s) { return s.querySelector('h2'); });
  var links = {};

  sections.forEach(function (s) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + s.id;
    a.textContent = s.querySelector('h2').textContent.trim();
    li.appendChild(a);
    list.appendChild(li);
    links[s.id] = a;
  });

  function setActive(id) {
    Object.keys(links).forEach(function (k) { links[k].classList.toggle('is-active', k === id); });
    var a = links[id];
    // Keep the active chip visible in the horizontal mobile bar.
    if (a && list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: a.offsetLeft - 16, behavior: 'smooth' });
    }
  }

  function onScroll() {
    var line = window.innerHeight * 0.3;
    var current = sections[0] && sections[0].id;
    sections.forEach(function (s) { if (s.getBoundingClientRect().top <= line) current = s.id; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      current = sections[sections.length - 1].id;
    }
    if (current !== onScroll.last) { onScroll.last = current; setActive(current); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  // ---- Animated covers: load when near the viewport, click toggles still/animated ----
  var covers = document.querySelectorAll('.pub__cover[data-anim]');
  function loadCover(cover) {
    var anim = cover.querySelector('.anim');
    if (anim.getAttribute('src')) return;
    anim.addEventListener('load', function () {
      if (!cover.dataset.paused) cover.classList.add('is-animated');
    }, { once: true });
    anim.src = cover.getAttribute('data-anim');
  }
  covers.forEach(function (cover) {
    cover.addEventListener('click', function () {
      var hint = cover.querySelector('.hint');
      if (!cover.querySelector('.anim').getAttribute('src')) loadCover(cover);
      var on = cover.classList.toggle('is-animated');
      cover.dataset.paused = on ? '' : '1';
      if (hint) hint.textContent = on ? 'Click to pause' : 'Click to play';
    });
  });

  // ---- Lazy media (video, iframes) ----
  function loadMedia(el) {
    var src = el.getAttribute('data-lazy-src');
    if (!src) return;
    el.src = src;
    el.removeAttribute('data-lazy-src');
    if (el.tagName === 'VIDEO') { el.load(); var p = el.play(); if (p) p.catch(function () {}); }
  }
  var lazy = document.querySelectorAll('[data-lazy-src]');
  if (hasIO) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        if (e.target.matches('.pub__cover')) loadCover(e.target); else loadMedia(e.target);
        io.unobserve(e.target);
      });
    }, { rootMargin: '400px 0px' });
    covers.forEach(function (c) { io.observe(c); });
    lazy.forEach(function (el) { io.observe(el); });
  } else {
    covers.forEach(loadCover);
    lazy.forEach(loadMedia);
  }

  // ---- Theme toggle ----
  var toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) toggle.addEventListener('click', function () {
    var root = document.documentElement;
    var current = root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // ---- AI twin chat panel ----
  var panel = document.getElementById('chat-panel');
  var fab = document.querySelector('.chat-fab');
  if (panel) {
    var frame = panel.querySelector('iframe');
    var open = function (e) {
      if (e) e.preventDefault();
      if (!frame.getAttribute('src')) frame.src = frame.getAttribute('data-src');
      panel.hidden = false;
      fab.setAttribute('aria-expanded', 'true');
    };
    var close = function () {
      panel.hidden = true;
      fab.setAttribute('aria-expanded', 'false');
      fab.focus();
    };
    document.querySelectorAll('[data-chat-open]').forEach(function (b) { b.addEventListener('click', open); });
    panel.querySelector('[data-chat-close]').addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) close(); });
  }
})();
