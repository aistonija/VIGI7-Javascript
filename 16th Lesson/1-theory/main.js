// 1. Naudojant new raktinį žodį

//Sukurimas objektas:​

const person = new Object();

person.name = "Aiste";
person.lastName = "Zu";

class User {
  constructor(name) {
    this._name = name;
  }
}

const me = new User("Aiste");

console.log(me._name);
