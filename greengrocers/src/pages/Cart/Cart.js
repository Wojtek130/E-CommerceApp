import React from "react";
import "./Cart.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartComponent from "../../components/Cart.component";
import {
  appendToCookie,
  getSetCookie,
  setCookieValue,
} from "../../utils/cookies.utils";

const Cart = (props) => {
  const navigate = useNavigate();
  const [cartProductsComp, setCartProductsComp] = useState([]);
  const [cartChanged, setCartChanged] = useState(false);

  const path = "../../assets/";
  const json = [
    {
      productId: "5",
      productName: "asparagus",
      productQuantity: "3",
      productPath: "asparagus.jpg",
      productPrice: "2",
    },
    {
      productId: "6",
      productName: "pineapple",
      productQuantity: "2",
      productPath: "pineapple.jpg",
      productPrice: "7",
    },
  ];

  const deleteClick = async function (id) {
    let cart = await getSetCookie("cart");
    const ind = await cart.findIndex((obj) => obj.productId == id);
    cart.splice(ind, 1);
    setCookieValue("cart", cart);
    setCartChanged((prev) => !prev);
  };

  const order = function () {
    alert("Successful order!");
    navigate("/login");
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSetCookie("cart");
      console.log("hah");
      setCartProductsComp(
        await data.map((p) => {
          return (
            <CartComponent
              key={p.productId}
              id={p.productId}
              path={path + p.productPath}
              name={p.productName}
              deleteClick={deleteClick}
              price={p.productPrice}
              weight={p.productQuantity}
              setCartChanged={setCartChanged}
            />
          );
        })
      );
    };
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [cartChanged]);

  return (
    <div className="cart__wrapper">
      <table className="cart">
        <thead>
          <tr>
            <th className="cart__delete"></th>
            <th className="cart__photocolum"></th>
            <th className="cart__productcolum">Product</th>
            <th className="cart__pricecolumn">Price</th>
            <th className="cart__weightcolumn">Weight</th>
            <th className="cart__fullpricecolum">Full price</th>
          </tr>
        </thead>
        <tbody>{cartProductsComp}</tbody>
      </table>
      {/* <p>{prc}</p> */}
      <button className="btn order" onClick={order}>
        ORDER
      </button>
    </div>
  );
};

export default Cart;
