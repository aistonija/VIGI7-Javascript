// Atejus i puslapi turi alertint ir prasyt patvirtinimo (su confirm(), vietoje alert()) kad sutiktu su salygomis.

// jei sutinka issauogam sessionStorage tokiu formatu:
// key: consent, value: accepted

// jei nesutinka alertinam, kad puslapiu naudotis negalima

// 1. pasirasyti funkcija, kuri tikrins ar toks sutikimas jau egzistuoja

const shouldShowPopup = () => !localStorage.getItem("consent");

// jeigu neegzistuoja toks key, funkcija grazins true

// 2. pasirasyti funkcija, kuri issaugos viska sessionStorage

const saveToStorage = () => localStorage.setItem("consent", "accepted");

// 3. pagrindine logika: uzsikrovus langui, patikrinti ar neegzistuoja, ir jeigu grazina true tada reikia userio sutikimo.

// Jeigu sutiko, tada issaugome sessionStorage, jei nesutiko, tada alertinam, kad puslapiu naudotis negalima.

window.addEventListener("load", () => {
  if (shouldShowPopup()) {
    const consent = confirm("Agree to terms and conditions");
    if (consent) {
      saveToStorage();
    } else {
      alert("You cannot browse in this page, sorry");
    }
  }
});
