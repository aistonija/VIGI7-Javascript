// Testuosime šį masyvą

// foreach
// Parašyti funkciją, kuri suks foreach cikla per masyva ir sukurs po nauja elementa kiekvienai vertei su jos indexu ir atspausdins html'e

let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];

// callback function
const printElement = (value, index) => {
  let p = document.createElement("p");
  p.textContent = `Index Nr: ${index}, value: ${value}`;
  document.body.append(p);
};

// core function is forEach() method
// numbers.forEach(printElement);

numbers.forEach((value, index) => {
  let p = document.createElement("p");
  p.textContent = `Index Nr: ${index}, value: ${value}`;
  document.body.append(p);
});
