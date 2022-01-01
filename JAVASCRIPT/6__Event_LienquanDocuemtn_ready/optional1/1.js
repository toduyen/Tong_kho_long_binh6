document.addEventListener('DOMContentLoaded', function() {
    let laynut = document.getElementById('btnView');
    let laycard = document.getElementsByClassName('card-deck');
    laynut.onclick = function () {
        laycard[0].classList.toggle('chuyendong');
    }
})