function bubblesort() {
    let mang = [1,2,3,6,7,8,9,22,55,10];
    function swap(mang, index1 , index2) {
        let a = mang[index1];
        mang[index1] = mang[index2];
        mang[index2] = a;
    }
    this.sapxep = function() {
        for(let i=0 ; i<mang.length ; i++){
            for(let j=0 ; j<mang.length - 1 ; j++){
                if(mang[j] > mang[j+1]){
                    swap(mang,j,j+1);
                }
            }
        }
        return mang;
    }
}
var q = new bubblesort();
console.log(q.sapxep());