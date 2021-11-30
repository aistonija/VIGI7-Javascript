// 1. Susikurkite objektų konstruktorių naudojant new pavadinimu Book.​

function Book(name, author, year) {
  // 2. Jis galės kurti objektus, kurie turės šias savybes (properties):​
  // - name;​
  // - author;​
  // - year;​
  this.name = name;
  this.author = author;
  this.year = year;

  // 3. Taip pat jis galės kurti objektus, kurie turės šiuos metodus (naudojant prototype):​
  // - grąžins string: autorius: "knygos pavadinimas",​

  this.nameAndAuthor = function () {
    return `${this.author}: "${this.name}"`;
  };
  // - grąžins stringą: ši knyga yra tokio amžiaus
  this.bookAge = function () {
    return `This book is ${2021 - this.year} years old`;
  };
}

const book1 = new Book("5 valandos klubas", "Robin Sharma", 2019);

console.log(book1.nameAndAuthor());
console.log(book1.bookAge());
