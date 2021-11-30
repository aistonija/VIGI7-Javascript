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
const monies = budgets.map((person) => person.budget);

// 1.

const anyNegatvies = monies.some((digit) => digit < 0);
console.log(anyNegatvies);

const belowHundred = (array) => {
  if (array.some((budget) => budget < 100)) {
    return array.filter((budget) => budget < 100);
  } else {
    return "All above 100";
  }
};

console.log(belowHundred(monies));

// EVERY

// check if all names contains letter 'a'

const allNames = names.every((name) => name.length >= 3);
console.log(allNames);

const symbolified = (array) => {
  if (array.every((name) => name.length > 3)) {
    if (array.some((name) => name.includes("a"))) {
      return array
        .filter((name) => name.includes("a"))
        .map((name) => name.replace("a", "@"));
    }
  }
};

console.log(symbolified(names));
