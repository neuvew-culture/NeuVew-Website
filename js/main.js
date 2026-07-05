document.addEventListener('DOMContentLoaded', function () {
  // Placeholder for future interactive behavior.
  console.log('Company brochure site loaded.');

  // Inject a mobile hamburger toggler into the header if present.
  try {
    var container = document.querySelector('.site-header .container');
    if (container) {
      var nav = container.querySelector('.site-nav');
      if (nav) {
        var btn = document.createElement('button');
        btn.className = 'hamburger';
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Toggle navigation');
        btn.innerHTML = '<span class="hamburger-box"><span class="hamburger-inner"></span></span>';
        container.insertBefore(btn, nav);
        btn.addEventListener('click', function () {
          var header = document.querySelector('.site-header');
          var open = header.classList.toggle('nav-open');
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
      }
    }
  } catch (e) {
    console.error('Hamburger init failed', e);
  }
});