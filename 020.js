// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

const scores = 65;
let grade;
if (scores >= 80 && scores <= 100) {
  grade = "A";
} else if (scores >= 70 && scores < 90) {
  grade = "B";
} else if (scores >= 60 && scores < 70) {
  grade = "C";
} else if (scores >= 50 && scores < 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log(grade);
