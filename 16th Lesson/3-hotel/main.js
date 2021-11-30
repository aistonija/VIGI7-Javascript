// 1. Susikurkite objektų konstruktorių naudojant new pavadinimu Hotel.​

function Hotel(name, rooms, booked) {
  // 2. Jis galės kurti objektus, kurie turės šias savybes (properties):​
  // - name;​
  // - rooms;​
  // - booked;​
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;

  // 3. Taip pat jis galės kurti objektus, kurie turės šiuos metodus (naudojant prototype):​
  // - apskaičiuos, kiek laisvų kambarių yra

  this.checkAvailability = function () {
    return this.rooms - this.booked;
  };

  this.countIncome = function (roomPrice) {
    return this.booked * roomPrice;
  };
}

const parkHotel = new Hotel("Harmony Park", 120, 77);

console.log(parkHotel.countIncome(69));
