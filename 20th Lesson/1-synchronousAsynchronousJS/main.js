// https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/

// callstack
// example 1

// function f1() {
//   console.log("f1");
// }
// function f2() {
//   setTimeout(() => {
//     console.log("asynchronous f2");
//   }, 2000);
//   console.log("f2");
// }
// function f3() {
//   console.log("f3");
// }

// f1();
// f2();
// f3();

// issikviecia f1
// issikviecia f2, kur alertas turetu atsirasti maziausiai po 2 sekundziu
// jis nesustabdo eigos, todel iskarto iskviecia f2 console
// issikviecia f3
// suveikia f2 async

// ----------------------------------

// example 2
// change places

// function f1() {
//   console.log("f1");
// }
// function f2() {
//   f1();
//   console.log("f2");
// }

// function f3() {
//   console.log("f3");
//   f2();
// }

// f3();

// ----------------------------------

// example 3
function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function main() {
  console.log("main");

  setTimeout(f1, 0);

  f2();
}

main();
