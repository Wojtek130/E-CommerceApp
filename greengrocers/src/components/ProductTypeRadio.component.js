
const ProductTypeRadio = function (props) {
  return (
    <>
      <input type="radio" name="product_type" id={props.value} value={props.value} className="filters__form__type__radio" />
      <label for={props.value} className="filters__form__type__label">{props.value} </label>
    </>
  );
};

export default ProductTypeRadio;