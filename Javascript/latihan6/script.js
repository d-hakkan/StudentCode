var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi){
    console.log("Angkot no. "+noAngkot+" beroperasi dg baik.");
    noAngkot++;
}

for(noAngkot = angkotBeroperasi+1; noAngkot <= jmlAngkot; i++){
    console.log("Angkot no. "+i+" tidak beroperasi.");
}