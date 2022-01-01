document.addEventListener('DOMContentLoaded', function () {
    let laynutnha = document.getElementsByClassName("btn");
    for (let i = 0; i < laynutnha.length; i++) {
        laynutnha[i].onclick = function () {
            let layData = this.getAttribute('data-Thongbao');
            console.log(layData);
        }
    }
},false)