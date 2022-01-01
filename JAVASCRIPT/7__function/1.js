// function binh thuong
 function ThongTin() {
     console.log(`hahaha`);
 }
 ThongTin();
// function dung 1 lan
var dung1Lan = function () {
    console.log(`hahah 2`);
}
dung1Lan();
// closure function
function closureF() {
    let name = 'tuanphan';
    return function () {
        console.log(`biet danh cua toi la ${name}`);
    }
}
var hienthi3 = closureF();
hienthi3();