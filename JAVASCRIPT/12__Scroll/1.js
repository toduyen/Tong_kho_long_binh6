document.addEventListener('DOMContentLoaded', function () {
     let layMenu = document.getElementsByClassName('navbar');
     document.addEventListener('scroll',function(){
        if(window.pageYOffset >= 300)
        {
            layMenu[0].classList.add('covao');
        }
        else if(window.pageYOffset < 300)
        {
            layMenu[0].classList.remove('covao');
        }
     },null)
}, false)