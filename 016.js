// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and 
// circumference of a circle(c = 2 x pi x r) where pi = 3.14.


const radius = prompt("Enter Radius: ");
const pi = 3.14;
const areaOfACircle = pi * radius * radius;
const circumferenceOfACircle = 2 * pi * radius;

console.log(`Area of a Circle = ${areaOfACircle}`);
console.log(`Cirumference of a Circle = ${circumferenceOfACircle}`);