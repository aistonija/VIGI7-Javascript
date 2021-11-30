// Naudojant ES6 klases sukurkite objekto Filmas (Movie) kūrimo konstruktorių, kuris turės šias savybes: ​

// 1. name; 2. year; 3. director; 4. budget; 5. income. ​

// ir metodus: ​

class Movie {
  constructor(name, year, director, budget, income) {
    this.name = name;
    this.year = year;
    this.director = director;
    this.budget = budget;
    this.income = income;
  }

  // 1. getIntroduction, kuris grąžins filmo pilną pavadinimą (su name, year, director); ​
  getIntroduction() {
    return `"${this.name}", written by: ${this.director}, released in ${this.year}`;
  }

  // 2. getProfit, kuris grąžins sumą, kurią uždirbo (pelną) filmas.
  getProfit() {
    return this.income - this.budget;
  }
}

const avatar = new Movie("Avatar", 2009, "James Cameron", 25e4, 45e4);
const avengers = new Movie("Avengers", 2015, "Nzn", 1300, 5200);

console.log(avengers.getIntroduction());
console.log(avengers.getProfit());
