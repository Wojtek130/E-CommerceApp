import ProductTypeRadio from "./ProductTypeRadio.component";

const ProductType = function (props) {
  return (
    <div className="filters__form__type">
      <ProductTypeRadio value="all" />
      <ProductTypeRadio value="fruit" />
      <ProductTypeRadio value="vegetable" />
    </div>
  );
};

export default ProductType;
