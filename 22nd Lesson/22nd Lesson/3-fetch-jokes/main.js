document.querySelector(".get-jokes").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".jokes").innerHTML = "";
  const number = document.getElementById("number").value;

  fetch(`http://api.icndb.com/jokes/random/${number}`)
    .then((res) => res.json())
    .then((data) => {
      const jokesArray = data.value;
      jokesArray.sort((a, b) => b.id - a.id);
      jokesArray.forEach(printJoke);
    });
});

function printJoke(jokeObj) {
  const p = document.createElement("p");
  p.textContent = `${jokeObj.joke}  - ${jokeObj.id}`;
  p.style.padding = "10px";
  p.style.marginBottom = "10px";
  p.style.boxShadow = "0 2px 4px lightgray";
  document.querySelector(".jokes").append(p);
}
