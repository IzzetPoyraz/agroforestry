'use trict';

(function () {
  const menuButton = document.querySelector('#menu');
  const openButtons = document.querySelectorAll('.open-button');
  const faqArticles = document.querySelectorAll('#faq article p');
  console.log(faqArticles);
  menuButton.addEventListener('click', () => {
    if (menuButton.getAttribute('aria-expanded') === 'true') {
      menuButton.setAttribute('aria-expanded', 'false');
    } else {
      menuButton.setAttribute('aria-expanded', 'true');
    }
  });

  for (let i = 0; i < openButtons.length; i++) {
    openButtons[i].addEventListener('click', () => {
      if (openButtons[i].getAttribute('aria-expanded') === 'false') {
        openButtons[i].setAttribute('aria-expanded', 'true');
        faqArticles[i].setAttribute('aria-hidden', 'false');
      } else {
        openButtons[i].setAttribute('aria-expanded', 'false');
        faqArticles[i].setAttribute('aria-hidden', 'true');
      }
    })
    
  }
})();