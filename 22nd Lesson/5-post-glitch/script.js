const wishes = document.querySelector(".wishes");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const wish = document.getElementById("addWish").value.trim();

  const data = {
    name: name,
    wish: wish,
  };

  if (wish && name) {
    fetch("https://sunset-phase-chalk.glitch.me/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Duomenys issaugoti");
        location.reload();
      });
  }
});

// get all wishes and print them
fetch("https://sunset-phase-chalk.glitch.me/")
  .then((res) => res.json())
  .then((data) => {
    data.forEach(printPeopleWishes);
  });

function printPeopleWishes(person) {
  const article = document.createElement("article");
  const name = document.createElement("h5");
  const wishing = document.createElement("p");
  article.style.boxShadow = "0 2px 4px lightgray";
  article.style.padding = "20px";
  article.style.marginBottom = "20px";

  name.textContent = person.name;
  wishing.textContent = person.wish;
  article.append(name, wishing);
  wishes.append(article);
}
