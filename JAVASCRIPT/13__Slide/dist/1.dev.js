"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var nut = document.querySelectorAll('.nutbam ul li');
  var slideView = document.querySelectorAll('.cacsilde ul li');
  var slidechay = setInterval(autoSlide, 1500);

  for (var i = 0; i < nut.length; i++) {
    nut[i].onclick = function () {
      clearInterval(slidechay);

      for (var u = 0; u < nut.length; u++) {
        nut[u].classList.remove('active');
      }

      this.classList.add('active'); //vi tri click phan tu

      var phantunut = this;
      var vitricuano = 0;

      for (vitricuano = 0; phantunut = phantunut.previousElementSibling; vitricuano++) {}

      for (var l = 0; l < slideView.length; l++) {
        slideView[l].classList.remove('hidden');
      }

      slideView[vitricuano].classList.add('hidden'); // auto slide
    };
  }

  function autoSlide() {
    var chodaactive = document.querySelector('.hidden');
    var vitriactive = 0;

    for (vitriactive = 0; chodaactive = chodaactive.previousElementSibling; vitriactive++) {}

    if (vitriactive < slideView.length - 1) {
      for (var slide = 0; slide < slideView.length; slide++) {
        slideView[slide].classList.remove('hidden');
        nut[slide].classList.remove('active');
      }

      slideView[vitriactive].nextElementSibling.classList.add('hidden');
      nut[vitriactive].nextElementSibling.classList.add('active');
    } else {
      for (var _slide = 0; _slide < slideView.length; _slide++) {
        slideView[_slide].classList.remove('hidden');

        nut[_slide].classList.remove('active');
      }

      slideView[0].classList.add('hidden');
      nut[0].classList.add('active');
    }

    0;
  }

  autoSlide();
}, false);