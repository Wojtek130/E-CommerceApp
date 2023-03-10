import React from "react";
import {
  LOGIN_ROUTE,
  SHOP_ROUTE,
  CART_ROUTE,
  LOGOUT_ROUTE,
  REGISTRATION_ROUTE,
  ADMIN_ROUTE,
} from "../utils/paths.util";
import { Route, Routes, Navigate } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Logout from "../pages/Logout/Logout";
import Registration from "../pages/Registration/Registration";
import Admin from "../pages/Admin/Admin";
import { loginCookieExists } from "../utils/cookies.utils";

const AppRouter = (props) => {
  return (
    <Routes>
      {!props.isLoggedIn ? (
        <Route key={LOGIN_ROUTE} path={LOGIN_ROUTE} element={<Login />} exact />
      ) : (
        <Route
          key={LOGOUT_ROUTE}
          path={LOGOUT_ROUTE}
          element={<Logout />}
          exact
        />
      )}
      <Route
        key={REGISTRATION_ROUTE}
        path={REGISTRATION_ROUTE}
        element={<Registration />}
        exact
      />
      <Route
        key={CART_ROUTE}
        path={CART_ROUTE}
        element={<Cart setCart={props.setCart} cart={props.cart} />}
        exact
      />
      <Route
        key={ADMIN_ROUTE}
        path={ADMIN_ROUTE}
        element={<Admin />}
        exact
      />
      <Route
        key={SHOP_ROUTE}
        path={SHOP_ROUTE}
        element={<Home setCart={props.setCart} />}
        exact
      />
      <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
