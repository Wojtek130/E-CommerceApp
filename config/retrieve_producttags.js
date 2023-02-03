const fs = require("fs");
let rawData = fs.readFileSync("config/input.json");
let data = JSON.parse(rawData);
console.log(data);
tagMap = new Map();
tagMap.set("citrus", 2);
tagMap.set("seasonal", 3);
tagMap.set("berries", 4);
tagMap.set("exotic", 5);
tagMap.set("beans", 6);

const out = new Array();
Object.entries(data).forEach((entry, ind) => {
  const [key, value] = entry;
  console.log(value);
  value.tags.forEach((t) => {
      const pt = {
        ProductId: ind+2,
        TagId: tagMap.get(t),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      out.push(pt);
    
  });
});
let dataString = JSON.stringify(out);
fs.writeFileSync("config/producttags.json", dataString);
