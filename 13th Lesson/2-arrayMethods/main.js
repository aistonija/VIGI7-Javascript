// 2.  Remove first three elements in array and replace them with other these items: "Lets", "dance" and make one string of it:​

const arr = ["I", "study", "Javascript", "right", "now"];

console.log(arr);
// remove 3 first elements and replace them with another​

let removed = arr.splice(0, 3, "Let's", "dance");

let danceNow = arr.join(" ");

console.log(arr);
console.log(removed);
console.log(danceNow);

// 4. concat

let final = first.concat(second, "length", 7, { subject: "array methods" });

console.log(final);

// 5.

let incl = [1, 0, false];

console.log(incl.includes(false));
