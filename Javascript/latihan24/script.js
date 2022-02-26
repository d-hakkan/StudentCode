//This
/*var a = 10;
console.log(this.a);
*/


//1 function declaration
/*function halo(){
    console.log(this);
    console.log('halo');
}
this.halo();
*/


//2 objek literal
/*var obj = {a = 2, nama : 'Fatih'};
obj.halo = function (){
    console.log(this);
    console.log('halo');
}
obj.halo();
//mengembalikan ke object
*/


//3 constructor
function Halo(){
    console.log(this);
    console.log('helo');
}
var  obj1 = new Halo();
var obj2 = new Halo();
//this mengembalikan objek yang baru dibuat



