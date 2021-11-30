const emotionOption = (emotion) => {
  let emoji = "";

  switch (emotion) {
    case "sad":
      emoji = "😭";
      break;
    case "grin":
      emoji = "🙃";
      break;
    case "lol":
      emoji = "🤣😂";
      break;
    case "good":
      emoji = "😋😘";
      break;
  }

  return emoji;
};

const outputContainer = document.querySelector(".output");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  outputContainer.innerHTML = "";
  const selected = e.target.elements.emotion.value;

  const output = document.createElement("h1");
  output.textContent = emotionOption(selected);
  output.style.fontSize = "20rem";
  output.style.textAlign = "center";

  outputContainer.append(output);
});
