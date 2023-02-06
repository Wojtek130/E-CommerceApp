import "./Product.component.scss";

const Product = function (props) {
  return (
    <div className="product">
      <div className="product__side product__side--front">
        <img
          className="product__picture"
          alt="product"
          src={`../../assets/${props.productPath}`}
        ></img>
        <h4 className="product__heading">{props.productName}</h4>
      </div>
      <div className="product__side product__side--back">
        <form className="product__backform">
          <p className="product__price-value">${props.productPrice}</p>
          <label className="product__weight" htmlFor="weight">
            Weight:
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            min=".1"
            max="100"
            className="product__weightinput"
          ></input>
          <input
            type="submit"
            value="Add to cart"
            className="btn btn--white product__submit"
          />
        </form>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Product;
