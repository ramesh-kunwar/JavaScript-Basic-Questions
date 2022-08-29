// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

// 17. Create a human readable time format using the Date time object
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const dayDate = date.getDate();
const hours = date.getHours();
const minuetes = date.getMinutes();
//     - YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${dayDate} ${hours}:${minuetes}`);
//     - DD-MM-YYYY HH:mm
console.log(`${dayDate}-${month}-${year} ${hours}:${minuetes}`);


