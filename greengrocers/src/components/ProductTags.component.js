import ProductTagCheckbox from "./ProductTagCheckbox.component";
import React, { useEffect, useState } from "react";

// import "./ProductTags.component.scss";

const ProductTags = function (props) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3001/tags");
      const json = await data.json();
      setTags(
        json.map((tagObj) => {
          const tagName = tagObj["name"];
          const tagId = tagObj["id"];
          return (
            <ProductTagCheckbox value={tagName} tagId={tagId} key={tagId} />
          );
        })
      );
    };
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <div className="filters__form__tags">{tags}</div>;
};

export default ProductTags;
