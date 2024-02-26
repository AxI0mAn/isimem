/* 
npm install swiper

*/
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

new Swiper('.swiper__name', {
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 1.2,
      spaceBetween: 80
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 1.4,
      spaceBetween: 160
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 1.8,
      spaceBetween: 240
    }
  }
});