const form = document.querySelector("form");
const table = document.querySelector("table");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  table.innerHTML = "";

  const columns = event.target.elements.columns.value;
  const rows = event.target.elements.rows.value;

  for (let x = 0; x < rows; x++) {
    const tr = document.createElement("tr");

    for (let y = 0; y < columns; y++) {
      const td = document.createElement("td");

      tr.append(td);
    }

    table.append(tr);
  }
});
