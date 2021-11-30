// sort methods mutates original array

// Strings are simple
const owners = ["Marius", "Giedre", "Ruta", "Paulius"];

// sorts alphabetically
console.log(owners.sort());

// if strings it would be reasonable
const movements = [200, 450, -400, 3000, -650, -160, 70, 3000];
console.log(movements.sort());

// for numbers we must provide compare function

// current value and next value for the loop in array

movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

const planets = [
  {
    name: "Jupiter",
    size: 69911,
  },
  {
    name: "Venus",
    size: 6051.8,
  },
  {
    name: "Mars",
    size: 3389.5,
  },
  {
    name: "Uranus",
    size: 25362,
  },
  {
    name: "Earth",
    size: 6371,
  },
  {
    name: "Saturn",
    size: 58232,
  },
  {
    name: "Pluto",
    size: 1188.3,
  },
];

console.log(planets);
// susikuriame masyva tik is planetu pavadinimu
const planetNames = planets.map((planet) => planet.name);

// rikiavimas pagal alfabeta (default)
planetNames.sort();
console.log(planetNames);

// rikiavimas nuo trumpiausio pavadinimo iki ilgiausio
planetNames.sort((a, b) => a.length - b.length);
console.log(planetNames);

// 1. Naudodami array metoda, atraskite ar visu
// (t.y. KIEKVIENOS) planetos dydis yra didesnis nei 7000?

const allBiggerThan7000 = planets.every((planet) => planet.size > 7000);
console.log(allBiggerThan7000);

// 2. Naudodami array metoda, atraskite ar bent vienos
// planetos dydis yra mazesnis nei 7000?

const atLeastOneSmallerThan7000 = planets.some((planet) => planet.size < 7000);
console.log(atLeastOneSmallerThan7000);

// 3. Jei bent viena buvo mazesne nei 7000, atfiltruoti,
// ir sukurti masyva planetu, kurios mazesnes nei 7000

const smallerThan7000Planets = planets.filter((planet) => planet.size < 7000);
console.log(smallerThan7000Planets);

// 4. Naudojant array metoda, sukurti nauja masyva, kuriame yra tik planetu pavadinimai.

// const planetNames = planets.map((planet) => planet.name);
// console.log(planetNames);

// 5. Naudojant array sort metoda, isrikiuokite planetu pavadinimu masyva,
// pagal planetos pavadinimo ilgius, nuo trumpiausio iki ilgiausio

// planetNames.sort((a, b) => a.length - b.length);

// console.log(planetNames);

// 6. Naudojant array sort metoda, isrikiuokite planets masyva nuo ilgiausio pavadinimo iki trumpiausio

planets.sort((a, b) => a.name.length - b.name.length);
console.log(planets);

// 7. Naudojant array sort metoda, isrikiuokite nuo didziausios planetos iki maziausios

planets.sort((a, b) => b.size - a.size);
console.log(planets);

//
