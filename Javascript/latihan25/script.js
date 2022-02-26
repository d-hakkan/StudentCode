//objek angkot
function Angkot(supir, trayek, penumpang, kas){
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            alert('angkot kosong');
            return false;
        }
        for(var i = 0; i < this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('Gaga', ['Kpj', 'Trn'], [], 0);
var angkot2 = new Angkot('Tom', ['Kpj', 'Ldg'], [], 0);


/*
var penumpang = [];
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

var hapusPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        console.log('angkot kosong');
    }else{
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                return penumpang;
            }else if( i == penumpang.length-1){
                console.log(namaPenumpang+' tidak ada');
                return penumpang;
            }
        }
    }
    return penumpang;
}
*/

