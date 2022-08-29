// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

// AGES
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
// MAXIMUM AND MINIMUM
const maxAge = Math.max.apply(null, ages);
const minAge = Math.min.apply(null, ages);
console.log(`maxAge = ${maxAge}`);
console.log(`minAge = ${minAge}`);

//  - Find the median age(one middle item or two middle items divided by two)

//     - Find the average age(all items divided by number of items)
const ageLength = ages.length;
let sum = 0,
  average = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

average = sum / ageLength;
console.log(`average = ${average}`);

//     - Find the range of the ages(max minus min)
let range = maxAge - minAge;
console.log(`Range = ${range}`);

//     - Compare the value of (min - average) and (max - average), use abs() method
if (Math.abs(minAge - average === maxAge - average)) {
  console.log(`Min and Max are equal`);
} else {
  console.log("Min and Max are not equal");
}
