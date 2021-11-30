let treeSize = document.getElementById("size");
const treeContainer = document.querySelector(".tree-container");

const formTree = (size) => {
  treeContainer.innerHTML = "";
  if (size) {
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < x; y++) {
        let decor = Math.floor(Math.random() * 3) + 1;

        if (decor === 1) {
          treeContainer.innerHTML += `<span class="star">🌺</span>`;
        } else if (decor === 2) {
          treeContainer.innerHTML += `<span class="star">🧿</span>`;
        } else {
          treeContainer.innerHTML += `<span class="star">♻️</span>`;
        }
      }
      treeContainer.innerHTML += "<br>";
    }
  }

  treeContainer.innerHTML += `<span class="star">⬛</span><br>`;
};

treeSize.addEventListener("blur", (event) => {
  treeSize = Number(event.target.value);
  formTree(treeSize);
});
