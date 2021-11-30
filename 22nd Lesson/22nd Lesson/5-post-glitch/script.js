const wishesContainer = document.querySelector(".wishes");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const wish = document.getElementById("addWish").value.trim();

  if (name && wish) {
    // create an object
    const data = {
      name: name,
      wish: wish,
    };

    fetch("https://sunset-phase-chalk.glitch.me/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success,", data);
        location.reload();
      })
      .catch((error) => console.log(error));
  }
});

// get all wishes
fetch("https://sunset-phase-chalk.glitch.me/")
  .then((res) => res.json())
  .then((data) => {
    data.forEach(printPeopleWhishes);
  })
  .catch((error) => console.log(error));

function printPeopleWhishes(person) {
  const article = document.createElement("article");
  const h5 = document.createElement("h5");
  const p = document.createElement("p");
  h5.textContent = person.name;
  p.textContent = person.wish;
  article.style.padding = "10px";
  article.style.marginBottom = "10px";
  article.style.boxShadow = "0 2px 4px lightgray";

  article.append(p, h5);
  wishesContainer.append(article);
}
