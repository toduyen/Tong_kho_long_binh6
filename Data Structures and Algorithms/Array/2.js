// concat

var animal = ['cho','meo','chuot'];
var animal2 = ['chim','voi'];
var human = ['dau','chan','tay'];

var ketqua = human.concat(animal2,animal);

// every

function chihetChoHai(x) 
{
    if(x % 2 === 0)
    {
        return true;
    }    
    else
    {
        return false;
    }
}
var newArray = [1,2,3,4,5,6,7];

var ketqua = newArray.every(chihetChoHai);

// some 
var ketqua2 = newArray.some(chihetChoHai);

// forEach

var mangmoi = [1,2,3,4];
var thunghiem = mangmoi.forEach((value) => {
    // console.log(value * 2);
})

// map
var ketqua = mangmoi.map((value , key) => {
    // console.log(`phan tử ${value} có key là ${key}`);
});
ketqua

// filter

var ketquamoinua = newArray.filter(chihetChoHai);
// console.log(ketquamoinua);

// dung filter de xoa ky tu
var xoakytunha = newArray.filter((value) => value != 7);
// console.log(xoakytunha);


// reduce
let mangarray2 = [1,2,3];
let kqreduce = mangarray2.reduce((previosValue , currentValue) => {
    return previosValue + currentValue;
},0)
// console.log(kqreduce);

// for of
for (let value of mangarray2) {
    // console.log(value);
}
// Array From
let manarrray3 = Array.from(mangarray2 , (value) => value * 2);
// console.log(manarrray3);

// array of

let mangiatri4 = Array.of(...manarrray3);
// console.log(mangiatri4);

// fill

let mangmacdinh = [7,2,3,4,5,6];
let mangchuyendoi = mangmacdinh.fill(1,1,5);
// console.log(mangchuyendoi);

// copyWithin
let mangmoimacdinh = [1,2,3,4,5,6];
let kq = mangmoimacdinh.copyWithin(1,4,7);
console.log(kq);