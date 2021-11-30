// * - create object, which has such properties:
// name: string value,
// toysArray: array of 3-4 values ['value', 'value', 'value'],
// yearsOld: number value,
// birthday: boolean,
// totalToys: null
// friends: array of three friends (objects), their names, and what they are doing at the moment

let data = {
  name: "Teddy",
  hasToys: ["teddy bear", "ball", "rc car", "soldier"],
  yearsOld: 12,
  birthDay: true,
  totalToys: null,
  friends: [
    {
      name: "Susana",
      activity: "at grandparents",
    },
    {
      name: "Tomy",
      activity: "baking cookies",
    },
    {
      name: "Brad",
      activity: "playing football",
    },
  ],
};

// check if Jerry is having his birthday if yes do things:
// remove teddy bear from hasToys array
// add "ps4" to end of hasToys array
// increment yearsOld by one
// make totalToys key to always show length of hasToys array
// log each of Jerry friends

// check if Jerry is having his birthday if yes do things:
if (data.birthDay) {
  // remove teddy bear from hasToys array
  data.hasToys.shift();

  // add "ps4" to end of hasToys array
  data.hasToys.push("ps4");

  // increment yearsOld by one
  data.yearsOld++;

  // make totalToys key to always show length of hasToys array
  data.totalToys = data.hasToys.length;

  // log Jerry's friends
  console.log(data.friends);
}

console.log(data);
