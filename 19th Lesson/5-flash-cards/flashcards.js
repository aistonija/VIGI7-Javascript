// Save cards in an array in local storage
// Selectors
const form = document.querySelector("form");
const numCardsOutput = document.getElementById("numCards");
const cards = JSON.parse(localStorage.getItem("cards") || "[]");
console.log(cards);

// Functions
const saveToStorage = () => {
  localStorage.setItem("cards", JSON.stringify(cards));
};

const numCardsOut = () => {
  if (cards.length == 0) {
    numCardsOutput.textContent = 0;
  } else {
    numCardsOutput.textContent = cards.length;
  }
};

const clearUI = () => {
  document.getElementById("cardFront").value = "";
  document.getElementById("cardBack").value = "";
};

// Event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let frontContent = document.getElementById("cardFront").value;
  let backContent = document.getElementById("cardBack").value;
  let card = { front: frontContent, back: backContent };
  cards.push(card);
  console.log("cards array:", cards);
  clearUI();
  numCardsOut();
  saveToStorage();
});

numCardsOut();
