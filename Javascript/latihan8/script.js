var jmlAngkot = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= 6 && noAngkot !== 5){
        console.log("Angkot no. "+noAngkot+" sdg beroperasi");
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5){ 
        console.log("Angkot no. "+noAngkot+" sedang lembur");
    }else{
        console.log("Angkot no. "+noAngkot+" tdk beroperasi");
    }
}