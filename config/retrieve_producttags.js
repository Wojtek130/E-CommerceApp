const fs = require("fs");
const { getTags, getProductIdForName } = require("../services/shop.service");

(async () => {
  let rawData = fs.readFileSync("config/input.json");
  let data = JSON.parse(rawData);
  tagMap = new Map();
  const tgs = await getTags();
  tgs.forEach((t) => {
    tagMap.set(t["name"], t["id"]);
  });

  const out = new Array();
  for (const entry of Object.entries(data)) {
    const [key, value] = entry;
    // console.log(key);
    let pt;
    for (const t of value.tags) {
      pt = {
        ProductId: await getProductIdForName(key),
        TagId: await tagMap.get(t),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      out.push(pt);
      console.log("???", pt);
    }
  }
  console.log(out);
  let dataString = JSON.stringify(out);
  fs.writeFileSync("config/producttags.json", dataString);
})();
