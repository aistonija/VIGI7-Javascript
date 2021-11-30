/**
 1. Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išmeta ją h1 elemente. Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60. Variable turi būti aprašyti viršuj, kad būtų lengva keist. 
 */

const movieForm = document.getElementById("movieForm");

movieForm.addEventListener("submit", showPrice);

function showPrice(event) {
  event.preventDefault();
  const age = Number(event.target.elements.age.value);
  const h1 = document.querySelector(".moviePrice");
  h1.textContent = `${calcPrice(age)} EUR`;
}

function calcPrice(ageInput) {
  const standard = 6;
  let newPrice = 0;

  if (ageInput <= 16) {
    newPrice = standard / 3;
  } else if (ageInput >= 60) {
    newPrice = standard / 2;
  } else {
    newPrice = standard;
  }

  return newPrice;
}

// ----------------------------------------------------------------------------------

/**
 2. Kai kuriose šalyse reikia eiti į kariuomenę, jei tu tarp 18 ir 30, tačiau, jei neturi kriminalinio įrašo. Sukurk programą, kuri su input + radio button pasakytų ar tam žmogui gali reikėti eiti į kariuomenę (h1 elemente). Hint: pasirinkite su querySelector tik pažymėtą radio input (aha, yra toks CSS selektorius), ir perskaitykite jo reikšmę.
 */

const criminalForm = document.getElementById("criminalForm");

criminalForm.addEventListener("submit", checkConviction);

function checkConviction(event) {
  event.preventDefault();
  const age = Number(event.target.elements.ageCriminal.value);
  const convicted = event.target.elements.criminal.value;

  if (age >= 18 && age <= 30 && convicted === "no") {
    document.querySelector(".criminalOutput").textContent =
      "Jus saukiamas i kariuomene :')))";
  } else {
    document.querySelector(".criminalOutput").textContent = "Galite atsikvepti";
  }
}
// ----------------------------------------------------------------------------------

/**
 1. Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
Pvz: [16] => "Jūsų bonusas: 100 eurų".
 */

const bonusForm = document.getElementById("yearsWorked");

bonusForm.addEventListener("submit", checkMyBonus);

function checkMyBonus(event) {
  event.preventDefault();

  const years = Number(event.target.elements.yearsInCompany.value);

  let bonus = 50;
  let message = "";

  if (years > 10 && years < 20) {
    bonus += 50;
  } else if (years >= 20) {
    bonus += 150;
  }

  message = `Jusu bonusas: ${bonus} euru`;
  document.querySelector(".bonusMessage").textContent = message;
}

/**
 2. Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible by four, except that any year divisible by 100 is a leap year only if it is also divisible by 400). Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja. Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.
 */

document.getElementById("leapYear").addEventListener("submit", (e) => {
  e.preventDefault();

  const year = Number(e.target.elements.yearInput.value);

  if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
    document.querySelector(".leap").textContent = `${year} is a leap year`;
  } else {
    document.querySelector(".leap").textContent = `${year} is NOT a leap year`;
  }
});

/**
 3. Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.
 */

document.getElementById("celsius").addEventListener("submit", (e) => {
  e.preventDefault();

  const celsius = Number(e.target.elements.temp.value);
  let farenheit = celsius * 1.8 + 32;
  document.querySelector(
    ".farenheit"
  ).textContent = `${celsius} in celsius equals to ${farenheit} in farenheit`;
});

/**
5. Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>. Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. List itemuose turi būti tavo vardas :)
 */

document.getElementById("list").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = event.target.elements.name.value;
  const times = Number(event.target.elements.number.value);

  const ul = document.querySelector(".listItems");
  //   ul.innerHTML = "";
  for (let x = 0; x < times; x++) {
    ul.innerHTML += `<li>${name}</li>`;
  }

  //   console.log(ul.innerHTML);
});

/**
 6. Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. Po forma - tegul būna tusčias div elementas. Jame reikia atvaizduoi trikampį pagal įvestą input. Šis pratimas - klasika programavimo ciklų srityje, tiek atsakymų, tiek teorijų, tiek sąmokslo teorijų internete - daugiau nei reikia; pasibaigus ar pastrigus - būtinai pasinagrinėkite (gal vienas iš paaiškinimų jums atvers duris į ciklų pasaulio aiškumą).
 */

