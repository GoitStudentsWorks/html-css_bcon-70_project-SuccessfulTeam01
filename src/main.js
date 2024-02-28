//Реализация открытия/закрытия мобильного меню
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-modal-open-mobile]'),
    closeMenuBtn: document.querySelector('[data-modal-close-mobile]'),
    menu: document.querySelector('[data-modal-mobile]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();

//Реализация активнных ссылок десктопного меню
document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('.header-nav-link');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      navLinks.forEach(function (link) {
        link.classList.remove('active');
      });

      link.classList.add('active');
    });
  });
});

//Реализация активнных ссылок мобильного и планшетного меню
document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('.header-mobile-link');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      navLinks.forEach(function (link) {
        link.classList.remove('active');
      });

      link.classList.add('active');
    });
  });
});
