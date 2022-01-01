document.addEventListener('DOMContentLoaded', function () {
    let nutAn = document.querySelector(".btnArrow");
    let thongbao = document.getElementsByClassName("an");
    nutAn.onclick = function () {
        this.classList.toggle('chuyenMauNut');
        thongbao[0].classList.toggle('hien');
    }
},false)