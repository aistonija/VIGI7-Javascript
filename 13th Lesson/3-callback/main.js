const phrases = [
  "The early bird gets the worm, but the second mouse gets the cheese.",
  "You have a secret admirer.",
  "Be on the alert to recognize your prime at whatever time of your life it may occur.",
  "Your road to glory will be rocky, but fulfilling",
  "Courage is not simply one of the virtues, but the form of every virtue at the testing point",
  "Love, because it is the only true adventure.",
];

const button = document.querySelector("button");
const output = document.querySelector(".myFortune");

const generateFortune = () => {
  output.innerHTML = "";
  const index = Math.floor(Math.random() * phrases.length);
  const randomPhrase = phrases[index];
  const printPhrase = document.createElement("h1");
  printPhrase.textContent = randomPhrase;
  output.append(printPhrase);
};

button.addEventListener("click", generateFortune);
