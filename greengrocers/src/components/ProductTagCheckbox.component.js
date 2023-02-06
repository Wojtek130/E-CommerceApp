const ProductTagsCheckbox = function (props) {
  return (
    <div className="filters__form__tags__radiolabel">
      {/* <> */}
      <input
        type="checkbox"
        name="product_tags"
        id={props.value}
        value={props.value}
        className="filters__form__tags__radio"
      />
      <label for={props.value} className="filters__form__tags__label">
        {props.value}{" "}
      </label>
      {/* </> */}
    </div>
  );
};

export default ProductTagsCheckbox;
