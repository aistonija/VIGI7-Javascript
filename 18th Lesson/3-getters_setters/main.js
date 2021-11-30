class User {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

let user1 = new User("Daniel", 15);
console.log(user1.name);

user1.name = "Bill";
console.log(user1.name);

console.log(user1);
