import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter.component";
import NavBar from "./components/NavBar.component";
import { useEffect, useState } from "react";
import { getSetCookie, loginCookieExists, setCookie, deleteCookie, getCookie } from "./utils/cookies.utils";

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(loginCookieExists("access-token"));
  const [cart, setCart] = useState([]);
  deleteCookie("k");

  // console.log(getCookie("access-token"), "!!!!!!");
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>{!data ? "Loading..." : data}</p>
  //     </header>
  //   </div>
  // );
  // return <div>Hello2</div>;
  return (
    <BrowserRouter>
      <NavBar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
      <AppRouter cart={cart} isLoggedIn={isLoggedIn} setCart={setCart} />
    </BrowserRouter>
  );
};

export default App;
