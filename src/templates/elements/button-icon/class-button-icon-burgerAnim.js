export default function class_button_icon_burgerAnim() {
  let btns = document.querySelectorAll('.button-icon-burgerAnim');
  for (let btn of btns) {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  }
}