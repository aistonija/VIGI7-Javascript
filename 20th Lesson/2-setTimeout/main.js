// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals

// sinchroninis

// const p = document.querySelector("p");
// p.textContent = "Hi, my name is Aiste";
// alert(p.textContent);
// p.style.color = "blue";

// asinchroninis
const p = document.querySelector("p");
p.textContent = "Hi, my name is Aiste";

setTimeout(() => {
  alert(p.textContent);
}, 2000);

p.style.color = "blue";

// ----------------------

// let start = 0;

// setInterval(() => {
//   start += 3;
//   console.log(start + " seconds passed");
// }, 3000);
