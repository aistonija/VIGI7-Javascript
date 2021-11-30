const form = document.querySelector("form");

form.addEventListener("submit", formValues);

function formValues(event) {
  event.preventDefault();

  const inputs = event.target.elements;

  const age = +inputs.age.value;
  const firstName = inputs.firstName.value;
  const email = inputs.email.value;

  const output = document.querySelector(".output");

  output.textContent = `Name: ${firstName}, age: ${age}, email: ${email}`;
}

let name = "Aiste";
let lastName = "Zuperkaite";

console.log('Mano "vardas" yra ' + name + ", o pavarde: " + lastName);
console.log(`Mano vardas "yra" ${name},
o pavarde: ${lastName}`);
``;
