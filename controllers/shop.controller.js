const {
  getProductWithTags,
  createSingleOrder,
  createFullOrder,
} = require("../services/shop.service");

const helloFun = function (req, res) {
  res.json({ message: "Hello everybody :) :) :)" });
};

const AllProductsWithTags = async function (req, res) {
  const out = await getProductWithTags();
  res.json(out);
};

const completeOrder = async function (req, res) {
  // orderedProducts = [{productId : 5, quantity : 3}, {productId : 6, quantity : 5}]
  const { userId, orderedProducts } = req.body;
  const fullOrderInfo = { UserId: userId };
  const fullOrder = await createFullOrder(fullOrderInfo);
  const fullOrderId = fullOrder.dataValues.id;
  console.log(fullOrder.dataValues);
  for (const p of orderedProducts) {
    const singleOrderInfo = {
      productId: p.productId,
      quantity: p.quantity,
      FullOrderId: fullOrderId,
    };
    await createSingleOrder(singleOrderInfo);
  }
  res.status(200).send("Succefully saved the order");
};

module.exports = {
  helloFun,
  AllProductsWithTags,
  completeOrder,
};
