import React from "react";
import "./NavBar.component.scss";
import logo from "../assets/logo2.png";
import {
  LOGIN_ROUTE,
  SHOP_ROUTE,
  CART_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/paths.util";
import { useNavigate } from "react-router-dom";
import {deleteLoginCookie, deleteCartCookie, deleteCookie } from "../utils/cookies.utils";


function NavBar(props) {
  let navigate = useNavigate();

  const handleLogout = async (e) => {
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
    try {
      const response = await fetch("http://localhost:3001/logout", {
        method: "POST",
      });
      const result = await response.json();
      deleteLoginCookie();
      deleteCartCookie();
      deleteCookie("access-token");
      deleteCookie("cart");
      props.setisLoggedIn(false);
      alert(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <ul className="navigation">
        <img
          className="navigation__logo"
          onClick={() => navigate("/")}
          src={logo}
          alt=""
        />

        <div className="navigation__item_wrapper">
          <li className="navigation__item">
            <a className="navigation__link" href={SHOP_ROUTE}>
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href={CART_ROUTE}>
              Cart
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href={REGISTRATION_ROUTE}>
              Registration
            </a>
          </li>
          {props.isLoggedIn ? (
            <li className="navigation__item">
              <a
                className="navigation__link"
                // href={LOGIN_ROUTE}
                onClick={handleLogout}
              >
                Log out
              </a>
            </li>
          ) : (
            <li className="navigation__item">
              <a className="navigation__link" href={LOGIN_ROUTE}>
                Sign in
              </a>
            </li>
          )}
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
