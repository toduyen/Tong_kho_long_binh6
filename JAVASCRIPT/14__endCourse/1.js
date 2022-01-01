document.addEventListener('DOMContentLoaded',function(){
   var nutbam = document.querySelectorAll('.nutbam ul li > i');
   var slide = document.querySelectorAll('.motside ul > li');
   var vitri = 0;
   nutbam[1].addEventListener('click',thucthiphai);
   function thucthiphai() {
        var phantucu = slide[vitri];
        if(vitri < slide.length - 1)
        {
            vitri++;
        }     
        else
        {
            vitri = 0;
        }
        var phantumoi = slide[vitri];
        phantucu.classList.add('phantucu');
        phantumoi.classList.add('phantumoi');
   }
},false)