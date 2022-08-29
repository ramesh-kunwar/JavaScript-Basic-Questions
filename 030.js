// 30. Write a script which generates a random hexadecimal number.

const hex = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
console.log(hex);
