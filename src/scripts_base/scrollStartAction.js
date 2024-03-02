/*
для любого элемента запускаем анимацию, когда этот элемент появляется в окне браузера.
элемент с class="new" со своими стилями для .new{} и стилями для .new.action{animation this_action } и @keyframe this_action 
Use in index.js
import scrollStartAction from './scripts_base/scrollStartAction';
scrollStartAction('.new');
*/

export default function scrollStartAction(elem) {
  const boxes = document.querySelectorAll(elem);
  window.addEventListener('scroll', checkBoxes);
  checkBoxes();

  function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top
      if (boxTop < triggerBottom) {
        box.classList.add('action')
      } else {
        box.classList.remove('action')
      }
    })
  }
}
