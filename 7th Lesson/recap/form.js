// SUBMIT + validate

document.querySelector(".agreement").addEventListener("submit", (e) => {
  e.preventDefault();

  if (document.querySelector("input[type=radio]:checked")) {
    document.querySelector(".message").innerHTML = "<h2>Thank you</h2>";
    document.querySelector(".message").style.backgroundColor = "lightgreen";
  } else {
    document.querySelector(".message").innerHTML =
      "<h2>We cannot proceed further</h2>";
    document.querySelector(".message").style.backgroundColor = "lightpink";
  }
});

// FOCUS
// https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event

document
  .querySelector("input[name=email]")
  .addEventListener("focus", (event) => {
    event.target.style.background = "lightgreen";
  });

// BLUR
// https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event

document
  .querySelector("input[name=email]")
  .addEventListener("blur", (event) => {
    if (document.querySelector("input[name=email]").value === "") {
      event.target.style.background = "pink";
    }
  });
