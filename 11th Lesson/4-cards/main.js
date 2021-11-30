let users = [
  {
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Perry Fowler",
    email: "perry.fowler@example.com",
    cardColor: "#ff8c7f",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Loretta Butler",
    email: "loretta.butler@example.com",
    cardColor: "#4ff18e",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/39.jpg",
    name: "Charlotte Ward",
    email: "charlotte.ward@example.com",
    cardColor: "#4f65f1",
  },
];

const body = document.querySelector("body");

for (let x = 0; x < users.length; x++) {
  let user = users[x];
  // console.log(user);

  // create element for card
  const div = document.createElement("div");

  // style card
  // div.style.width = "400px";
  // div.style.margin = "20px auto";
  // div.style.border = "1px solid black";
  // div.style.textAlign = "center";
  // div.style.fontFamily = "monospace";
  // div.style.backgroundColor = user.cardColor;

  Object.assign(div.style, {
    width: "400px",
    margin: "10px auto",
    border: "1px solid black",
    fontFamily: "monospace",
    textAlign: "center",
    backgroundColor: user.cardColor,
  });

  // create and style inner card elements (img, name and etc.)
  const photo = document.createElement("img");
  // photo.style.width = "200px";
  // photo.style.height = "200px";
  // photo.style.objectFit = "cover";
  // photo.style.borderRadius = "50%";
  // photo.style.border = "10px solid white";
  // photo.src = user.photo;

  Object.assign(photo.style, {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "50%",
    border: "10px solid white",
  });

  photo.src = user.photo;

  const userName = document.createElement("h1");
  userName.textContent = user.name;

  const email = document.createElement("p");
  email.textContent = user.email;

  div.append(userName, photo, email);
  body.append(div);
}
