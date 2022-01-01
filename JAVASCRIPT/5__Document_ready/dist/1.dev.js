"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var laynut = document.getElementsByClassName('annut');

  laynut[0].onclick = function () {
    laynut[0].classList.add('chuyendong');
  };
});