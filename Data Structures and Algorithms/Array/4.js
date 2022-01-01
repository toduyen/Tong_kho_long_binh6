let mang = [1,2,3,4,5,6].concat([1,2,3,4,8,9]).sort(function(a,b){return a-b});
let mang2 = [];
mang.reduce((pre,cur,index) => {
  if(index%2===1){
    if(mang[index-1] !== cur){
      mang2.push(mang[index-1],cur);
    }
  }
},[])
console.log(mang2);