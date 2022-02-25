var item = prompt('masukkan nama makanan/minuman : \n (ex : nasi, daging, susu, burger, softdrink)');

switch(item){
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('JENIS SEHAT');
        break;
    case 'burger':
    case 'softdrink':
        alert('JENIS TDK SEHAT');
        break;
    default:
        alert('Input salah');
}