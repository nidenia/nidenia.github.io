// Меню бургер
const menuButton = document.querySelector('.menu__button');
const menuBody = document.querySelector('.menu__body');

if (menuButton) {
	menuButton.addEventListener("click", () => {
		document.body.classList.toggle('_lock');
		menuButton.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}