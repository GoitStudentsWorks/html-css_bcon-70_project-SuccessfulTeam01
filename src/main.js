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
      navLinks.forEach(function (link) {
        link.classList.remove('active');
      });

      link.classList.add('active');
    });
  });
});

//Реализация API конвертера валют

function updatePrices(event) {
  const apiKey = 'f5838e7d2deb3833a07aaa21';
  const selectElement = event.target;
  const fromCurrency = 'EUR';
  const toCurrency = selectElement.value;

  const priceContainer =
    selectElement.closest('.select-box-price') || selectElement.closest('.sale-span-box');

  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const rate = data.conversion_rate;

      const priceElements = priceContainer.querySelectorAll('[data-original-price]');
      priceElements.forEach(priceElement => {
        const originalPrice = parseFloat(priceElement.getAttribute('data-original-price'));
        const convertedPrice = Math.round(originalPrice * rate);
        priceElement.innerText = `${currencySymbol(toCurrency)}${convertedPrice}`;
      });
    })
    .catch(error => console.error('Ошибка при получении курса валют:', error));
}

function currencySymbol(currency) {
  switch (currency) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case 'UAH':
      return '₴';
    default:
      return '';
  }
}

document.querySelectorAll('.select-currency').forEach(selectElement => {
  selectElement.addEventListener('change', updatePrices);
});

window.onload = function () {
  document.querySelectorAll('.select-currency').forEach(selectElement => {
    selectElement.dispatchEvent(new Event('change'));
  });
};

// Реализация расширения текста
document.querySelectorAll('.expand-text-btn').forEach(button => {
  button.addEventListener('click', function () {
    var parent = this.parentNode;
    parent.classList.toggle('text-expanded');
  });
});

document.addEventListener('DOMContentLoaded', event => {
  document.querySelectorAll('.catalog-model').forEach(function (model) {
    if (model.hasAttribute('data-fulltext')) {
      model.addEventListener('click', function () {
        if (!this.classList.contains('full-text')) {
          this.innerText = this.dataset.fulltext;
        } else {
          let trimmedText = this.dataset.fulltext;
          let ellipsisIndex = trimmedText.indexOf('...');
          if (ellipsisIndex !== -1) {
            trimmedText = trimmedText.substring(0, ellipsisIndex + 3);
          } else {
            trimmedText = trimmedText.substring() + '...';
          }
          this.innerText = trimmedText;
        }
        this.classList.toggle('full-text');
      });
    }
  });
});
