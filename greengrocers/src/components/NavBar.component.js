import React from "react";
import "./NavBar.component.scss";
import logo from "../assets/logo2.png";
import { LOGIN_ROUTE, SHOP_ROUTE, CART_ROUTE } from "../utils/paths.util";
//import {NavLink} from "react-router-dom";

function NavBar() {
    const isAuth = false;
    return (
        <div>
            <ul className="navigation">
                <img className="navigation__logo" src={logo} alt="" width="110" height="100" />

                <div className="navigation__item_wrapper">
                    <li className="navigation__item">
                        <a className="navigation__link" href={SHOP_ROUTE}>Home</a>
                    </li>
                    <li className="navigation__item">
                        <a className="navigation__link" href={CART_ROUTE}>Cart</a>
                    </li>
                    {isAuth ?
                        <li className="navigation__item">
                            <a className="navigation__link" href={LOGIN_ROUTE}>Log out</a>
                        </li>
                        :
                        <li className="navigation__item">
                            <a className="navigation__link" href={LOGIN_ROUTE}>Sing in</a>
                        </li>
                    }
                </div>

            </ul>
        </div>
    );
}

export default NavBar;