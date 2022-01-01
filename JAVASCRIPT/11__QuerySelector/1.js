let getClass = document.querySelector('.card-columns , card');
console.log(getClass);
let getAllclass = document.querySelectorAll('.card-body .card-title');
for (let index = 0; index < getAllclass.length; index++) {
    if(index===0)
    {
        getAllclass[index].innerHTML = 'axios';
    }
}
let getData = document.querySelectorAll('[data-thongbao]');
console.log(getData[0]);
let getAll = document.querySelectorAll('#tuan');
console.log(getAll);