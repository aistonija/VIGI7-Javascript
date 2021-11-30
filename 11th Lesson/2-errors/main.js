const form = document.querySelector("form");
let input = document.getElementById("number");

input.addEventListener("blur", () => {
  if (document.querySelector("p")) {
    document.querySelector("p").remove();
  }

  const inputValue = input.value;
  const message = document.createElement("p");
  message.style.padding = "10px";
  if (inputValue != Number(inputValue) || inputValue < 0 || inputValue > 99) {
    message.style.backgroundColor = "lightpink";
    message.style.color = "red";
    message.textContent = "Please enter any digit between 0 and 99";
    form.append(message);
  } else {
    message.style.backgroundColor = "lightgreen";
    message.style.color = "darkgreen";
    message.textContent = "Thank you, your guess was registered";
    form.prepend(message);
  }
});
