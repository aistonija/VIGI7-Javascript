// 1. get hot strings from coldThings array, using .shift() method, and .push() it to hotThings array

const coldThings = ["hot", "hot", "cold", "cold", "cold"];
const hotThings = ["hot", "hot"];

hotThings.push(coldThings.shift(), coldThings.shift());

console.log(coldThings);
console.log(hotThings);

// 2. remove 'Black Cat' from array and create myCat variable to be "I have {Black Cat}"
// log arrayVariable - Black Cat must be removed

const arrayVariable = [
  2,
  0,
  "any",
  [687, "any", true, ["Black Cat", 0, false]],
];

let myCat = `i have ${arrayVariable[3][3].shift()}`;

console.log(myCat);
console.log(arrayVariable);

// 3. make numbers array to have only numbers
// make words array to have only words
// move items using - .pop() .shift() - .push(arg) .unshift(arg)

let numbers = ["first", 1, 2, 3, 4, "last"];
let words = ["word", "any", "word", "world"];

words.unshift(numbers.shift());
words.push(numbers.pop());

console.log(numbers, words);

// 4. warehouse

let warehouseOfTypes = {
  items: [
    "wheel",
    "bag",
    "ball",
    { noteOne: "buy some stuff", noteTwo: "buy some more stuff" },
  ],
  itemsInWarehouseCount: 0,
  rentPrice: 0,
  warehouseSize: 50,
  budget: 20,
  bankrupt: false,
};

// create new key in warehouse object name 'notes', remove last object from items array and make it to be value of 'notes'

warehouseOfTypes.notes = warehouseOfTypes.items.pop();

// add 3 more random items to items array

warehouseOfTypes.items.push(`glass`, `monitors`, `pillows`);

// make itemsInWarehouseCount to be total length of items in warehouse

warehouseOfTypes.itemsInWarehouseCount = warehouseOfTypes.items.length;

// check if there is more than 5 items in warehouse if yes increase warehouse size by 30

if (warehouseOfTypes.items.length > 5) {
  warehouseOfTypes.warehouseSize = warehouseOfTypes.warehouseSize + 30;
}

// check if warehouse size is more than 60 if yes set rentPrice, rent price is 2.5 per warehouseSize unit, count total price

if (warehouseOfTypes.warehouseSize > 60) {
  warehouseOfTypes.rentPrice = 2.5 * warehouseOfTypes.warehouseSize;
  console.log(`total price for rent: ${warehouseOfTypes.rentPrice}`);
}

// check if budget enough to pay the rent, if not, create new key in object warehouseOfTypes named "moneyFromSoldItems" with value 0

if (warehouseOfTypes.budget < warehouseOfTypes.rentPrice) {
} else {
  warehouseOfTypes.moneyFromSoldItems = 0;
}

// add new key to note "noteThree" which holds string value "Sell some items"

warehouseOfTypes.notes.noteThree = "Sell some items";

// check if noteThree value is "Sell some items", if yes sell two last items for 30units each, make moneyFromSoldItems value to be selling expresion

if (warehouseOfTypes.notes.noteThree == "Sell some items") {
  warehouseOfTypes.items.pop();
  warehouseOfTypes.items.pop();
  warehouseOfTypes.moneyFromSoldItems = 2 * 30;
}

// check if you budget is bigger than rent price if not change bankrupt value according to it

if (warehouseOfTypes.budget < warehouseOfTypes.rentPrice) {
  warehouseOfTypes.bankrupt = true;
}

console.log(warehouseOfTypes);

// EVENS AND ODDS

// create function that goes through array and creates an object with two properties: odds, and evens. Both are arrays containing relevant numbers

let nums = [2, 1, 56, 32, -64, -99, 45, 4];

const checkNums = (array) => {
  let obj = {
    odds: [],
    evens: [],
  };

  for (let x = 0; x < array.length; x++) {
    if (array[x] % 2 === 0) {
      obj.evens.push(array[x]);
    } else {
      obj.odds.push(array[x]);
    }
  }

  return obj;
};

console.log(checkNums(nums));
