// 1. issisaugosime kintamuosius - forma, korteliu skaiciaus tekstas, pasitikrinti ir pasiimti korteliu masyva is localStorage

const form = document.querySelector("form");
const cardsCount = document.getElementById("numCards");

// local Storage korteles saugosime key: 'cards'
const cardsArray = JSON.parse(localStorage.getItem("cards")) || [];

// 2. Helper functions
// save to storage
const saveToStorage = () => {
  localStorage.setItem("cards", JSON.stringify(cardsArray));
};

// show how many cards are stored
const showCardsCount = () => {
  cardsCount.textContent = cardsArray.length;
};

showCardsCount();

const clearUI = () => {
  document.getElementById("cardFront").value = "";
  document.getElementById("cardBack").value = "";
};

// 3. Main logic on submit

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const frontContent = document.getElementById("cardFront").value.trim();
  const backContent = document.getElementById("cardBack").value.trim();

  if (frontContent && backContent) {
    const card = {
      front: frontContent,
      back: backContent,
    };

    cardsArray.push(card);

    saveToStorage();
    showCardsCount();
    clearUI();
  } else {
    alert("irasyk teksto!");
  }
});
