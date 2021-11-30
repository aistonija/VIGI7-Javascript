const form = document.querySelector("form");
const input = document.querySelector("input[name=text]");
const textOutput = document.querySelector(".message>h2");
const allTexts = JSON.parse(localStorage.getItem("texts") || "[]");

if (allTexts) {
  const rand = Math.floor(Math.random() * allTexts.length);
  textOutput.textContent = allTexts[rand];
}

document.addEventListener("keyup", () => {
  textOutput.textContent = input.value;
});

form.addEventListener("submit", () => {
  if (input.value != "") {
    allTexts.push(input.value);
    localStorage.setItem("texts", JSON.stringify(allTexts));
  }
});

console.log(allTexts);
