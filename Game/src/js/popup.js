const popup = document.querySelector('.popup');

const popupClose = () => {
  popup.classList.remove('show');
  popup.classList.remove('_active');
}

document.addEventListener('DOMContentLoaded', () => {
  if (!popup) return;
 
  popup.classList.add('show');
  popup.classList.add('_active');

  popup.addEventListener('click', () => popupClose());
});