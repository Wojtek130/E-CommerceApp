import ProductTypeRadio from "./ProductTypeRadio.component";

const ProductType = function (props) {

  return (
    <div className="filters__form__type">
      <ProductTypeRadio setType={props.setType} value="all" />
      <ProductTypeRadio setType={props.setType} value="fruit" />
      <ProductTypeRadio setType={props.setType} value="vegetable" />
    </div>
  );
};

export default ProductType;
