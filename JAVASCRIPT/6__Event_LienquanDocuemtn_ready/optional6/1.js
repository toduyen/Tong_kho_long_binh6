document.addEventListener('DOMContentLoaded',function(){
    var nut = document.getElementById('btn');
    var noidungs = document.getElementsByClassName('noidung');
    var den = document.getElementsByClassName('den');
    nut.onclick = function() {
        noidungs[0].classList.toggle('hiennoidung');
        den[0].classList.toggle('hienden');
    }
    den[0].onclick = function(){
        noidungs[0].classList.toggle('hiennoidung');
        den[0].classList.toggle('hienden');
    }
},false)