"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var laynut = document.getElementsByClassName('declick');
  var laynoidung = document.getElementsByClassName('dehienthi');

  for (var i = 0; i < laynut.length; i++) {
    laynut[i].onclick = function () {
      console.log(this.classList);

      if (this.classList[1] == 'mautrang') {
        this.classList.toggle('mautrang');
        var layThuocTinh = this.getAttribute('data-hienlen');
        var layId = document.getElementById(layThuocTinh);
        layId.classList.toggle('ra');
      } else {
        for (var _i = 0; _i < laynut.length; _i++) {
          laynut[_i].classList.remove('mautrang');
        }

        this.classList.toggle('mautrang'); // lay noi dung

        var _layThuocTinh = this.getAttribute('data-hienlen');

        var _layId = document.getElementById(_layThuocTinh);

        for (var j = 0; j < laynoidung.length; j++) {
          laynoidung[j].classList.remove('ra');
        }

        _layId.classList.toggle('ra');
      }
    };
  }
}, false);