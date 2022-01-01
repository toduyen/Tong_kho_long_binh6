// var tenmonan = {
//     ten: 'thit meo',
//     age: 23,
// }
// var tenmon2 = tenmonan;
// tenmon2.ten = 'thit ho';



// console.log(tenmonan);
// console.log(tenmon2);
function dongvatCochan(t,tu)
{
    this.ten = t;
    this.age = tu;
}
var thucvat = new dongvatCochan('chim',23);
var thucvat2 = new dongvatCochan('chim',34);









// cach khac nhe
function human(firstName,lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;

    this.setFirstName = function (fristName) {
        firstName = fristName;
    }
    this.getFiretName = function (){
        return firstName;
    }
    this.setLastName = function (lastName) {
        lastName = lastName;
    }
    this.getLastName = function (){
        return lastName;
    }

}
var layketqua = new human('phan','tuan');
console.log(layketqua.getFiretName());