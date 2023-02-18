import React from "react";
import delete_icon from "../assets/delete.png";
import { useState } from "react";
import {
  appendToCookie,
  getSetCookie,
  setCookieValue,
} from "../utils/cookies.utils";

const CartComponent = (props) => {
  const path = props.path;
  const deleteClick = props.deleteClick;
  const name = props.name;
  const price = Number(props.price);
  const weight = Number(props.weight);
  const id = Number(props.id);
  const [fullprice, setFullprice] = useState(price * weight);
  const changePrice = async function (event) {
    if (!event.target.value) {
      return;
    }
    let val = Math.round(event.target.value * price * 100) / 100;
    setFullprice(val);
    let cart = await getSetCookie("cart");
    const ind = cart.findIndex((obj) => obj.productId === props.id);
    cart[ind].productQuantity = event.target.value;
    await setCookieValue("cart", cart);
    props.setCartChanged((prev) => !prev);
  };
  return (
    <tr>
      <td>
        <img
          className="cart__delete"
          onClick={() => deleteClick(id)}
          src={delete_icon}
        ></img>
      </td>
      <td className="cart__photo">
        <img className="product_photo" src={path}></img>
      </td>
      <td className="cart__product">{name}</td>
      <td className="cart__price">{price}</td>
      <td className="cart__weight">
        <input
          className="cart__weight__input"
          id={props.productId}
          onChange={changePrice}
          type="number"
          defaultValue={weight}
          min="0.1"
          step="0.1"
        ></input>
      </td>
      <td className="cart__fullprice">{fullprice}</td>
    </tr>
  );
};

export default CartComponent;
