// Testuosime šį masyvą
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];

// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;
// ES6
const arrDoubled = (array) => array.map((item) => item * 2);
console.log(arrDoubled(numbers));

const arrDoubledDynamic = (array) => array.map((item) => item * 2);

const newArray = arrDoubledDynamic([1, 5, 5, 5, 5]);
console.log(newArray);

// 2.  Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus
// ES6
const arrMultiplied = (array, number) => array.map((item) => item * number);
console.log(arrMultiplied(numbers, 5));

// 3. Create the function that takes an array with objects and returns the sum of people's budgets.

const budgets = [
  {
    name: "Rytis",
    budget: 50,
  },
  {
    name: "Saulė",
    budget: 230,
  },
  {
    name: "Paulius",
    budget: 1500,
  },
  {
    name: "Gytis",
    budget: 92,
  },
  {
    name: "Sandra",
    budget: 7,
  },
];

const getBudgets = (array) => {
  let sum = 0;
  array.map((person) => (sum += person.budget));
  return sum;
};

console.log(getBudgets(budgets));

const names = budgets.map((person) => person.name);

console.log(names);