document.getElementById("tree").addEventListener("submit", function (event) {
  event.preventDefault();

  const num = Number(event.target.elements.triangleSize.value);

  const container = document.querySelector(".triangle");
  container.innerHTML = "";

  for (let x = 1; x <= num; x++) {
    for (let i = 1; i <= x; i++) {
      container.innerHTML += "*";
    }

    container.innerHTML += "<br>";
  }
});

/**
 1. Sukurkite funkciją, į kurią būtų paduotas vietas parametras - n. Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš mažų L raidžių ASCII būdų).
t.y. jei kviesite funkciją fn(4), tai turėtų atspaudinti tokį rezultatą:
L
L
L
L L L L
 */

const container = document.querySelector(".triangle");

const shapeL = (number) => {
  for (let x = 0; x < number; x++) {
    if (x !== number - 1) {
      console.log(x);
      container.innerHTML += "L";
    } else if (x == number - 1) {
      for (let y = 0; y <= x; y++) {
        container.innerHTML += "L";
      }
    }

    container.innerHTML += "<br>";
  }
};

shapeL(4);

/**
 Sukurkite tokią pačią funkciją, bet kad spausdintų I raidę. Vartotojas gali įrašyti tik nelyginį teigiamą skaičių, kitaip išmeta klaidą.
pvz.:
I I I I I
I
I
I
I I I I I
 */

const uneven = (oddNumber) => {
  // reikia patikrinti ar nelyginis skaicius;
  if (oddNumber % 2 !== 0) {
    // tada sukam cikla
    for (let x = 0; x < oddNumber; x++) {
      // kadangi vienoje eileje printiname tik pirmo ir paskutinio ciklo metu, turime pasirasyti if
      if (x === 0 || x === oddNumber - 1) {
        // ir jei tai pirmas arba paskutinis - tada sukam nauja cikla, kad printintu toje pacioje eileje
        for (let y = 0; y < oddNumber - 1; y++) {
          container.innerHTML += "I ";
        }
      }
      container.innerHTML += "I <br>";
    }
  } else {
    container.innerHTML = "KLAIDA";
  }
};

uneven(5);

/**
 3. Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input (t.y. blur event), vardas atsiras po apačia, tvarkingame sąraše (su kableliais):
Pvz.: Petras, Jonas, Mantas, Antanas.
 */

const namesInput = document.getElementById("namesBlur");
// const namesList = [];

namesInput.addEventListener("blur", (e) => {
  const nameValue = e.target.value;
  // namesList.push(nameValue);

  const outputLine = document.querySelector(".names-list-output");
  // 1.
  if (outputLine.textContent === "") {
    outputLine.innerHTML = nameValue;
  } else {
    outputLine.innerHTML += `, ${nameValue}`;
  }

  // 2.
  // document.querySelector(".names-list-output").innerHTML = "";
  // document.querySelector(".names-list-output").innerHTML +=
  //   namesList.join(", ") + ".";
});

/**
 4. Sukurkite formą su dviem inputais, kurie paims skaičius. Suvedus duomenis - turi alert'int skaičių, kuris arčiausiai 100.
  Pvz.: fn(101, 81) grąžins 101.
 */

let num1 = document.querySelector("input[name=firstNumber]");
let num2 = document.querySelector("input[name=secondNumber]");

const inputFocus = (e) => {
  e.target.style.backgroundColor = "lightskyblue";
};

const removeFocus = (e) => {
  e.target.style.backgroundColor = "transparent";
};

num1.addEventListener("focus", inputFocus);
num1.addEventListener("blur", removeFocus);

num2.addEventListener("focus", inputFocus);
num2.addEventListener("blur", removeFocus);

document.querySelector(".minMax").addEventListener("submit", (event) => {
  event.preventDefault();

  const val1 = +num1.value;
  const val2 = +num2.value;

  closest100(val1, val2);
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

const closest100 = (num1, num2) => {
  console.log(num1, num2);
  const x = Math.abs(num1 - 100);
  const y = Math.abs(num2 - 100);

  console.log(x, y);

  if (x < y) {
    alert(num1);
  }

  if (y < x) {
    alert(num2);
  }
};
