// ivedus varda i forma ir pasubmitinus -> inputo verte turi buti issaugoma objekte, ir idedama i vardu masyva, kuris isideda i localStorage

// taip pat paspaudus submit i lentele prisideda naujas tekstas i lentele.

// tekstas nepersiraso, o prisideda nauja eilute naujam tekstui

// jeigu input tuscias - tuscia verte nepridedama

// veiksmas turi vykti neperkrovus puslapio
//---------------------------------------

// 1. susikurti kintamuosius lentelei, formai, ir jau egzistuojantiems/ arba neegzistuojantiems vardams masyva

const tbody = document.querySelector("tbody");
const form = document.querySelector("form");
const namesArr = JSON.parse(localStorage.getItem("names")) || [];

// 2. ivedus verte ir submitinus, sustabyti refresh, ir issaugoti apkarpyta verte. neturi buti whitespace is priekio ir is galo.

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = document.querySelector("input").value.trim();

  // 3. sukurti objekta su key: fullName, value: input
  // ta objekta ideti i namesArr
  const user = {
    fullName: inputValue,
  };

  if (inputValue) {
    namesArr.push(user);
    localStorage.setItem("names", JSON.stringify(namesArr));
    displayTable();
  }
});

function displayTable() {
  tbody.innerHTML = "";
  namesArr.forEach((user) => {
    const row = document.createElement("tr");
    const nameTd = document.createElement("td");

    nameTd.textContent = user.fullName;
    row.append(nameTd);
    tbody.append(row);
  });
}
