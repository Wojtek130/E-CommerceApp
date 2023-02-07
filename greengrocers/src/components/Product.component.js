import "./Product.component.scss";
import { appendToCookie, getSetCookie } from "../utils/cookies.utils";
import Cookies from "js-cookie";

const Product = function (props) {
  const handleAddToCart = async function (e) {
    e.preventDefault();
    const currentProduct = {
      productId: props.productId,
      productName: props.productName,
      productQuantity: props.productPrice,
      productPath: props.productPath,
      productPrice: props.productPrice,
    };
    props.setCart((prevCart) => [...prevCart, currentProduct]);
    await appendToCookie("cart", currentProduct);
    console.log(Cookies.get("cart"), "aaaa");
  };
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
            // min=".1"
            // max="100"
            className="product__weightinput"
          ></input>
          <input
            type="submit"
            value="Add to cart"
            className="btn btn--white product__submit"
            onClick={handleAddToCart}
          />
        </form>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Product;
