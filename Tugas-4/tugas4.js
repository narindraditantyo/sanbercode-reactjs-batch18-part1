// soal 1
console.log("LOOPING PERTAMA");
var i = 2;
while(i <= 20) {
    if(i % 2 == 0) {
        console.log(i + " - I love coding");
    }
    i++;
}

console.log("LOOPING KEDUA");
while(i >= 2) {
    if(i % 2 == 0) {
        console.log(i + " - I will become a frontend developer");
    }
    i--;
}

console.log(); // space antar jawaban

// soal 2
for(i = 1; i <= 20; i++) {
    if(i % 3 == 0 && i % 2 != 0) {
        console.log(i + " - I Love Coding");
    } else if(j % 2 != 0) {
        console.log(i + " - Santai");
    } else if(j % 2 == 0) {
        console.log(i + " - Berkualitas");
    }
}

console.log(); // space antar jawaban

// soal 3
var hash = "#";
var tempHash;
for(i = 1; i <= 7; i++) {
    tempHash = "";
    for(var j = 1; j <= i; j++) {
        tempHash = tempHash.concat(hash);
    }
    console.log(tempHash);
}

console.log(); // space antar jawaban

// soal 4
var kalimat = "saya sangat senang belajar javascript";
var splitKalimat = kalimat.split(" ");
console.log(splitKalimat);

console.log(); // space antar jawaban

// soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for(i = 0; i < daftarBuah.length; i++) {
    console.log(daftarBuah[i]);
}