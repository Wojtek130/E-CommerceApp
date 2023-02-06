import "./Gallery.component.scss";
import Product from "./Product.component";
import React, { useEffect, useState } from "react";

const Gallery = (props) => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3001/products");
      const json = await data.json();
      setPictures(
        await json.map((productObj) => {
          const productName = productObj["name"];
          const productId = productObj["id"];
          const productPrice = productObj["price"];
          let productPath = productObj["photoPath"];
          const productTags = productObj["tags"];
          const isFruit = productObj["isFruit"];
          const type = isFruit ? "fruit" : "vegetable";
          if (props.type !== "all" && props.type !== type) {
            return<></>;
          }
          if (props.name && !productName.startsWith(props.name))  {
            return<></>;
          }
          // console.log(props.tags);
          let matchingTag = false;
          if (props.tags.length > 0) {
            // console.log("si");
            productTags.forEach(t => {
              if (props.tags.includes(t)) {
                matchingTag = true;
              }
            });
            if (!matchingTag) {
              return<></>;
            }
          }
          return (
            <Product
              key={productId}
              productName={productName}
              productId={productId}
              productPrice={productPrice}
              productPath={productPath}
              productTags={productTags}
            />
          );
        })
      );
    };
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [props.type, props.tags, props.name]);

  return (
    <section className="gallery">
      {pictures}
      {/* <Product photoPath="banana.jpg" /> */}
      {/* <Product photoPath="onion.jpg" /> */}
    </section>
  );
};

export default Gallery;
