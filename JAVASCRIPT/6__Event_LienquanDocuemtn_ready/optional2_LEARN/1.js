document.addEventListener('DOMContentLoaded',function(){
    let laynut = document.getElementById("btnView");
    let laythe = document.querySelector(".card-deck");
    let temp = 0;
    laynut.onclick = function () {
        if(temp === 0)
        {
            laythe.classList.add('Chuyendong');
            laythe.classList.remove('Chuyendonglai');
            temp = 1;
        }
        else if(temp === 1)
        {
            laythe.classList.add('Chuyendonglai');
            laythe.classList.remove('Chuyendong');
            temp = 0;
        }
    }
},false)