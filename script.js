function changeLanguage(language) {

  const elements = document.querySelectorAll('[data-pt]');

  elements.forEach(element => {

    if (language === 'pt') {
      element.innerHTML = element.getAttribute('data-pt');
    }

    else {
      element.innerHTML = element.getAttribute('data-en');
    }

  });

}