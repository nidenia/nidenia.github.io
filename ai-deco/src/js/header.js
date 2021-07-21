export const modalClose = () => {
  modal.classList.remove('_active');
  document.body.classList.remove('_lock');
}

export const modal = document.querySelector('.modal');

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.menu__burger-wrapper');
  const menuBody = document.querySelector('.menu__body');
  const subscribeButton = document.querySelector('.menu__link--subscribe');

  const backdrop = document.querySelector('.modal__backdrop');
  const modalCloseBtn = document.querySelector('.modal__close');
  
  burger.addEventListener('click', () => {
    document.body.classList.toggle('_lock');
    burger.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });

  subscribeButton.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.add('_lock');
    burger.classList.remove('_active');
    menuBody.classList.remove('_active');
    
    modal.classList.add('_active');
    
    modalCloseBtn.addEventListener('click', () => modalClose());
    backdrop.addEventListener('click', () => modalClose());
  });
});