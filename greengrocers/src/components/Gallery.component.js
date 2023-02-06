import "./Gallery.component.scss";
import Product from "./Product.component";
import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [pictures, setPictures] = useState([]);

  const files = [
    "asparagus.jpg",
    "avocado.jpg",
    "banana.jpg",
    "beets.jpg",
    "bell_pepper.jpg",
    "blackberry.jpg",
    "blueberry.jpg",
    "broccoli.jpg",
    "brussel_sprouts.jpg",
    "cabbage.jpg",
    "carrot.jpg",
    "cauliflower.jpg",
    "celery.jpg",
    "cherry.jpg",
    "coconut.jpg",
    "dragon_fruit.jpg",
    "durian.jpg",
    "garlic.jpg",
    "grapefruit.jpg",
    "green_peas.jpg",
    "guava.jpg",
    "lemon.jpg",
    "lime.jpg",
    "mango.jpg",
    "onion.jpg",
    "orange.jpg",
    "pineapple.jpg",
    "potato.jpg",
    "soy_beans.jpg",
    "spinach.jpg",
    "strawberry.jpg",
    "sweet_potato.jpg",
    "tomato.jpg",
  ];
  useEffect(() => {
    // setPictures(files);
    setPictures(files.map((f) => <Product photoPath={f} key={f} />));
  }, []);
  // useEffect(() => {
  //   console.log("ready");
  // }, []);
  return (
    <section className="gallery">
      {pictures}
      <Product photoPath="banana.jpg" />
      <Product photoPath="onion.jpg" />
    </section>
  );
};

export default Gallery;
