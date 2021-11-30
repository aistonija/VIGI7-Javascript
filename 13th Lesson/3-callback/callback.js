// 1. Jazzify

// Turime akordų masyvus, pvz:

// ['D', 'C', G]

// reikia parašyti kodą, kuris prie akordo pridės 7 -> G7.

// Jeigu prie akordo 7 jau yra - turime ignoruoti.

let accords = ["D", "G", "C", "C7", "F"];

// callback function
const checkAccord = (accord) => {
  if (!accord.includes(7)) {
    return accord + 7;
  } else {
    return accord;
  }
};

// coreFunction
const jazzify = (accordsArray, callback) => {
  let jazzified = [];

  for (let x = 0; x < accordsArray.length; x++) {
    jazzified.push(callback(accordsArray[x]));
  }

  return jazzified;
};

console.log(jazzify(accords, checkAccord));
console.log(jazzify(["D7", "Gm7"], checkAccord));
