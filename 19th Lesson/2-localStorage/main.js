const form = document.querySelector("form");
const input = document.querySelector("input[name=text]");
const textOutput = document.querySelector(".message>h2");

if (localStorage.getItem("text")) {
  textOutput.textContent = localStorage.getItem("text");
}

document.addEventListener("keyup", () => {
  textOutput.textContent = input.value;
});

form.addEventListener("submit", () => {
  localStorage.setItem("text", input.value);
});
