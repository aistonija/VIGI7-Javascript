class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bornIn() {
    return 2021 - this.age;
  }
}

const user = new User("Lilly", 25);
console.log(user);

const array = [1, 5, 9, 6, 3];

console.log(array);

let today = new Date();
console.log(today);
