import React from "react";
import Filters from "../../components/Filters.component";
import MainHeader from "../../components/MainHeader.component";
import Gallery from "../../components/Gallery.component";
import "./Home.scss";
import {useState} from "react";


const Home = () => {
  const [type, setType] = useState("all");
  const [tags, setTags] = useState([]);
  const [name, setName] = useState("");
  console.log(tags, "home");
  return (
    // <div className="brand">
    //     Home
    // </div>
    <>
      <MainHeader />
      <Filters setType={setType} setTags={setTags} setName={setName} />
      <Gallery type={type} tags={tags} name={name} />
    </>
  );
};

export default Home;
