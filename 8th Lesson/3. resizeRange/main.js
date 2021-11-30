let range = document.querySelector("#size");
let img = document.querySelector("img");
let output = document.querySelector(".output-value");

range.addEventListener("change", (event) => {
  output.textContent = `${event.target.value}`;
  img.style.width = `${+event.target.value * 10}px `;
});

// let range = document.querySelector("input[type=range]");
// let img = document.querySelector("img");
// let output = document.querySelector("p");

// range.addEventListener("change", (event) => {
//   output.textContent = event.target.value;
//   img.style.width = `${event.target.value}rem`;
// });
