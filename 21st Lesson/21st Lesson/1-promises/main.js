// PROMISES

// you can't make pizza instantly

// 1.

// const makePizza = () => {
//   return new Promise((resolve, reject) => {
//     resolve("pizza was made 🍕");
//   });
// };

// console.log(makePizza());

// -----------------------------------------------

// 2. add toppings

// // construct promise
// const makePizza = (toppings) => {
//   return new Promise((resolve, reject) => {
//     resolve(`pizza was made 🍕 with ${toppings.join(", ")}`);
//   });
// };

// const pepperoni = makePizza(["pepperoni", "cheese", "mushrooms"]);

// console.log(pepperoni);

// // consume promise
// // how to access promise values
// // .then()
// // .catch()
// pepperoni.then((pizza) => console.log(pizza));

// -----------------------------------------------

// 3. what if I want to bake two pizzas one after another

// construct promise
const makePizza = (toppings) => {
  return new Promise((resolve, reject) => {
    if (toppings.includes("pineapple")) {
      reject("ERROR! No pineapple@@@");
    } else {
      setTimeout(() => {
        resolve(`pizza was made 🍕 with ${toppings.join(", ")}`);
      }, 3000);
    }
  });
};

console.log("pradzia");

makePizza(["pepperoni", "cheese", "mushrooms"])
  .then((pizza) => {
    console.log(pizza);
    return makePizza(["chicken", "cheese", "pineapple"]);
  })
  .then((pizza) => {
    console.log(pizza);
    return makePizza(["cheddar", "mozarella", "feta"]);
  })
  .then((pizza) => console.log(pizza))
  .catch((error) => console.log(error));

console.log("pabaiga");
