let number;

window.addEventListener("load", (event) => {
  console.log(event);
  console.log("loaded");

  // rand nuo 1 iki 5
  const random = Math.floor(Math.random() * 5) + 1;
  console.log(random);
  number = random;
});

let attempts = 0;

document.querySelector("input[type=text]").addEventListener("blur", (event) => {
  attempts++;

  const inputVal = +event.target.value;

  if (inputVal != number) {
    alert("Neatspejai");
  } else {
    alert(`atspejai is ${attempts} karto`);
  }
});
