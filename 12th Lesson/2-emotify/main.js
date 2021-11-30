// toLowerCase
// toUpperCase
// includes
// replace
// charAt
// slice

const phrases = [
  "Peace begins with a smile",
  "The only way to have a friend is to be one.",
  "Smile, it's free therapy.",
  "Sadness is also a kind of defense.",
  "Sad hurts but it's a healthy feeling.",
  "A friend is what the heart needs all the time. ",
  "Melancholy is the happiness of being sad",
  "A good laugh is a mighty good thing, a rather too scarce a good thing.",
  "A good laugh is sunshine in the house",
  "Always laugh when you can. It is cheap medicine.",
];

const words = ["smile", "sad", "laugh"];

// Reikia parašyti funkciją, kuri žodyje ieškos žodži (smile, sad, arba laugh) ir pakeis ji emoji

const emojification = (sentence) => {
  sentence = sentence.toLowerCase();

  if (sentence.includes("smile")) {
    return sentence.replace("smile", "🙃");
  } else if (sentence.includes("sad")) {
    return sentence.replace("sad", "😢");
  } else if (sentence.includes("laugh")) {
    return sentence.replace("laugh", "🤣");
  } else {
    return sentence;
  }
};

for (let sentence = 0; sentence < phrases.length; sentence++) {
  let eachSentence = phrases[sentence];

  let firstLetter = emojification(eachSentence).charAt(0).toUpperCase();
  let restOfWord = emojification(eachSentence).slice(1).toLowerCase();

  let normalized = firstLetter + restOfWord;
  // console.log(normalized);

  const printPhrase = document.createElement("p");
  printPhrase.textContent = normalized;

  document.body.append(printPhrase);
}
