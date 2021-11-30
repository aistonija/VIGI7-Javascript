// EVENT LOOP !!!!!! butinai perziureti savaitgali!!
//https://www.youtube.com/watch?v=8aGhZQkoFbQ

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// let prom = new Promise((resolve, reject) => {
//   let num = Math.random();
//   if (num < 0.5) {
//     resolve("Yay! Resolved: " + num);
//   } else {
//     reject("Ohhh noooo!: " + num);
//   }
// });

// prom.then((res) => console.log(res)).catch((err) => console.log(err));

// --------------------------------------------------

// PIZZAS

// you can't make pizza instantly

// promise takes callback function
// it gives us a promise, not a pizza itself

// 1. start
const makePizza = () => {
  const pizzaPromise = new Promise((resolve, reject) => {
    // when you are ready, you can resolve
    resolve("🍕");
    // if something wrong, you can reject
  });
  return pizzaPromise;
};

const pizza = makePizza();
console.log(pizza);

// ----------------------------

// 2. add toppings

// const makePizza = (toppings) => {
//   const pizzaPromise = new Promise((resolve, reject) => {
//     // when you are ready, you can resolve
//     resolve(`Here is your 🍕 with toppings: ${toppings.join(", ")}`);
//     // if something wrong, you can reject
//   });
//   return pizzaPromise;
// };

// const pepperoniPromise = makePizza(["pepperoni", "mushrooms"]);
// const hawaiPromise = makePizza(["pineapple", "chicken"]);

// console.log(pepperoniPromise);
// console.log(hawaiPromise);

// // HOW TO ACCESS, BECAUSE PROMISES DOESN'T ALLOW TO ACCESS DIRECTLY

// pepperoniPromise.then((pizza) => console.log(pizza));

// ----------------------------

// 3. wait 2 seconds for pizza to cook

// const makePizza = (name, toppings) => {
//   return new Promise((resolve, reject) => {
//     // wait 2 seconds for pizza to cook
//     setTimeout(() => {
//       resolve(`Here is your ${name} 🍕 with toppings: ${toppings.join(", ")}`);
//     }, 2000);

//     // if something wrong, you can reject
//   });
// };

// const pepperoniPromise = makePizza("Pepperoni", ["pepperoni", "mushrooms"]);
// const hawaiPromise = makePizza("Hawwai", ["pineapple", "chicken"]);

// console.log(pepperoniPromise);
// console.log(hawaiPromise);

// HOW TO ACCESS, BECAUSE PROMISES DOESN'T ALLOW TO ACCESS DIRECTLY

// console.log("starting");
// .then() method is the way to access it
// pepperoniPromise.then((pizza) => console.log(pizza));
// hawaiPromise.then((pizza) => console.log(pizza));

// console.log("finishing");

// ----------------------------

// 4. What if I want to bake pizzas one after another??

// const makePizza = (name, toppings) => {
//   return new Promise((resolve, reject) => {
//     // wait 2 seconds for pizza to cook
//     setTimeout(() => {
//       resolve(`Here is your ${name} 🍕 with toppings: ${toppings.join(", ")}`);
//     }, 2000);

//     // if something wrong, you can reject
//   });
// };

// makePizza("Pepperoni", ["pepperoni", "cheese", "mushrooms"])
//   .then((pizza) => {
//     console.log(pizza);
//     return makePizza("Hawwaii", ["pineapple", "cheese", "chicken"]);
//   })
//   .then((pizza) => {
//     console.log(pizza);
//     return makePizza("4 Cheese", ["cheddar", "mozarella", "feta"]);
//   })
//   .then((pizza) => console.log(pizza));

// ----------------------------

// 4. What if I want to bake ALL PIZZAS AT THE SAME TIME - CONCURENTLY

// const makePizzas = (toppings) => {
//   return new Promise((resolve, reject) => {
//     // wait 2 seconds for pizza to cook
//     setTimeout(() => {
//       resolve(`Here is your 🍕 with toppings: ${toppings.join(", ")}`);
//     }, 2000);

//     // if something wrong, you can reject
//   });
// };

// const pizzaPromise1 = makePizzas(["cheddar", "mozarella", "feta"]);
// const pizzaPromise2 = makePizzas([
//   "cheddar",
//   "mozarella",
//   "feta",
//   "cow",
//   "Goat Cheese",
// ]);
// const pizzaPromise3 = makePizzas(["cheddar", "pickles", "beef", "mushrooms"]);

// const dinnerPromise = Promise.all([
//   pizzaPromise1,
//   pizzaPromise2,
//   pizzaPromise3,
// ]);

// dinnerPromise.then((pizzas) => {
//   // using array destructuring
//   const [hottie, garbagePail, hamAndCheese] = pizzas;

//   console.log(hottie);
//   console.log(garbagePail);
//   console.log(hamAndCheese);
// });

// ----------------------------

// REJECT AND ERRORS HANDLING

// const makePizza = (toppings) => {
//   const pizzaPromise = new Promise((resolve, reject) => {
//     // reject if wants with pineapple
//     if (toppings.includes("pineapple")) {
//       reject("Seriously?? Get out you 🍍!!");
//     }
//     // when you are ready, you can resolve
//     resolve(`Here is your 🍕 with toppings: ${toppings.join(", ")}`);
//     // if something wrong, you can reject
//   });
//   return pizzaPromise;
// };

// const pepperoniPromise = makePizza(["pepperoni", "mushrooms"]);
// const hawaiPromise = makePizza(["pineapple", "chicken"]);

// hawaiPromise
//   // when promise goes successfully
//   .then((pizza) => console.log(pizza))

//   // when something happens
//   .catch((err) => console.log(err));
