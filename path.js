const fs = require("fs")
// fs.rename("/Users/lab_1_10/desktop/zda", '/Users/lab_1_10/desktop/hooya', err => {
//     if (err) {
//         console.log(err)
//     }
// })
fs.rmdir('/Users/lab_1_10/desktop/hooya', { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
    console.log('suckit')
})