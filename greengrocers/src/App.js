import React from "react";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter.component";
import NavBar from "./components/NavBar.component";
//import { observer } from "mobx-react-lite"
//import "./App.css";

const App = () => {
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
  return (
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
  );
};

export default App;