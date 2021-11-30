/***** 5. LOOPS ******/

// FOR

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 9; i >= 0; i--) {
  console.log(i);
}

let loopThisString = "codeacademy.lt";

for (let loopCycle = 0; loopCycle < loopThisString.length; loopCycle++) {
  console.log(
    `cycle Nr. ${loopCycle}, string character: ${loopThisString[loopCycle]}`
  );
}

// WHILE

let cycle = 0;

while (cycle < loopThisString.length) {
  console.log(`cycle Nr. ${cycle}, string character: ${loopThisString[cycle]}`);
  cycle++;
}

do {
  console.log(`cycle Nr. ${cycle}, string character: ${loopThisString[cycle]}`);
  cycle++;
} while (cycle < loopThisString.length);

let random = Math.floor(Math.random() * 6) + 1;
console.log("Pirmasis metimas", random);

while (random != 3) {
  random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
}

// DO WHILE

let points;
do {
  points = Math.floor(Math.random() * 11) + 2;
  console.log(points);
} while (points != 12);
console.log("Pagaliau išridenai 12 :) Sveikinu!");

// /***** 6. FUNCTIONS ******/

// // FUNCTION DECLARATION

// function logName() {
//   console.log("Aiste");
// }

// // logName()

// let myName = "Aiste";

// function logVariable(parameter) {
//   console.log(parameter);
// }

// // logVariable(myName)
// // logVariable('Aurimas')

// function returnNew(parameter) {
//   return `Nice to meet you, ${parameter}`;
// }

// console.log(returnNew(myName));

// // FUNCTION EXPRESSION

// let yourName = "Giedrius";

// const nameLogger = function (nameParam) {
//   return `Yo, ${nameParam}`;
// };

// console.log(nameLogger(yourName));
// console.log(nameLogger("Lisa"));

// // ARROW FUNCTION

// const logMyName = () => console.log("Aiste");
// const returnMyName = (name) => `returned name: ${name}`;
// const countNums = (num1, num2) => num1 + num2;

// // logMyName()
// // console.log(returnMyName('Janina'));
// // console.log(countNums(5, 15))

// const lowerUpper = (wordToCheck) => {
//   let output;

//   if (typeof wordToCheck === "string") {
//     let array = wordToCheck.split("");

//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === array[i].toLowerCase()) {
//         array[i] = array[i].toUpperCase();
//       } else {
//         array[i] = array[i].toLowerCase();
//       }
//     }

//     output = array.join("");
//   } else {
//     output = "Please provide any text type";
//   }

//   return output;
// };

// console.log(lowerUpper("gOOD morning TO YOU sir"));
