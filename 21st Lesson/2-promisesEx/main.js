// retrieve all dogs using setTimeout

const dogs = [
  {
    name: "Shiba",
    breed: "Akita",
  },
  {
    name: "Bourn",
    breed: "American Pit Bull Terrier",
  },
];

// synchronous problem
// since addDog function will be released later than getDogs, it will never appear in the list

function addDog(dog) {
  setTimeout(() => {
    dogs.push(dog);
  }, 2000);
}

function getDogs() {
  setTimeout(() => {
    let output = "";

    dogs.forEach((dog) => {
      output += `<li><b>${dog.name}</b> - ${dog.breed}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

addDog({ name: "Vincas", breed: "German Shepherd" });

getDogs();

// SOLUTION WITH PROMISES - IT WILL WAIT FOR THE NEW DOG TO BE ADDED AND THEN WILL GET ALL

// function addDog(dog) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       dogs.push(dog);

//       let error = false;

//       if (error) {
//         reject("Error: Something went wrong");
//       } else {
//         resolve();
//       }
//     }, 2000);
//   });
// }

// function getDogs() {
//   setTimeout(() => {
//     let output = "";

//     dogs.forEach((dog) => {
//       output += `<li><b>${dog.name}</b> - ${dog.breed}</li>`;
//     });

//     document.querySelector("ul").innerHTML = output;
//   }, 1000);
// }

// const newDog = { name: "Zigmukas", breed: "Australian Shepherd" };

// addDog(newDog)
//   .then(getDogs)
//   .catch((error) => console.log(error));
