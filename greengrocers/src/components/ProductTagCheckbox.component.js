const ProductTagsCheckbox = function (props) {
  const handleChange = (e) => {
    // props.setTags
    // e.preventDefault();
    // console.log(e.target.value);
    // console.log(e.target.checked);
    // console.log(e.target.checked);
    const popValue = function (item, array) {
      var index = array.indexOf(item);
      if (index !== -1) {
        array.splice(index, 1);
      }
      return array;
    };
    if (e.target.checked) {
      props.setTags((oldArray) => [...oldArray, e.target.value]);
    } else {
      props.setTags((oldArray) =>
        popValue(e.target.value, [...oldArray])
      );
    }
  };

  return (
    <div className="filters__form__tags__radiolabel">
      {/* <> */}
      <input
        type="checkbox"
        name="product_tags"
        id={props.value}
        value={props.value}
        className="filters__form__tags__radio"
        onClick={handleChange}
      />
      <label htmlFor={props.value} className="filters__form__tags__label">
        {props.value}{" "}
      </label>
      {/* </> */}
    </div>
  );
};

export default ProductTagsCheckbox;
