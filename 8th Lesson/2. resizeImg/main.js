let input = document.getElementById("size");

input.addEventListener("focus", (event) => {
  event.target.style.outline = "3px solid cornflowerblue";
});

input.addEventListener("blur", (event) => {
  event.target.style.outline = "none";

  let value = parseInt(event.target.value);

  if (value === "" || value !== Number(event.target.value)) {
    input.style.backgroundColor = "lightpink";
  } else {
    input.style.backgroundColor = "lightgreen";

    document.querySelector("img").style.width = `${value}px`;
  }
});

// Uzduotis:
// isikelti nuotrauka, ir css duoti ploti 20px.

// formos elemente, input - text.
// inputui, uzdeti eventListener
// - focus - kad uzsidetu outline

// tam paciam inputui, desime event'a blur
// pirmiasiai nuimsime outline

// tada pasiimsim ivesta reiksme

// tada patikrinsime ar reiksme yra skaicius
// ir ar netuscia

// jeigu tuscia, tada nuspalvinti to laukelio
// background raudona

// o jeigu verte gera, t.y. skaicius, tuomet per JS
// pakeiciame nuotraukos ploti

// const input = document.querySelector('input[name=number]');

// // 1. focus event

// input.addEventListener('focus', (event) => {
//   event.target.style.outline = '3px solid lime';
// })

// input.addEventListener('blur', (event) => {
//   event.target.style.outline = 'none';

//   let value = Number(event.target.value);

//   if (!value){
//     event.target.style.backgroundColor = 'lightpink';
//   } else {
//     event.target.style.backgroundColor = 'transparent';
//     document.querySelector('img').style.width = `${value}px`
//   }
// })
