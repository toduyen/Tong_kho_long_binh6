document.addEventListener('DOMContentLoaded',function(){
    var nut = document.querySelectorAll('.nutbam ul li');
    var slideView = document.querySelectorAll('.cacsilde ul li');
    var slidechay = setInterval(autoSlide,1500);
    for (let i = 0; i < nut.length; i++) {
        nut[i].onclick = function(){
            // dung khi an click
            clearInterval(slidechay);

            // lay vi tri nut
            for (let u = 0; u < nut.length; u++) {
                nut[u].classList.remove('active');    
            }
            this.classList.add('active');
            //vi tri click phan tu
        
            var sobatdau = 0;
            var phantunut = this;
            for (sobatdau=0 ; phantunut = phantunut.previousElementSibling  ; sobatdau++) {
            }
            for (let k = 0; k < slideView.length; k++) {
                slideView[k].classList.remove('hidden');
            }
            slideView[sobatdau].classList.add('hidden');

            // auto slide
           
        }
    }
    function autoSlide(){
          var chodaactive = document.querySelector('.hidden');
          var vitriactive = 0;
          for (vitriactive = 0; chodaactive = chodaactive.previousElementSibling; vitriactive++) {}
          if(vitriactive < (slideView.length - 1))
          {
            for (let slide = 0; slide < slideView.length; slide++) {
                slideView[slide].classList.remove('hidden');
                nut[slide].classList.remove('active');
            }
            slideView[vitriactive].nextElementSibling.classList.add('hidden');
            nut[vitriactive].nextElementSibling.classList.add('active');
          }
          else
          {
            for (let slide = 0; slide < slideView.length; slide++) {
                slideView[slide].classList.remove('hidden');
                nut[slide].classList.remove('active');
            }
            slideView[0].classList.add('hidden');
            nut[0].classList.add('active');
          }
    }
},false)