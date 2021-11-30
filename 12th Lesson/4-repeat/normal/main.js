const form = document.querySelector("form");
const output = document.querySelector(".output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  output.innerHTML = "";

  const num = +event.target.elements.number.value;

  const longerBurp = () => {
    let r = "r";

    if (num > 0) {
      return `Bu${r.repeat(num).toUpperCase()}p`;
    } else {
      return `ENTER THE NUMBER`;
    }
  };

  const burp = document.createElement("h1");
  burp.textContent = longerBurp();
  output.append(burp);
});
