// 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
//  Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

// FIND BMI

// CHECK IF  USER IS >= 20 OR NOT
let userAge = prompt("Enter your age: ");
let userWeightInKg = prompt("Enter weight in Kg: ");
let userHeightInM = prompt("Enter Height in meter: ");

const findBmi = () => {
  console.log("bmi found");
  // FIND  BMI
  //  BMI = WEIGHT IN KG / (HEIGHT * HEIGHT) ---> FIND HEIGHT IN M2
  let bmi = userWeightInKg / (userHeightInM * userHeightInM);
  console.log(`BMI = ${bmi}`);

  if (bmi < 18.5) {
    console.log("You are under weight.");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("you are normal");
  } else if (bmi >= 25 && bmi <= 29.5) {
    console.log("you are under weight");
  } else {
    console.log("you are obse");
  }
};
if (userAge >= 20) {
  findBmi();
} else {
  console.log("You are underage to calculate bmi");
}
