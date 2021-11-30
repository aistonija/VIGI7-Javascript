/**
 * 1. Turite objektą su tokia informacija:​

const person = {
  name: "Rosa",
  age: 120,
  alive: false,
  interests: ["swimming", "cards"],
};


2. Nekeičiant pradinio objekto, jums reikia atlikti tokius veiksmus:​

- Pakeisti vardą;​
- Sugeneruoti atsitiktinį amžių nuo 20 iki 120;​
- Patikrinti, ar šis asmuo yra jaunesnis nei 100 metų;​
- Jeigu jaunesnis, pakeisti alive statusą į priešingą reikšmę,​
- Jeigu jaunesnis pridėti dar vieną elementą į interests masyvą - 'enjoying life'
 */

const person = {
  name: "Rosa",
  age: 120,
  alive: false,
  interests: ["swimming", "cards"],
};

// - Pakeisti vardą;​
person.name = "Joana";

// - Sugeneruoti atsitiktinį amžių nuo 20 iki 120;​
person.age = Math.floor(Math.random() * 100) + 21;
console.log(person.age);

if (person.age < 100) {
  person.alive = !person.alive;
  person.interests.push("dancing");
}

console.log(person);
