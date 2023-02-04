// const {Product, ProductTag} = require("../models");
const db = require("../models");
const Product = db.Product;
const Tag = db.Tag;
const ProductTag = db.ProductTag;
const FullOrder = db.FullOrder;
const SingleOrder = db.SingleOrder;

const getProductWithTags = async function () {
  const products = await Product.findAll({
    attributes: ["id", "name", "price", "isFruit"],
    include: { model: Tag, required: true },
  });
  const out = new Array();
  products.forEach((p) => {
    const id = p["dataValues"]["id"];
    const name = p["dataValues"]["name"];
    const price = p["dataValues"]["price"];
    const isFruit = p["dataValues"]["isFruit"];
    const tags = Array();

    p["Tags"].forEach((element) => {
      tags.push(element["dataValues"]["name"]);
    });
    const prod = { id: id, name: name, isFruit: isFruit, tags: tags };
    out.push(prod);
  });
  return out;
};

const getTags = async function () {
  const tags = await Tag.findAll({
    attributes: ["id", "name"],
  });
  const out = new Array();
  tags.forEach((t) => {
    out.push(t["dataValues"]);
  });
  return out;
  // console.log(tags);
};

const getProductIdForName = async function (nameArg) {
  const out = await Product.findOne({
    attributes: ["id", "name"],
    where: {
      name: nameArg
    } 
  });
  return out["dataValues"]["id"];
};


module.exports = {
  getProductWithTags,
  getTags,
  getProductIdForName,
};
