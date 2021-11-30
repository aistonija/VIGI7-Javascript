/***** 1. VARIABLES, NAMNING, COMMENTS ******/

// var - oldschool. Globalus,
// pasiekiamas iš visur ir visada.
// Didelė rizika perrašyti reikšmingas vertes

// let - block scope. Galima priskirti naują
// reikšmę, todėl patogu, kuomet žinomė, kad reikšmė
// pasikeis. Pvz.:

let unknownValue;
console.log(unknownValue);
unknownValue = "tekstas";
console.log(unknownValue);
unknownValue = 8;
console.log(unknownValue);
unknownValue = null;
console.log(unknownValue);

// const

const known = "tekstas";
//console.log(known);

// object
const person = {
  name: "Aiste",
};
//console.log(person);

person.age = 18;
//console.log(person);

// array
const listA = [1, 2, 3];
//console.log(listA);

listA[8] = 7;
//console.log(listA);

/***** 2. DATA TYPES ******/

// STRING

let text = "tekstas";
let combination = "#8abDDe";
let single = "viengubos kabutes";
let double = "dvigubos kabutes";
let opostr = 'Knyga: "begancios su vilkais"';
let movie = '"Kapitonas Amerika"';
movie = "'Toras: Pasauliu pabaiga'";

let phrase = "Paskutini syki ziurejau filma";
console.log(phrase);

console.log(phrase + " " + movie);

// NUMBER and NAN

let age = 8;
let a = 15.2;
let b = -5;
let z = 15263;
let num = "456";
console.log(num, typeof num);
console.log(+num, typeof +num);

let combo = "12.56ab";
console.log(combo, typeof combo);
console.log(parseInt(combo), typeof parseInt(combo));
console.log(parseFloat(combo), typeof parseFloat(combo));

const stupidMove = "aiste" / 5;
console.log(stupidMove);
console.log(typeof stupidMove);

// skaiciui, kuris yra lygis 2 pakelta 53 laipsniu
// yra atskiras duomenu tipas BigInt

// BOOLEAN

let day = false;
let night = true;
let hey;
// truthy and falsy values

// falsy - 0, null, undefined, NaN, "";
// truthy - all other values

console.log(Boolean(day));
console.log(Boolean(night));
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(null));
console.log(Boolean("nulis"));
console.log(Boolean(""));
console.log(Boolean(8));
console.log(Boolean(hey));
console.log(Boolean("string"));
let nana = "aiste" / 5;
console.log(Boolean(nana));

// UNDEFINED
let undefinedValue;

someValue.forEach((val) => console.log(val));

console.log(typeof someValue);

// NULL

// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

let counter = null;
console.log(counter);

// jeigu counter nera true / t.y. yra false
// pakeisk reiksme i 10

if (!counter) {
  counter = "labas";
}

console.log(counter);

const fName = "Aiste";

// ternary
fName === "Aiste" ? console.log(`Hi ${fName}`) : null;

// iprastas if

if (fName === "Aiste") {
  console.log(`Hi ${fName}`);
}

// ARRAY

// empty array
const list = [];

// list of indexed elements
list[0] = "1";
list[1] = 1;
list[2] = false;
list[3] = ["laba", "diena", { name: "Aiste" }];
console.log(list);
console.log(list[3][2]);

// array[index] = value
// index starts at 0

// OBJECT
const house = {
  windowCount: 5,
  livingCreatures: [
    { name: "Aiste", human: true, cat: false },
    { name: "Lexa", human: false, cat: true },
  ],
  welcome() {
    console.log(`Welcome to my crib
    - ${this.livingCreatures[0].name}`);
  },
};

console.log(house);
console.log(house.livingCreatures[1].name);
house.welcome();

/***** 3. OPERATORS ******/

// ASSIGNMENT

let assign = "vienguba lygybe";

// ARITMETHIC / ARITMETHIC ASSIGNEMNT

let x = 16;
let y = x + 1;

x += 2;
console.log(x);

x -= 2;
console.log(x);

x *= 2;
console.log(x);

x /= 2;
console.log(x);

x **= 2;
// x = x ** 2;
// x = 16 ** 2
console.log(x);

let pizzaPcs = 10;
let friends = 3;

let pizzaPcsEachFriend = Math.floor(10 / 3);
console.log(pizzaPcsEachFriend);

let pizzaPcsLeft = pizzaPcs % friends;
console.log(pizzaPcsLeft);

let smarties = 20;
let kids = 8;

let smartiesLeft = smarties % kids;
console.log(smartiesLeft);

// INCREMENT/DECREMENT

let first = 1;
let second = 1;

console.log(first++, ++second);

first += 1;
second += 1;

console.log(first, second);

// COMPARISON

console.log(1 > 2);
console.log(1 >= 2);
console.log(1 < 2);
console.log(1 <= 2);
console.log(2 == 2);
console.log(2 === 2);
console.log(2 === "2");
console.log(2 != "2");
console.log(2 !== "2");

// LOGICAL AND TYPEOF

console.log(Boolean(2 && 2));
console.log(Boolean(2 || 2));
console.log(Boolean(2 || null));
console.log(Boolean(2 && null));
console.log(Boolean(2 && null));

if (typeof 2 === "number" && typeof "2" === "string") {
  console.log(true);
}

/***** 4. CONDITIONALS ******/

// IF, IF / ELSE, IF / ELSE IF / ELSE

let checkThis = 8;
checkThis = "8";
checkThis = {};

if (typeof checkThis === "number") {
  console.log("number");
} else if (typeof checkThis === "string") {
  console.log("string");
} else {
  console.log("I have no idea, sorry");
}

// SWITCH

let isWeekday = Math.floor(Math.random() * 10) + 1;
console.log(isWeekday);

let output;

switch (isWeekday) {
  case 1:
  // output = 'Monday';
  // break;
  case 2:
  // output = 'Tuesday';
  // break;
  case 3:
  // output = 'Wednesday';
  // break;
  case 4:
  // output = 'Thursday';
  // break;
  case 5:
    // output = 'Friday';
    output = "Weekday";
    break;
  case 6:
  // output = 'Saturday';
  // break;
  case 7:
    // output = 'Sunday';
    output = "Weekend";
    break;
  default:
    output = "Not a weekday";
    break;
}

console.log(output);

// TERNARY OPERATOR

let valueTrue;

"Aiste" && 0 ? console.log("it was true") : console.log("it was not true");
