class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.isLoggedIn = false;
  }

  toggleLoginStatus() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  login() {
    return `Welcome, ${this.name}`;
  }

  logout() {
    return `See you next time!`;
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelector(".message").innerHTML = "";
  const email = event.target.elements.email.value;
  const name = event.target.elements.name.value;

  const user = new User(name, email);
  user.toggleLoginStatus();

  if (user.isLoggedIn) {
    const h1 = document.createElement("h1");
    const logoutBtn = document.createElement("button");
    logoutBtn.textContent = "Logout";
    h1.textContent = user.login();
    document.querySelector(".message").append(h1, logoutBtn);

    logoutBtn.addEventListener("click", () => {
      user.toggleLoginStatus();

      if (!user.isLoggedIn) {
        h1.textContent = user.logout();
        console.log(user);
      }
    });
  }

  console.log(user);
});
