import React from "react";
import "./NavBar.component.scss";
import logo from "../assets/logo2.png";
import { LOGIN_ROUTE, SHOP_ROUTE, CART_ROUTE, REGISTRATION_ROUTE } from "../utils/paths.util";
import { useNavigate } from "react-router-dom";


function NavBar() {
    const isLoggedIn = false;
    let navigate = useNavigate();
return (
    <div>
        <ul className="navigation">
            <img className="navigation__logo" onClick={() => navigate("/")} src={logo} alt="" width="110" height="100" />

            <div className="navigation__item_wrapper">
                <li className="navigation__item">
                    <a className="navigation__link" href={SHOP_ROUTE}>Home</a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href={CART_ROUTE}>Cart</a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href={REGISTRATION_ROUTE}>Registration</a>
                </li>
                {isLoggedIn ?
                    <li className="navigation__item">
                        <a className="navigation__link" href={LOGIN_ROUTE}>Log out</a>
                    </li>
                    :
                    <li className="navigation__item">
                        <a className="navigation__link" href={LOGIN_ROUTE}>Sign in</a>
                    </li>
                }
            </div>

        </ul>
    </div>
);
}

export default NavBar;