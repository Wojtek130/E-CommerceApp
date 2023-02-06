import React from "react";
import Filters from "../../components/Filters.component";
import MainHeader from "../../components/MainHeader.component";
import Gallery from "../../components/Gallery.component";
import "./Home.scss";

const Home = () => {
  return (
    // <div className="brand">
    //     Home
    // </div>
    <>
      <MainHeader />
      <Filters />
    <div className="home_wrapper">
      <Gallery />
    </div>
    </>
  );
};

export default Home;
