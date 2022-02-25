//var angka = [1,2,3,4,5,6,7,8];
//var nama = ['hakan', 'fatih', 'patria'];
/*var cetak = function(e){
    console.log(e);
}*/

/*angka.forEach(function(e){
    console.log(e);
});

nama.forEach(function(e,i){
    console.log('Mahasiswa ke-' + (i+1) +' adalah : '+ e);
})*/

//map
/*var angka = [1,2,5,3,6,8,4,9];

var angka2 = angka.map(function(e){
    return e*2;
});
console.log(angka2.join());*/

//sort
var angka = [1,2,5,3,6,8,4,9];
angka.sort(function(a,b){
    return a-b;
});
console.log(angka.join(' - '));
