import "./Product.component.scss";

const Product = function (props) {
  return (
    <div className="product">
      <div className="product__side product__side--front">
        <img
          className="product__picture"
          alt = "product"
          src={require(`../assets/${props.photoPath}`)}
        ></img>
        <h4 className="product__heading">Apple</h4>
      </div>
      <div className="product__side product__side--back">
        <div className="product__cta">
          <div className="product__price-box">
            <form>
              <p className="product__price-only">Only</p>
              <p className="product__price-value">$155</p>
              <label className="product__weight" for="weight">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
