/* 7. DOCUMENT OBJECT MODEL */

// QUERY SELECTOR, QUERY SELECTOR ALL

// 1. uzduotis

const p1 = document.querySelector(".paragraph.first");
const p2 = document.querySelector(".paragraph.second");

const contentOnly = (element, phrase) => {
  element.textContent = phrase;
};

contentOnly(p1, "WawaWywa");
contentOnly(p2, "Kaip pasakysite, tamsta mokytoja");

// 2. uzduotis

const addElementAndPhrase = (element, newEl, phrase) => {
  element.innerHTML = `<${newEl}>${phrase}</${newEl}>`;
};

addElementAndPhrase(p2, "h3", "Kas cia ivyko?");

// console.log(p2.innerHTML);

// 3. uzduotis

const paragraphs = document.querySelectorAll(".paragraph");

// console.log(paragraphs);

const changeAll = (array, phrase) => {
  for (let x = 0; x < array.length; x++) {
    array[x].textContent = phrase;
  }
};

changeAll(paragraphs, "Muoahaha");

const addInsideElement = (array, element, howMany, phrase) => {
  for (let x = 0; x < array.length; x++) {
    array[x].innerHTML = "";

    for (let y = 0; y < howMany; y++) {
      array[x].innerHTML += `<${element}>${phrase}</${element}> `;
    }
  }
};

addInsideElement(paragraphs, "span", 8, "wow!");

// GET ELEMENT BY ID

/***** 8. EVENTS ******/

// CLICK

const btn = document.querySelector(".addOne");
const number = document.querySelector(".startPoint");

btn.addEventListener("click", function () {
  let current = Number(number.textContent);
  current++;
  number.textContent = current;
});

const changeBtn = document.querySelector(".changeBg");

changeBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomRGB();
});

const randomRGB = () => {
  let randArray = [];

  for (let x = 0; x < 3; x++) {
    let random = Math.floor(Math.random() * 256);

    randArray.push(random);
  }

  console.log(randArray);
  return `rgb(${randArray.join(", ")})`;
};

// MOUSE

// const container = document.querySelector(".container");

// container.addEventListener("mouseenter", makeRedBg);

// function makeRedBg() {
//   container.style.backgroundColor = "red";
// }

// container.addEventListener("mouseleave", makeWhiteBg);

// function makeWhiteBg() {
//   container.style.backgroundColor = "white";
// }

// GRID UZDUOTIS

const grid = document.querySelector(".grid");
const cells = document.querySelectorAll(".cell");

grid.addEventListener("mouseenter", () => {
  grid.style.outline = "3px solid red";
  grid.style.backgroundColor = "hotpink";
});

grid.addEventListener("mouseleave", () => {
  grid.style.outline = "none";
  grid.style.backgroundColor = "white";
});

const randomRGB = () => {
  let randArray = [];

  for (let x = 0; x < 3; x++) {
    let random = Math.floor(Math.random() * 256);
    randArray.push(random);
  }

  return `rgb(${randArray.join(", ")})`;
};

for (let cell = 0; cell < cells.length; cell++) {
  let eachCell = cells[cell];

  eachCell.addEventListener("click", () => {
    if (!eachCell.style.backgroundColor) {
      eachCell.style.backgroundColor = randomRGB();
    } else {
      eachCell.style.backgroundColor = "";
    }
  });
}

// KEYBOARD

// const container = document.querySelector(".container");

// document.addEventListener("keyup", somethingHappens);

// function somethingHappens(event) {
//   console.log(event.key);
// }
