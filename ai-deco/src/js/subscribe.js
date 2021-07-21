import { modalClose, modal } from './header';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const warning = document.querySelector('.form__warning');
  const formSubmitBtn = document.querySelector('.form__button');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const inputValue = form.elements.email.value;

    if (inputValue.trim() == '' || inputValue.indexOf('@') == -1 ) {
      warning.textContent = 'Введите корректный email';
    } else {
      warning.textContent = '';
      formSubmitBtn.textContent = 'Successfull';

      setTimeout(() => {
        form.reset();
        formSubmitBtn.textContent = 'Subscribe';
        modalClose();
      }, 1500);
    }
  });
});