// function + scope
b = 5;
function viDuVeFunction() {
    b = b + 1;
    console.log(`so may man cua ban la ${b}`);
}
 viDuVeFunction();

 // object
 var human = {
     name: 'tuanphan',
     age: 23,
     hoddy: function () {
         return (`toi ten la ${this.name} co tuoi la ${this.age}`)
     }
 }
console.log(human.hoddy());