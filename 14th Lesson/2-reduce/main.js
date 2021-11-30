// theory

const arr = [1, 19, 2, 3, 4, 5, 6];

const sum = arr.reduce((accumulator, currentValue, index, array) => {
  console.log(
    `iteration No. ${index}, totalValue: ${accumulator}, next one: ${currentValue}`
  );
  return accumulator + currentValue;
}, 0); // < second parameter, initial value

console.log(sum);

// transactions

const transactions = [40, 900, -50, -40, 65, 1300, -78, -90, 72, -300, -1, -99];

// 1. Current Balance

const currentBalance = transactions.reduce((acc, cur) => acc + cur);
console.log(currentBalance);

// 2. Kiek kartų buvo pridėta ir kokia suma

let depositCounter = 0;

const depositSum = transactions
  .filter((value) => {
    if (value > 0) {
      depositCounter++;
      return value;
    }
  })
  .reduce((acc, cur) => acc + cur);

// 3. kiek kartu buvo nuimta ir kokia bendra suma

let withdrawCounter = 0;

const withdrawSum = transactions
  .filter((value) => {
    if (value < 0) {
      withdrawCounter++;
      return value;
    }
  })
  .map((value) => Math.abs(value))
  .reduce((acc, cur) => acc + cur);

console.log("inestu pinigu suma:", depositSum);
console.log("nuimtu pinigu suma:", withdrawSum);
console.log("kiek kartu ideta:", depositCounter);
console.log("kiek kartu nuimta:", withdrawCounter);

// 4. kokia didziausia prideta suma
const maxDeposit = transactions
  .filter((value) => value > 0)
  .reduce((acc, cur) => {
    console.log(`accumulator Now: ${acc}, and next value is: ${cur}`);
    if (acc > cur) {
      return acc;
    } else {
      return cur;
    }
  });
console.log("didiausia inesta suma: ", maxDeposit);

// 5. kokia maziausia nuimta suma

const minWithdraw = transactions
  .filter((value) => value < 0)
  .reduce((acc, cur) => (acc < cur ? cur : acc));

console.log("maziausia nuimta suma:", minWithdraw);

// 6. koks inasu vidurkis, suapvalintas zemyn

const depositsOnly = transactions.filter((value) => value > 0);

console.log(depositsOnly);

const depAvg = Math.floor(
  depositsOnly.reduce((sum, x) => sum + x) / depositsOnly.length
);

console.log(depAvg);

// 7. koks nuimtu pinigu vidurkis suapvalintas zemyn

const withdrawalsOnly = transactions
  .filter((value) => value < 0)
  .map((value) => Math.abs(value));

console.log(withdrawalsOnly);

const withdrawAvg = Math.floor(
  withdrawalsOnly.reduce((sum, x) => sum + x / withdrawalsOnly.length)
);

console.log(withdrawAvg);
