// includes

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

const names = budgets.map((person) => person.name);

const isPersonInArray = (array, name) => {
  if (array.includes(name)) {
    if (name.endsWith("s")) {
      console.log(`Welcome Mr. ${name}`);
    } else {
      console.log(`Welcome Miss ${name}`);
    }
  } else {
    console.log(`Unfotunately ${name} is not in our list`);
  }
};

isPersonInArray(names, "Sandra");

// Testuosime šį masyvą
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];

// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve
// ES6
// -- su filter
const arrCountTwos = (array) => array.filter((item) => item === 2).length;

// ---------------

// 2. create new variable, and assign your created array of vegetables and fruits. Filter any items of four letters.

const straightFiltering = ["Tomato", "Potato", "Apple", "Pear"].filter(
  (item) => item.length === 4
);

console.log(straightFiltering);

// 3. write function isFourLetters. It takes an array as parameter. Do the same as in previous task (filter four letter words).

const isFourLetters = (array) =>
  array.filter((word) => (word.length === 4 ? word : null));

console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]));
console.log(isFourLetters(["Tomato", "Potato", "Pear"]));
console.log(isFourLetters(["Aida", "Jane", "Robke", "Aura"]));
