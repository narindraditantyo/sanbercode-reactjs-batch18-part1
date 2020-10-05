// soal 1
const luasLingkaran = (jarijari) => {
    let phi = 22 / 7;
    return phi * jarijari * jarijari;
}

const kelLingkaran = (diameter) => {
    let phi = 22 / 7;
    return phi * diameter;
}

console.log(luasLingkaran(7));
console.log(kelLingkaran(14));

console.log(); // space antar jawaban

// soal 2
let kalimat = "";

const tambahKata = (kata) => {
    kalimat += `${kata} `;
}

tambahKata("saya");
tambahKata("adalah");
tambahKata("seorang");
tambahKata("frontend");
tambahKata("developer");

console.log(kalimat);

console.log(); // space antar jawaban

// soal 3
const newFunction = function literal(firstName, lastName) {
    return {
        firstName,
        lastName,
        fullName() {
            console.log(firstName + " " + lastName);
        }
    }
}

newFunction("William", "Imoh").fullName();

console.log(); // space antar jawaban

// soal 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation} = newObject;

console.log(firstName, lastName, destination, occupation);

console.log(); // space antar jawaban

// soal 5
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

console.log(combined);