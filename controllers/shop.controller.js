const {
  getProductWithTags,
  createSingleOrder,
} = require("../services/shop.service");

const helloFun = function (req, res) {
  res.json({ message: "Hello everybody :) :) :)" });
};

const AllProductsWithTags = async function (req, res) {
  const out = await getProductWithTags();
  res.json(out);
};

const completeOrder = async function (req, res) {
  const { userId, orderedProducts } = req.body;
  const fullOrderInfo = { userId: userId };
  const fullOrder = await createFullOrder(fullOrderInfo);
  const fullOrderId = fullOrder.dataValues.id;
  for (const p of orderedProducts) {
    const singleOrderInfo = {
      productId: p.productId,
      quantity: p.quantity,
      fullOrderId: fullOrderId,
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
