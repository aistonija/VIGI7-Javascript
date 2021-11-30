// 2. Elektros saskaita
// Tikslas: apskaiciuoti, kokia saskaita gausite uz elektra iki iskritusios dienos

// kilvatvalandes kaina = 0.07;
// saskaita galite gauti random iskritusia diena nuo 1 iki 31 (sveiki skaiciai)

// kiekviena atskira diena galite suvartoti nuo 2 iki 5 kilovatvalandziu.

// hint: Sukti cikla PER VISAS MENESIO DIENAS, bet CIKLA SUSTABDYTI po iskritusios dienos.
// vadinasi sukame cikla per monthDays, bet jeigu iskrito pvz 15 diena - cikla stabdome.

// atvaizduoti graziai apskaiciuota suma su dviem skaiciais po kablelio

const kwh = 0.137;
const randomDay = Math.ceil(Math.random() * 30);
// console.log(randomDay);
let totalKwh = 0;

for (let day = 0; day < randomDay; day++) {
  let kwhUsed = getRndInteger(2, 5);

  totalKwh += kwhUsed;
}

let totalPrice = totalKwh * kwh;
totalPrice = totalPrice.toFixed(2);
// console.log(totalPrice);

function getRndInteger(min, max) {
  return Math.random() * (max - min + 1) + min;
}
