const cards = JSON.parse(localStorage.getItem("cards") || "[]");
let currentCard = 0;
let frontCard = true;

init();

function init() {
  getCards();
  document.getElementById("card").addEventListener("click", displayNextCard);
  document.getElementById("btnFlip").addEventListener("click", flipCard);
}

function getCards() {
  document.getElementById("numCards").textContent = cards.length;
  console.log(cards);
}

function displayNextCard() {
  const backCard = document.getElementById("backCard");
  const frontOfCard = document.getElementById("frontCard");

  backCard.style.display = "none";
  frontOfCard.style.display = "block";

  let front = cards[currentCard].front;
  let back = cards[currentCard].back;

  frontOfCard.textContent = front;
  backCard.textContent = back;
  backCard.style.display = "none";

  document.getElementById("cardNum").textContent = currentCard + 1;

  if (currentCard < cards.length - 1) {
    currentCard++;
  } else {
    currentCard = 0;
  }
}

function flipCard() {
  const backCard = document.getElementById("backCard");
  const frontOfCard = document.getElementById("frontCard");

  if (frontCard) {
    backCard.style.display = "block";
    frontOfCard.style.display = "none";
    frontCard = !frontCard;
  } else {
    backCard.style.display = "none";
    frontOfCard.style.display = "block";
    frontCard = !frontCard;
  }
}
