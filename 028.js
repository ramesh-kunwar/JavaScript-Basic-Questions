// 28. Use for loop to iterate from 0 to 100 and print only prime numbers

// let num = 11;
let result = false;
for (let num = 0; num <= 100; num++) {
  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  if (result) {
    console.log(`Prime = ${num}`);
  }
}
