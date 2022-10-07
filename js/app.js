$(document).ready(function () {
   $('.slider').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 3,
      autoplay: true,

      responsive: [{
         breakpoint: 1100,
         settings: {
            slidesToShow: 2,
         }
      }, {
         breakpoint: 800,
         settings: {
            slidesToShow: 1
         }
      }]
   });
});


let time = 1800;
const countMin = document.getElementById('minutes');
const countSec = document.getElementById('seconds');

setInterval(updateCountdown, 1000);

function updateCountdown() {
   let minutes = Math.floor(time / 60);
   let seconds = time % 60;
   minutes = minutes < 10 ? "0" + minutes : minutes;
   seconds = seconds < 10 ? "0" + seconds : seconds;
   if (minutes == 0 && seconds == 0) {
      time = time + 1800;
   }
   countMin.innerHTML = `${minutes}`;
   countSec.innerHTML = `${seconds}`;
   time--;
}

const changeHandler = e => {
   const value = e.value;
   e.value = value.replace(/\D/g, '')
}

function scrollTo(element) {
   window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth'
   })
}

let btnBuy = document.querySelector('#buy_btn');
let btnBuy2 = document.querySelector('#buy_btn2');
let btnBuy3 = document.querySelector('#buy_btn3');
let footer = document.querySelector('.footer');

btnBuy.addEventListener('click', () => {
   scrollTo(footer)
})
btnBuy2.addEventListener('click', () => {
   scrollTo(footer)
})
btnBuy3.addEventListener('click', () => {
   scrollTo(footer)
})