// soal 1
function halo() {
    return "Halo Sanbers!";
}

console.log(halo());

console.log(); // space antar jawaban

// soal 2
function kalikan(num1, num2) {
    return num1*num2;
}

var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali)

console.log(); // space antar jawaban

// soal 3
function introduce(name, age, address, hobby) {
    return "Nama saja " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)

console.log(); // space antar jawaban

// soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

var objectDataPeserta = {};
objectDataPeserta.nama = arrayDaftarPeserta[0];
objectDataPeserta["jenis kelamin"] = arrayDaftarPeserta[1];
objectDataPeserta.hobi = arrayDaftarPeserta[2];
objectDataPeserta["tahun lahir"] = arrayDaftarPeserta[3];

console.log(objectDataPeserta);

console.log(); // space antar jawaban

// soal 5
var buah = [
    {
        nama: "strawberry",
        warna: "merah",
        "ada bijinya": "tidak",
        harga: 9000
    },
    {
        nama: "jeruk",
        warna: "oranye",
        "ada bijinya": "ada",
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        "ada bijinya": "ada",
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        "ada bijinya": "tidak",
        harga: 5000
    }
]

console.log(buah[0]);

console.log(); // space antar jawaban

// soal 6
var dataFilm = [];
var inputData;

function tambahData(nama, durasi, genre, tahun) {
    inputData = {};
    inputData.nama = nama;
    inputData.durasi = durasi;
    inputData.genre = genre;
    inputData.tahun = tahun;
    dataFilm.push(inputData);
}

tambahData("Impetigore", "1 jam 46 menit", "Horror, Mystery", 2019);
tambahData("Nanti Kita Cerita Tentang Hari Ini", "2 jam 1 menit", "Drama, Family", 2020);
console.log(dataFilm);