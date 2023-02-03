const fs = require('fs');
let rawData = fs.readFileSync('config/input.json');
let data = JSON.parse(rawData);
console.log(data);
const out = new Array();
Object.entries(data).forEach(entry => {
    const [key, value] = entry;
    console.log(value);
    const p = {
        name : key,
        price : value.price,
        isFruit : value.isFruit,
        photoPath : value.path,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    out.push(p);
  });
let dataString = JSON.stringify(out);
fs.writeFileSync('config/products.json', dataString);

