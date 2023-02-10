import React from "react";
import "./Cart.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartComponent from "../../components/Cart.component";
import {
  appendToCookie,
  getSetCookie,
  setCookieValue,
  loginCookieExists,
  deleteCartCookie,
  getCookie,
} from "../../utils/cookies.utils";

const Cart = (props) => {
  const navigate = useNavigate();
  const [cartProductsComp, setCartProductsComp] = useState([]);
  const [cartChanged, setCartChanged] = useState(false);

  const path = "../../assets/";

  const deleteClick = async function (id) {
    let cart = await getSetCookie("cart");
    const ind = await cart.findIndex((obj) => obj.productId == id);
    cart.splice(ind, 1);
    setCookieValue("cart", cart);
    setCartChanged((prev) => !prev);
  };

  const order = async function () {
    if (loginCookieExists()) {
      const c = await getCookie("cart");
      console.log(c, typeof c, "kfkfkkfkf");
      const cConv = await JSON.parse(c);
      const order = new Array();
      cConv.forEach((e) => {
        console.log(e.productId, "idik", e.productQuantity, "qua");
        const p = {
          productId: e.productId,
          productQuantity: e.productQuantity,
        };
        console.log(p, "importante");
        order.push(p);
      });
      console.log(order, "aaaaaaaaaaaaaaaaaa");
      try {
        const response = await fetch("http://localhost:3001/completeOrder", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            orderedProducts: order,
            token: getCookie("access-token"),
          }),
        });
        deleteCartCookie();
        alert("The order successfully saved");
        navigate("/");
      } catch (error) {}
    } else {
      navigate("/login");
    }
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
