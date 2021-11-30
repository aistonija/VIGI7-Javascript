const ball = document.getElementById("ball");
ball.style.transitionProperty = "all";
ball.style.transitionDuration = "3s";

document.addEventListener("keydown", () => {
  ball.style.bottom = "50%";
});

document.addEventListener("keyup", () => {
  ball.style.bottom = "40px";
});
