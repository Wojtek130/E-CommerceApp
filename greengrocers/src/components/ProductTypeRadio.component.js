
const ProductTypeRadio = function (props) {
  const handleChange = e => {
    console.log(e.target.value);
    props.setType(e.target.value)

  };

  return (
    <div className="filters__form__type__checkboxlabel">
      <input type="radio" name="product_type" id={props.value} value={props.value} className="filters__form__type__radio" onChange={handleChange} />
      <label htmlFor={props.value} className="filters__form__type__label">{props.value} </label>
    </div>
  );
};

export default ProductTypeRadio;