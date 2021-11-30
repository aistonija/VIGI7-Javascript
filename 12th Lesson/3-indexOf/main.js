const form = document.querySelector("form");
let output = document.querySelector(".output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  output.innerHTML = "";

  const curseWord = e.target.elements.curseWord.value;
  const beautWord = document.createElement("h1");

  beautWord.textContent = noCursing(curseWord);
  output.append(beautWord);

  e.target.elements.curseWord.value = "";
});

function noCursing(curseWord) {
  let cursing = ["ch", "x", "le", "lia", "zd", "ib", "yb", "h"];
  let newWord = "";

  for (let curse = 0; curse < cursing.length; curse++) {
    let lookingFor = cursing[curse];
    let replaceLength = cursing[curse].length;

    if (curseWord.indexOf(lookingFor) >= 0) {
      let index = curseWord.indexOf(lookingFor);
      let wordPart = curseWord.substr(index, replaceLength);
      newWord = curseWord.replace(wordPart, "😯");
      break;
    }
  }

  return newWord;
}
