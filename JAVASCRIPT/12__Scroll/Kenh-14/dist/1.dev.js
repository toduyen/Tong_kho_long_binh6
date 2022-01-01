"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var menuHeader = document.getElementsByClassName('menu');
  var tempMenuHeader = "menuCore"; // quang cao 2

  var layBannerADS = document.getElementsByClassName('quangcao2');
  var layvitridau = layBannerADS[0].offsetTop;
  var layvitricuoi = layBannerADS[0].offsetTop + 400;
  var tempAds = "codinh1"; // baoviet

  var layID = document.getElementById('s4');
  var layVitriDauBaiViet = layID.offsetTop;
  var layVitriCuoiBaiViet = layID.offsetTop + 300;
  var tempBaiViet = "hahahaha";
  document.addEventListener('scroll', function () {
    if (window.pageYOffset >= 200) {
      if (tempMenuHeader = 'menuCore') {
        menuHeader[0].classList.add('menuden');
        tempMenuHeader = 'menuThaydoi';
      }
    } else if (window.pageYOffset < 200) {
      if (tempMenuHeader = 'menuThaydoi') {
        menuHeader[0].classList.remove('menuden');
        tempMenuHeader = 'menuCore';
      }
    } // setup ve quang cao


    if (window.pageYOffset > layvitridau && window.pageYOffset < layvitricuoi) {
      if (tempAds = 'codinh1') {
        layBannerADS[0].classList.add('codinhquangcao');
        tempAds = 'codinh2';
      }
    } else if (window.pageYOffset < layvitridau || window.pageYOffset > layvitricuoi) {
      if (tempAds = 'codinh2') {
        layBannerADS[0].classList.remove('codinhquangcao');
        tempAds = 'codinh1';
      }
    } // setup ve baiviet


    if (window.pageYOffset > layVitriDauBaiViet && window.pageYOffset < layVitriCuoiBaiViet) {
      if (tempBaiViet = 'hahahaha') {
        layID.classList.add('loading');
        tempBaiViet = 'hahahaha2';
      }
    } else if (window.pageYOffset < layVitriDauBaiViet || window.pageYOffset > layVitriCuoiBaiViet) {
      if (tempBaiViet = 'hahahaha2') {
        layID.classList.remove('loading');
        tempBaiViet = 'hahahaha';
      }
    }
  }, null);
}, false);