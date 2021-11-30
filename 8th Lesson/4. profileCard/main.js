const reg = document.getElementById("registerProfile");

reg.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = event.target.elements.fullName.value;
  const imgUrl = event.target.elements.imgUrl.value;
  const snacky = event.target.elements.snacks.value;
  const season = event.target.elements.bornSeason.value;
  const likes = document.querySelectorAll("input[type=checkbox]:checked");

  // snacks beautified
  const checkSnack = () => {
    let resultSnack = "";

    if (snacky === "salty") {
      resultSnack = "I like salty stuff like salted peanuts, crisps and etc.";
    } else if (snacky === "sweet") {
      resultSnack =
        "I like all the sweets, like ice cream, gummies, chocolate and etc.";
    } else {
      resultSnack = "Snacky all the way";
    }

    return resultSnack;
  };

  // another function for filling the card, because we will validate it later, and if ok then - print out
  const fillCard = () => {
    document.getElementById("profileName").textContent = fullName;
    document.getElementById("profileImg").src = imgUrl;
    document.querySelector(".likeSnacks").textContent = checkSnack();
    document.querySelector(
      ".bornInSeason"
    ).textContent = `I was born in ${season}`;

    for (let x = 0; x < likes.length; x++) {
      document.querySelector(
        ".generalLikes"
      ).innerHTML += `<li>#${likes[x].value}</li>`;
    }

    const allLikes = document.querySelectorAll("li");

    for (let x = 0; x < allLikes.length; x++) {
      allLikes[x].style.backgroundColor = makeRGB();
    }

    document.querySelector(".card").style.display = "block";
  };

  // lil bit of validation
  if (season === "") {
    event.target.elements.bornSeason.style.outline = "2px solid red";
  } else {
    reg.style.display = "none";
    fillCard();
  }
});

function makeRGB() {
  let colors = [];

  for (let x = 0; x < 3; x++) {
    let randomize = Math.floor(Math.random() * 256);
    colors.push(randomize);
  }

  return `rgb(${colors.join(", ")})`;
}
