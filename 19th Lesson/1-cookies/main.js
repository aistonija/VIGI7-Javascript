let cookie = document.cookie;
const form = document.querySelector("form");
const message = document.querySelector(".message");
const deleteBtn = document.querySelector(".deleteCookie");

const clearCookie = () => {
  document.cookie = cookie + ";max-age=0";
  location.reload();
};

console.log(cookie);

if (!cookie) {
  form.addEventListener("submit", () => {
    const color = document.getElementById("color").value;
    document.cookie = `color=${color}`;
  });
} else {
  form.style.display = "none";
  message.style.display = "block";
  document.body.style.backgroundColor = cookie.split("=").slice(-1).join("");
  deleteBtn.addEventListener("click", clearCookie);
}
