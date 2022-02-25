//filter
var angka = [1,3,2,5,4,8,6,7,10,9,30];

var angka2 = angka.find(function(x){
    return x > 5;
})
console.log(angka2);