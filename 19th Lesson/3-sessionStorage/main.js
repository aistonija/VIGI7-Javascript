// with local storage. problem, it is saved no matter how many times closed, so it's better to use sessionStorage

const consentName = "consent";

// check if consent key exists in local Storage
const shouldShowPopup = () => !localStorage.getItem(consentName);

// save to storage
const saveToStorage = () => localStorage.setItem(consentName, "accepted");

window.onload = () => {
  if (shouldShowPopup()) {
    const consent = confirm("Agree to terms and conditions");
    if (consent) {
      saveToStorage();
    }
  }
};

// with cookies
// const cookieStorage = {
//   getItem: (key) => {
//     const cookies = document.cookie
//       .split(";")
//       .map((cookie) => cookie.split("="))
//       .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
//     return cookies[key];
//   },
//   setItem: (key, value) => {
//     document.cookie = `${key}=${value}`;
//   },
// };

// const cookiesStorage = cookieStorage;
// const consentName = "consent";

// // check if consent key exists in local Storage
// const shouldShowPopup = () => !cookiesStorage.getItem(consentName);

// // save to storage
// const saveToStorage = () => cookiesStorage.setItem(consentName, "accepted");

// window.onload = () => {
//   if (shouldShowPopup()) {
//     const consent = confirm("Agree to terms and conditions");
//     if (consent) {
//       saveToStorage();
//     }
//   }
// };
