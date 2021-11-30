// noriu, kad susigeneruotu random skaicius nuo 2 iki 5, su nuo 0 iki 4 skaiciu po kablelio.

number = Math.random() * 4 + 1;
console.log(number);

let rand = Math.floor(Math.random() * 3 + 1);
console.log(rand);
number = +number.toFixed(rand);

console.log(number);
