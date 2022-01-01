// // khai báo khởi tại mảng cách 1
// var array = [1,2,3,4,5];
// // khai báo mảng cách 2
// var array2 = new Array(1,2,3,4,5)
// // thêm giá trị vào cuối mảng
// array.push(6,7,8);
// // xoa gia trị ở cuối mảng
// array.pop();
// // xóa giá trị đầu mảng
// array.shift();
// // thêm đầu mảng
// array.unshift(0);
// //them ở vị trí k
// array.splice(2,0,11,22,33);
// // thay đổi giá trị ở vị trí k
// array.splice(2,2,33,44);
// // xóa ở vị trí k
// array.splice(2,3);
// console.log(array);






var human = [1,2,3,4,5];
var array = [];
human.reduce((previosValue , CurrentValue) => {
    return previosValue + CurrentValue;
},0)