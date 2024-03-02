// import Swiper JS
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './pages/index.scss';


// включить анимацию для кнопки типа burgerAnim
import class_button_icon_burgerAnim from './templates/elements/button-icon/class-button-icon-burgerAnim';
class_button_icon_burgerAnim();

//включить анимацию появления navMob
import navMob from './scripts_base/navMob'
navMob('.nav__burgerAnim', '.nav');

import opacityScreen from './scripts_base/opacityScreen';
opacityScreen();

import scrollStartAction from './scripts_base/scrollStartAction';
scrollStartAction('.motivation__message');
scrollStartAction('.motivation__img--shadow2');

scrollStartAction('.card-res__quiz');
scrollStartAction('.card-res__training');
scrollStartAction('.card-res__course');
scrollStartAction('.card-res__books');

scrollStartAction('.card__individuals');
scrollStartAction('.card__employers');
scrollStartAction('.card__leaders');


new Swiper('.swiper-resources', {
  direction: 'horizontal',
  loop: false,
  autoHeight: true, //Установите на true и  slider wrapper будет адаптировать свою высоту к высоте в настоящее время активного слайда
  freeMode: true,
  centeredSlidesBounds: true, // Если true, тогда активный слайд будет отцентрирован без добавления зазоров в начале и конце слайдера.
  grabCursor: true,
  spaceBetween: 40,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 1.75,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
    }
  }
});

new Swiper('.swiper-testimonials', {
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  freeMode: true,
  centeredSlides: true,  //если true, тогда активный слайд будет отцентрирован, не всегда по левой стороне.
  grabCursor: true,
  spaceBetween: 120,
  pagination: {
    el: ".testimonials__pagination",
    clickable: true,
    type: 'bullets',
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },

})