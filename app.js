// let initialMemory = process.memoryUsage().heapUsed;
// let word = null;
// console.log(`ur word : ${word}`)
// let wordArray = [];
// for (i = 0; i < 100; i++) {
//     wordArray.push(`${word} count : ${i}`)
// }
// console.log(`s:${initialMemory}.
// a:${process.memoryUsage().heapUsed}.
// c:${process.memoryUsage().heapUsed - initialMemory}`)
let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2]
console.log(`ur word : ${word}`)
let wordArray = [];
for (i = 0; i < 100; i++) {
    wordArray.push(`${word} count : ${i}`)
}
console.log(`s:${initialMemory}.
a:${process.memoryUsage().heapUsed}.
c:${process.memoryUsage().heapUsed - initialMemory}`)