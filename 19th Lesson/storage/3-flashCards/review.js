// local Storage korteles saugosime key: 'cards'
const cardsArray = JSON.parse(localStorage.getItem("cards")) || [];
const cardsCount = document.getElementById("numCards");

// show how many cards are stored
const showCardsCount = () => {
  cardsCount.textContent = cardsArray.length;
};

showCardsCount();

// pradine busena - nuo kurios korteles rodyti
let currentCard = 0;
// pradine busena - rodomas korteles priekis
let frontCard = true;

const displayNextCard = () => {
  const frontOfCard = document.getElementById("frontCard");
  const backOfCard = document.getElementById("backCard");

  frontOfCard.style.display = "block";
  backOfCard.style.display = "none";

  // console.log(cardsArray[currentCard]);
  frontOfCard.textContent = cardsArray[currentCard].front;
  backOfCard.textContent = cardsArray[currentCard].back;

  document.getElementById("cardNum").textContent = currentCard + 1;

  // jeigu dabartine korta yra mazesne uz masyvo elementu kieki, tada prie dabartines pridedam 1, kitu atveju nustatom 0
  if (currentCard < cardsArray.length - 1) {
    currentCard++;
  } else {
    currentCard = 0;
  }
};

document.getElementById("card").addEventListener("click", displayNextCard);

document.getElementById("btnFlip").addEventListener("click", () => {
  const front = document.getElementById("frontCard");
  const back = document.getElementById("backCard");

  // tikriname kokia yra busena. Jei front, tai nustatome, kad rodytu back, o front nerodytu ir pakeiciame busena i priesinga.

  if (frontCard) {
    front.style.display = "none";
    back.style.display = "block";
    frontCard = !frontCard;
  } else {
    front.style.display = "block";
    back.style.display = "none";
    frontCard = !frontCard;
  }
});
