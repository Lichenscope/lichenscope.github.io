// LichenScope — shared interactivity
document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      var expanded = nav.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // Scroll reveal
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Read more / truncated text toggles
  document.querySelectorAll('.text-toggle').forEach(function (btn) {
    var target = document.getElementById(btn.getAttribute('data-target'));
    if (!target) return;
    btn.addEventListener('click', function () {
      var expanded = target.classList.toggle('is-expanded');
      btn.classList.toggle('is-expanded', expanded);
      btn.querySelector('.text-toggle-label').textContent = expanded ? 'See less' : 'See more';
      btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  });
});
