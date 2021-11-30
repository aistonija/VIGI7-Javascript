const mainBody = document.querySelector("body");

// createElement
const greeting = document.createElement("h1");
greeting.textContent = "Laba diena";

const goodbye = document.createElement("h2");
goodbye.textContent = "Viso gero";

const div = document.createElement("div");
div.style.border = "1px solid black";
// console.log(greeting.textContent);
// append

div.append(goodbye);

// prepend
div.prepend(greeting);

mainBody.append(div);

/* TEXT ONLY */

let box = document.createElement("div");
box.append("Some text");
box.prepend("Headline: ");

// mainBody.prepend(box);
mainBody.prepend(box);
console.log(box.textContent);
