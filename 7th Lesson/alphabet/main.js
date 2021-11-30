const letter = document.querySelector(".letter");

let rows = 5;
let cols = 3;

// letter A

for (let row = 1; row <= rows; row++) {
  for (let col = 1; col <= cols; col++) {
    if (
      ((row == 1 || row == 3) && col == 2) ||
      (row != 1 && (col == 1 || col == 3))
    ) {
      letter.innerHTML += `<span> • </span>`;
    } else {
      letter.innerHTML += `<span class="empty"> • </span>`;
    }
  }
  letter.innerHTML += "<br>";
}

// letter B

// letter C
