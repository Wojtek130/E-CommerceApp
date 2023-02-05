const ProductTagsCheckbox = function (props) {
  return (
    <>
      <input
        type="checkbox"
        name="product_tags"
        id={props.value}
        value={props.value}
        className="filter__form__tags__radio"
      />
      <label for={props.value} className="filter__form__tags__label">
        {props.value}{" "}
      </label>
    </>
  );
};

export default ProductTagsCheckbox;
