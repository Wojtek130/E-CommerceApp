const fs = require('fs');
let rawData = fs.readFileSync('config/products.json');
let data = JSON.parse(rawData);
console.log(data);
data.forEach(element => {
    // console.log(element);
});