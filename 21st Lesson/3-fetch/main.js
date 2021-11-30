document.getElementById("button1").addEventListener("click", getText);

// get local txt
function getText() {
  fetch("test.txt")
    .then((response) => response.text())
    .then((data) => (document.getElementById("output").innerHTML = data))
    .catch((error) => console.log(error));
}

// get local json data
document.getElementById("button2").addEventListener("click", getJson);

function getJson() {
  fetch("dogs.json")
    .then((response) => response.json())
    .then((data) => {
      outputData(data);
    })
    .catch((error) => console.log(error));
}

function outputData(data) {
  let output = "";
  data.forEach((dog) => {
    output += `<li><b>${dog.name}</b> - ${dog.breed}</li>`;
  });

  document.getElementById("output").innerHTML = output;
}

// get from external API

document.getElementById("button3").addEventListener("click", getExternal);

function getExternal() {
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => {
      outputExternal(data);
    })
    .catch((error) => console.log(error));
}

function outputExternal(data) {
  let output = "";
  data.forEach((user) => {
    output += `<li>${user.login}</li>`;
  });

  document.getElementById("output").innerHTML = output;
}
