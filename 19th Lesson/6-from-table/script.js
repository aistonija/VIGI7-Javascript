const tbody = document.querySelector("tbody");
const namesArray = [];

displayTable(namesArray);

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = document.querySelector("input").value.trim();

  let users = {
    name: fullName,
  };

  if (fullName) {
    namesArray.push(users);
    localStorage.setItem("names", JSON.stringify(namesArray));
    displayTable(namesArray);
  }
});

function displayTable() {
  tbody.innerHTML = "";
  let array = localStorage.getItem("names");
  let parcedArray = JSON.parse(array) || [];
  parcedArray.forEach((person) => {
    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = person.name;
    row.append(td1);
    tbody.append(row);
  });
}
