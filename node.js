var a = 10 + 10;
console.log(a)
console.log("hello world")
var b = 365 * 24 * 60 * 60;
console.log(Intl.NumberFormat().format(b))

const dateOne = new Date();
const dateTwo = new Date("2022-12-31");
var diffDays = parseInt((dateTwo - dateOne) / (1000 * 60 * 60 * 24), 10)
console.log(diffDays)
