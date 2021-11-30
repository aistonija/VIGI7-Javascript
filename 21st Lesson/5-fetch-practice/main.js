document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  e.preventDefault();
  const number = document.getElementById("number").value;
  fetch(`http://api.icndb.com/jokes/random/${number}`)
    .then((res) => res.json())
    .then((data) => {
      const jokes = data.value;
      jokes.forEach(showJoke);
    })
    .catch((err) => console.log(err));
}

function showJoke(joke) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = joke.joke;
  p.style.padding = "10px";
  p.style.boxShadow = "0 2px 4px lightgray";
  p.style.marginBottom = "20px";

  div.append(p);
  document.querySelector(".jokes").append(div);
}
