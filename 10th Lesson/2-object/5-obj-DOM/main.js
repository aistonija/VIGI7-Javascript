/*
1. HTML susikurkite div elementą, kuris pradinėje būsenoje yra paslėptas.

2. Šalia susikurkite ir mygtuko elementą, išcentruokite.

3. main.js turimas toks objektas:

const styles = {
 colors: ["lightblue", "orange", "hotpink", "lightgreen", "black"],
 fontSize: "50px",
 display: false,
 alignment: "center",
 padding: "20px",
 changeText() {
    const phrases = ["Hi there", "Welcome!", "Weekend is coming", "Noice"];

    const randIndex = Math.floor(Math.random() * phrases.length);

    return phrases[randIndex];
  },

};

Naudodamiesi turimu objektu, ir jame esančiomis stiliaus savybėmis ir atsitiktinio teksto generatoriumi, parašykite kodą, kuris kiekvieną kartą spaudžiant mygtuką:

​ tai rodys tekstą, tai vėl paslėps; 

​ parinks atsitiktinę background spalvą iš sąrašo;

​ išspausdins atsitiktinį tekstą iš objekto metodo;

​ papildomos savybės, kaip teksto dydis, vidinis tarpas, centravimas turėtų būti panaudoti.
*/

// const styles = {
//   colors: ["lightblue", "orange", "hotpink", "lightgreen", "black"],
//   fontSize: "50px",
//   display: false,
//   alignment: "center",
//   padding: "20px",
//   changeText() {
//     const phrases = ["Hi there", "Welcome!", "Weekend is coming", "Noice"];
//     const randIndex = Math.floor(Math.random() * phrases.length);
//     return phrases[randIndex];
//   },
// };

// const btn = document.getElementById("btn");
// const box = document.getElementById("boxOne");

// btn.addEventListener("click", () => {
//   styles.display = !styles.display;
//   box.style.fontSize = styles.fontSize;
//   box.style.textAlign = styles.alignment;
//   box.style.color = styles.colors[styles.colors.lengt - 1];

//   let rand = Math.floor(Math.random() * 4);
//   box.style.backgroundColor = styles.colors[rand];

//   if (styles.display) {
//     box.style.display = "block";
//     box.textContent = styles.changeText();
//   } else {
//     box.style.display = "none";
//   }
// });

const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

const styles = {
  // key : value
  // properties
  colors: ["lightblue", "orange", "hotpink", "lightgreen", "black"],
  fontSize: "50px",
  display: false,
  alignment: "center",
  padding: "20px",

  // method
  changeText() {
    const phrases = ["Hi there", "Welcome!", "Weekend is coming", "Noice"];
    const randIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randIndex];
  },
};

btn.addEventListener("click", () => {
  // mygtuko paspaudimo metu pakeiciame box elemento stilius,
  // paimtus is savo styles objekto
  // box.style.padding = styles.padding;
  // box.style.fontSize = styles.fontSize;
  // box.style.textAlign = styles.alignment;

  // shorter way using object.assign(method)
  Object.assign(box.style /* take an element you want to change */, {
    fontSize: styles.fontSize,
    padding: styles.padding,
    textAlign: styles.alignment,
  });

  // susigeneruojam random skaiciu nuo 0 iki 4
  let randomIndex = Math.floor(Math.random() * 5);

  // pritaikom bgColor, is objekte esancio masyvo
  // su random sugeneruotu index
  box.style.backgroundColor = styles.colors[randomIndex];

  // kiekvieno paspaudimo metu nustatoma i priesinga reiksme
  styles.display = !styles.display;

  // jei display trigeris true - keiciame div elemento
  // stiliu i block, kitu atveju none
  if (styles.display) {
    box.style.display = "block";
    box.textContent = styles.changeText();
  } else {
    box.style.display = "none";
  }
});
