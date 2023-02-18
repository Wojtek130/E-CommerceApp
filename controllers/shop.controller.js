const {
  getProductWithTags,
  getTags,
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

const AllTags = async function (req, res) {
  const out = await getTags();
  res.json(out);
  return out;
};

const completeOrder = async function (req, res) {
  // orderedProducts = [{productId : 5, quantity : 3}, {productId : 6, quantity : 5}]
  try {
    const { userId, orderedProducts } = req.body;
    const fullOrderInfo = { UserId: userId };
    const fullOrder = await createFullOrder(fullOrderInfo);
    const fullOrderId = fullOrder.dataValues.id;
    for (const p of orderedProducts) {
      const singleOrderInfo = {
        productId: p.productId,
        quantity: p.productQuantity,
        FullOrderId: fullOrderId,
      };
      await createSingleOrder(singleOrderInfo);
    }
    res.status(200).send("Succefully saved the order");
  } catch (error) {
    return res.status(401).send("Some issues occured while saving the order");
  }
};

module.exports = {
  helloFun,
  AllProductsWithTags,
  completeOrder,
  AllTags,
};
