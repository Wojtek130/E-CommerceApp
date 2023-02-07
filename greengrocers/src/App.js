import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter.component";
import NavBar from "./components/NavBar.component";
import { useEffect, useState } from "react";

//import { observer } from "mobx-react-lite"
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  
  console.log(getCookie("access-token"), "!!!!!!");
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
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
