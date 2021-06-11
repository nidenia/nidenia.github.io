const burgerBtn = document.querySelector('.header__mobile-menu');
const nav = document.querySelector('.header__nav');
const backdrop = document.querySelector('.backdrop');

const toggleMenu = (elem) => {
  elem.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    burgerBtn.classList.toggle('_active');
    nav.classList.toggle('_active');
  });
}

toggleMenu(burgerBtn);
toggleMenu(backdrop);