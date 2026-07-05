document.addEventListener('DOMContentLoaded', function () {
  console.log('Company brochure site loaded.');

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

    var navGroups = document.querySelectorAll('.site-nav .nav-group');
    navGroups.forEach(function (group) {
      var trigger = group.querySelector(':scope > a');
      var dropdown = group.querySelector(':scope > .dropdown');
      if (!trigger || !dropdown) {
        return;
      }

      var row = document.createElement('div');
      row.className = 'nav-row';

      var expandButton = document.createElement('button');
      expandButton.className = 'nav-expand';
      expandButton.setAttribute('type', 'button');
      expandButton.setAttribute('aria-expanded', 'false');
      expandButton.setAttribute('aria-label', 'Expand submenu');

      group.insertBefore(row, dropdown);
      row.appendChild(trigger);
      row.appendChild(expandButton);

      expandButton.addEventListener('click', function (event) {
        if (window.innerWidth > 640) {
          return;
        }

        event.preventDefault();
        var isOpen = group.classList.contains('open');

        group.classList.toggle('open', !isOpen);
        expandButton.setAttribute('aria-expanded', String(!isOpen));
        var dropdown = group.querySelector(':scope > .dropdown');
        if (dropdown) {
          dropdown.style.display = !isOpen ? 'block' : 'none';
        }
      });
    });

    document.addEventListener('click', function (event) {
      if (window.innerWidth > 640) {
        return;
      }

      var insideNav = event.target.closest('.site-nav');
      if (!insideNav) {
        navGroups.forEach(function (group) {
          group.classList.remove('open');
          var trigger = group.querySelector(':scope > a');
          if (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
          }
        });
      }
    });
  } catch (e) {
    console.error('Hamburger init failed', e);
  }
});