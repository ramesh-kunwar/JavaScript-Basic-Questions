// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

const month = "June";
let season;
if (month === "September" || month === "October" || month === "November") {
  season = "Autumn";
} else if (
  month === "December" ||
  month === "January" ||
  month === "February"
) {
  season = "Winter";
} else {
  season = "Summer";
}

console.log(season);
