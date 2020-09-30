// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var keduaSentence = kataKedua[0].toUpperCase() + kataKedua.substr(1);
var keempatUpper = kataKeempat.toUpperCase();

console.log(kataPertama + " " + keduaSentence + " " + kataKetiga + " " + keempatUpper);

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

console.log(parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat));

// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// soal 4
var nilai = 75;

if(nilai >= 80) {
    console.log("Indeks nilai: A");
} else if(nilai >= 70 && nilai < 80) {
    console.log("Indeks nilai: B");
} else if(nilai >= 60 && nilai < 70) {
    console.log("Indeks nilai: C");
} else if(nilai >= 50 && nilai < 60) {
    console.log("Indeks nilai: D");
} else {
    console.log("Indeks nilai: E");
}

// soal 5
var tanggal = 29;
var bulan = 3;
var tahun = 2000;

var bulanString;

switch(bulan) {
    case 1: {
        bulanString = "Januari";
        break;
    }
    case 2: {
        bulanString = "Februari";
        break;
    }
    case 3: {
        bulanString = "Maret";
        break;
    }
    case 4: {
        bulanString = "April";
        break;
    }
    case 5: {
        bulanString = "Mei";
        break;
    }
    case 6: {
        bulanString = "Juni";
        break;
    }
    case 7: {
        bulanString = "Juli";
        break;
    }
    case 8: {
        bulanString = "Agustus";
        break;
    }
    case 9: {
        bulanString = "September";
        break;
    }
    case 10: {
        bulanString = "Oktober";
        break;
    }
    case 11: {
        bulanString = "November";
        break;
    }
    case 12: {
        bulanString = "Desember";
        break;
    }
}

console.log(tanggal + " " + bulanString + " " + tahun);