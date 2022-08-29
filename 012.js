// 12. Use the Date object to do the following activities
// - What is the year today?
// - What is the month today as a number?
// - What is the date today?
// - What is the day today as a number?
// - What is the hours now?
// - What is the minutes now?
// - Find out the numbers of seconds elapsed from January 1, 1970 to now.

// YEAR
const date = new Date();
console.log(`year ${date.getFullYear()}`);

// MONTH TODAY AS NUMBER
const monthAsNumber = date.getMonth();
console.log(`Month = ${monthAsNumber}`);

// DATE TODAY
console.log(`Date = ${date.getDate()}`);

// - What is the day today as a number?
console.log(`Day = ${date.getDay()}`);
// - What is the hours now?
console.log(`Hours = ${date.getHours()}`);
// - What is the minutes now?
console.log(`Minuetes = ${date.getMinutes()}`);

// - Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log();
const prevDate = new Date("January 1, 1970");
const currentDate = new Date();
// year ?
let elapsedYear = currentDate.getFullYear() - prevDate.getFullYear();
console.log(`elapsedYear = ${elapsedYear}`);
//  months ?
let elapsedMonth = currentDate.getMonth() - prevDate.getMonth();
console.log(`elapsedMonth = ${elapsedMonth}`);
// days ?
let elapsedDays 

if(currentDate.getDate() >= prevDate.getDate()){
    elapsedDays = currentDate.getDay() - prevDate.getDay()
}else if(prevDate.getDate() > currentDate.getDate()){
    elapsedDays = prevDate.getDay() - currentDate.getDay()
}
console.log(`elapsedDays = ${elapsedDays}`);
console.log();
// const resultYear = elapsedYear * 365 * 24 * 60 * 60;
// console.log(`resultYear ${resultYear}`);
// const resultMonth = elapsedMonth * 30 * 24 * 60 * 60;
// console.log(`resultMonth = ${resultMonth}`);
// const resultDay = elapsedDays * 24 * 60 * 60;
// console.log(`resultDay = ${resultDay}`);
