// Hamburger menu for the main navigation on phones.
// The button is added here, so without JavaScript the links simply stay visible.
(function () {
  var header = document.querySelector('.site-header');
  var nav = header && header.querySelector('nav');
  if (!nav) return;

  var phone = window.matchMedia('(max-width: 560px)');
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-label', 'Menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'site-nav');
  btn.innerHTML = '<span class="bars" aria-hidden="true"><i></i><i></i><i></i></span>';
  nav.id = 'site-nav';
  header.querySelector('.wrap').insertBefore(btn, nav);
  header.classList.add('has-toggle');

  function setOpen(open, returnFocus) {
    header.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (!open && returnFocus) btn.focus();
  }

  btn.addEventListener('click', function () {
    setOpen(!header.classList.contains('open'));
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('open')) setOpen(false, true);
  });
  document.addEventListener('click', function (e) {
    if (header.classList.contains('open') && !header.contains(e.target)) setOpen(false);
  });
  // Leaving phone width (rotation, resize) resets the menu.
  var reset = function () { if (!phone.matches) setOpen(false); };
  if (phone.addEventListener) phone.addEventListener('change', reset);
  else phone.addListener(reset);
})();
