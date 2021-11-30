// first we want to get all of them (let's say not more than 10 and print their usernames in the list, sorted a-z)
const ul = document.querySelector("ul");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);

    // sort by username alphabetically
    data.sort((a, b) => a.username > b.username);

    // print all of them
    data.forEach(printUser);

    // add event listener and show only the ones you are looking for
    document.querySelector("input").addEventListener("keyup", (e) => {
      ul.innerHTML = "";
      data.forEach((user) => {
        const input = e.target.value.toLowerCase();
        // check if
        if (input.trim()) {
          if (user.username.toLowerCase().includes(input)) {
            printUser(user);
          }
        } else {
          printUser(user);
        }
      });
    });
  })
  .catch((err) => console.log(err));

function printUser(user) {
  const li = document.createElement("li");
  li.textContent = user.username;
  ul.append(li);
}
