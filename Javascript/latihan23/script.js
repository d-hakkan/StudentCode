var mhs1 = {
    nama : "Hakan Alfatih",
    nim : "2020214",
    email : "hakan@mail.com",
    jurusan : "Informatika"
}

var mhs2 = {
    nama : "Emir Knight",
    nim : "1930214",
    email : "emir@mail.com",
    jurusan : "Teknik Mesin"
}

//function declaration
function objekMhs(nama, nim, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = objekMhs('Nova', "2020345", "nova@email.com", "kehutanana");

//constructor
function Mahasiswa(nama, nim, email, jurusan){
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Putin', '2095457', 'putin@mail.com', 'Filsafat');

