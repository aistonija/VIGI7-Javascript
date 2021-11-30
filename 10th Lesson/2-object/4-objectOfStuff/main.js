let weirdObject = {
  numbers: [25, 87, 684, 2874, 687, 28, 68],
  words: ["first", "second", "third", "fourth"],
  objects: [{ one: "EMPTY" }, { two: "replace to milk", three: "full" }],
  arrays: [[[[[[[[84, 85, 257, 577, "word", "small", "BIG"]]]]]]]],
};

// 1. log skaičių 2874 is numbers masyvo

// console.log(weirdObject.numbers[3]);

// 2. log pirmo ir paskutinio skaiciaus suma is numbers masyvo (paskutini skaiciu paimant su objekto length savybe)

// console.log(weirdObject.numbers[0]);
// console.log(weirdObject.numbers[weirdObject.numbers.length - 1]);
// console.log(
//   weirdObject.numbers[0] + weirdObject.numbers[weirdObject.numbers.length - 1]
// );

// 3. log sakini, kur reiksmes riestiniuose skliaustuose bus paimtos is objekto

// Room No.{28} is {EMPTY}, however our hotel tonight is {full}

// console.log(
//   `Room No. ${weirdObject.numbers[1]} is ${weirdObject.objects[0].one}, however our hotel tonight is ${weirdObject.objects[1].three}`
// );

// 4. zodi 'BIG' pakeiskite 'not so big' stringu, nekeisdami originalaus objekto

// weirdObject.arrays[0][0][0][0][0][0][0][6] = "not so big";

// console.log(weirdObject.arrays[0][0][0][0][0][0][0][6]);
