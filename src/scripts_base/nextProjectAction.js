export default function nextProjectAction() {
  const itemBlock = document.querySelector('.nextProject');
  const elem = itemBlock.querySelector('.nextProject__title');
  const elemOpacityValue = elem.style.opacity;

  itemBlock.addEventListener('mouseover', () => {
    elem.style.opacity = 1;
  })
  itemBlock.addEventListener('mouseout', () => {
    elem.style.opacity = elemOpacityValue;
  })
}