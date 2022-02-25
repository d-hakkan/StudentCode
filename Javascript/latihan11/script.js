var t = true;
while(t){
    //player
    var p = prompt('pilih : gajah, semut, orang');

    //pc
    // generate bilangan number
    var comp = Math.random();

    if(comp < 0.34){
        comp = 'gajah';
    }else if (comp >= 0.34 && comp < 0.67){
        comp = 'orang';
    }else{
        comp = 'semut';
    }

    var hasil = '';
    //rules
    if( p == comp){
        hasil = 'SERI';
    }else if(p == 'gajah'){
        /* if(comp == 'orang'){
            hasil = 'menang';
        }else{
            hasil = 'kalah';
        } */
        hasil = (comp == 'orang') ? 'menang' : 'kalah';
    }else if (p=='orang'){
        hasil = (comp == 'gajah') ? 'kalah' : 'menang';
    }else if(p == 'semut'){
        hasil = (comp == 'orang') ? 'kalah' : 'menang';
    }else{
        hasil = 'input salah';
    }
    //hasil
    alert('Kamu memilih : '+p+', pc memilih : '+comp+'\n maka hasilnya kamu '+hasil);

    t = confirm('lagi ?');
}

alert('terima kasih sudah bermain');
