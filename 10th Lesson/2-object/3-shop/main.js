/*
Atlikite veiksmus su duotu objektu:

const shop = {
  products: ["milk", "honey", "bred pita", "water", "socks"],
  productPrice: 164,
  shopWorksTill: 22,
  peopleInLine: ["first", "second", "third"],
  moneyInPocket: 500,
  currentTime: 21,
  wentForShopping: false,
};
*/

// 1. Patikrinkite ar dabartinis laikas (currentTime) yra mažiau nei parduotuvės darbo laikas (shopWorksTill)

// 2. Jei sąlyga atitinka (true) - pakeiskite wentForShoppint į atvirkštinę reikšmę

// 3. Taip pat patikrinkite ar turite užtektinai pinigų (moneyInPocket) nusipirkti visiems produktams (pirmiausiai apsiskaičiuokite visų produktų kainą naudodami .length ir productPrice)

// 4. Jeigu pinigų užtenka, log visus produktus, kuriuos nusipirkote.

// 5. Jeigu pinigų neužteko, trečias žmogus eilėje (peopleInLine) turi būti jūsų vardas. Taip pat iš visos turimos sumos atimkite 256 ir išloginkite: "____ pinigų liko po apsipirkimo"

const shop = {
  products: ["milk", "honey", "bred pita", "water", "socks"],
  productPrice: 164,
  shopWorksTill: 22,
  peopleInLine: ["first", "second", "third"],
  moneyInPocket: 500,
  currentTime: 21,
  wentForShopping: false,
};

if (shop.shopWorksTill > shop.currentTime) {
  shop.wentForShopping = !shop.wentForShopping;
  if (shop.products.length * shop.productPrice < shop.moneyInPocket) {
    console.log(shop.products);
  } else {
    shop.peopleInLine[2] = "Aiste";
    shop.moneyInPocket -= 256;
    console.log(`${shop.moneyInPocket} money left after shopping`);
  }
}
