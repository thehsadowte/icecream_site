(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileLink = document.querySelectorAll('.navigation__link');
  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    document.body.classList.toggle('overflow');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
  });
  mobileLink.forEach(item => {
    item.addEventListener('click', function () {
      menuBtnRef.classList.remove('is-open');
      document.body.classList.remove('overflow');
    });
  });
})();
