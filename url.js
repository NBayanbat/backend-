const url = require('url');
const address =
    'https://example.com/actor/basket.html?attraction=breath&babies=argument#300';
let urlObject = url.parse(address, true);
console.log(urlObject)
// console.log('Url host  :');
// console.log(urlObject.host);
// console.log('Url path  :');
// console.log(urlObject.pathname);
// console.log('Url search  :');
// console.log(urlObject.search);
// console.log('Url query  :');
// console.log(urlObject.query);