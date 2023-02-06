
const ProductTypeRadio = function (props) {
  return (
    <div className="filters__form__type__checkboxlabel">
      <input type="radio" name="product_type" id={props.value} value={props.value} className="filters__form__type__radio" />
      <label htmlFor={props.value} className="filters__form__type__label">{props.value} </label>
    </div>
  );
};

export default ProductTypeRadio;