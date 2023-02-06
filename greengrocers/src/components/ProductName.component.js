const ProductName = function (props) {
  const handleChange = function (e) {
    props.setName(e.target.value);
  };
  return (
    <div className="filters__form__name">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter product's name..."
        className="filters__form__name__search"
      ></input>
    </div>
  );
};

export default ProductName;
