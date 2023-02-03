const fs = require("fs");
let rawData = fs.readFileSync("config/input.json");
let data = JSON.parse(rawData);
console.log(data);
const out = new Array();
const alreadyAdded = new Array();
Object.entries(data).forEach((entry) => {
  const [key, value] = entry;
  value.tags.forEach((t) => {
    // console.log(t);
    if (!alreadyAdded.includes(t)) {
        const tag = {
          name: t,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        out.push(tag);
        alreadyAdded.push(t);
    }
  });
});
console.log(out);
let dataString = JSON.stringify(out);
fs.writeFileSync('config/tags.json', dataString);
