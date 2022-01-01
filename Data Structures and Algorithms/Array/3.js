var Mang = [1,2,3,4,5,6,2];
const thucthi = Mang.reduce((pre,cur,index) => {
    return index%2===1 ? [...pre,`${Mang[index-1]}${cur}`] : [...pre];
},[])
console.log(thucthi);