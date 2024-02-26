// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

import './pages/index.scss';

// подключение сценариев для элементов
// ВСЕ НЕ ИСПОЛЬЗУЕМЫЕ КОММЕНТИРОВАТЬ

// включить анимационный эффект для ссылки типа е3
// import button_e3 from './templates/elements/button/class-button-e3';
// button_e3();

// включить анимацию для кнопки типа burgerAnim
import class_button_icon_burgerAnim from './templates/elements/button-icon/class-button-icon-burgerAnim';
class_button_icon_burgerAnim();

//включить анимацию появления navMob
import navMob from './scripts_base/navMob'
navMob('.nav__burgerAnim', '.nav');


new Swiper('.swiper-resources', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true, //Установите на true и  slider wrapper будет адаптировать свою высоту к высоте в настоящее время активного слайда
  freeMode: true,
  // autoplay: 1000,
  // autoplayDisableOnInteraction: true,
  // speed: 2000,
  // centeredSlides: true,  //если true, тогда активный слайд будет отцентрирован, не всегда по левой стороне.
  centeredSlidesBounds: true, // Если true, тогда активный слайд будет отцентрирован без добавления зазоров в начале и конце слайдера.
  grabCursor: true,
  spaceBetween: 40,
  // slidesOffsetBefore: 15, //Добавить (в рх) дополнительное смещение слайдов в начале контейнера (перед всеми слайдами)
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 1.75,
      spaceBetween: 80,
      centeredSlides: true, //если true, тогда активный слайд будет отцентрирован, не всегда по левой стороне.

    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      // spaceBetween: 160
    }/*,
    // when window width is >= 1280px
    1280: {
      slidesPerView: 4,
      // spaceBetween: 240
    },
    // when window width is >= 1439px
    1439: {
      slidesPerView: 4,
      // spaceBetween: 240
    }*/
  }
});

new Swiper('.swiper-testimonials', {
  direction: 'horizontal',
  loop: true,

  freeMode: true,
  autoplay: 1000,
  autoplayDisableOnInteraction: true,
  // speed: 2000,
  centeredSlides: true,  //если true, тогда активный слайд будет отцентрирован, не всегда по левой стороне.
  // centeredSlidesBounds: true, // Если true, тогда активный слайд будет отцентрирован без добавления зазоров в начале и конце слайдера.
  grabCursor: true,
  spaceBetween: 120,
})