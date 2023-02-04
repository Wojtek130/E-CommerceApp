const { getProductWithTags } = require("../services/shop.service");

const helloFun = function (req, res) {
  res.json({ message: "Hello everybody :) :) :)" });
};

const AllProductsWithTags = async function (req, res) {
  const out = await getProductWithTags();
  res.json(out);
};

module.exports = {
  helloFun,
  AllProductsWithTags,
};
