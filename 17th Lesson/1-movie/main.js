const form = document.querySelector("form");
const ul = document.querySelector(".movieList");

// Naudojant ES6 klases sukurkite objekto Filmas (Movie) kūrimo konstruktorių, kuris turės šias savybes:

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
    return `${this.name} - written by: ${this.director}, released in ${this.year}`;
  }

  // 2. getProfit, kuris grąžins sumą, kurią uždirbo (pelną) filmas.
  getProfit() {
    return this.income - this.budget;
  }

  addToList() {
    const newLi = document.createElement("li");
    const liContent = document.createElement("span");

    liContent.textContent = this.name;
    liContent.addEventListener("click", () => {
      liContent.textContent = this.getIntroduction();
    });

    const button = document.createElement("button");
    button.textContent = "Profit";

    button.addEventListener("click", () => {
      alert(this.getProfit());
    });

    newLi.append(liContent, button);
    ul.append(newLi);
  }
}

const replaceComma = (string) => {
  let replaced = "";

  if (string.includes(",")) {
    replaced = string.replace(",", ".");
  } else {
    replaced = string;
  }

  return Number(replaced);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const movieName = e.target.elements.movieName.value;
  const movieYear = e.target.elements.movieYear.value;
  const movieDirector = e.target.elements.movieDirector.value;
  let budget = e.target.elements.budget.value;
  let income = e.target.elements.income.value;

  budget = replaceComma(budget);
  income = replaceComma(income);

  console.log(budget);
  const newMovie = new Movie(
    movieName,
    movieYear,
    movieDirector,
    budget,
    income
  );

  newMovie.addToList();
});
