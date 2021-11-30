document.getElementById("button1").addEventListener("click", getText);

function getText() {
  fetch("test.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    });
}

// -----------------------

document.getElementById("button2").addEventListener("click", () => {
  fetch("dogs.json")
    .then((response) => response.json())
    .then((data) => {
      let output = "<ul></ul>";
      data.forEach((dog) => {
        output += `<li><b>${dog.name}</b> - ${dog.breed}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((error) => console.log(error));
});

// ----------------------

document.getElementById("button3").addEventListener("click", () => {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => getUsers(data))
    .catch((err) => console.log(err));
});

function getUsers(data) {
  let output = "<ul></ul>";
  data.forEach((user) => {
    output += `<li>${user.login}</li>`;
  });
  document.getElementById("output").innerHTML = output;
}
