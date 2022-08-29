// 29. Use for loop to iterate from 0 to 100 and
// print the sum of all evens and the sum of all odds.

let sumOdd = 0,
  sumEven = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}
console.log(`Sum Of Even Numbers = ${sumEven}`);
console.log(`Sum Of Odd Numbers = ${sumOdd}`);
