var penumpang = ['Hakan', undefined, 'Charlie'];
var tambahPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for( var i = 0; i < penumpang.length; i++ ){
            if(penumpang[i] == undefined){
                penumpang[i] = namaPenumpang;
                return penumpang;
            }
            else if( penumpang [i] == namaPenumpang){
                console.log(namaPenumpang + ' Sudah ada dalam angkot');
                return penumpang;
            }
            else if ( i == penumpang.length - 1){
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}