import ProductTagCheckbox from "./ProductTagCheckbox.component";
import React, { useEffect, useState } from "react";

// import "./ProductTags.component.scss";

const ProductTags = function (props) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // setPictures(files);
    // setPictures(files.map((f) => <Product photoPath={f} key={f} />));
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch("http://localhost:3001/tags");
      // convert the data to json
      const json = await data.json();
      setTags(json.map((tagObj) => {
        const tagName = tagObj["name"];
        const tagId = tagObj["id"];
        return <ProductTagCheckbox value={tagName} tagId={tagId} key={tagId} />}));
      // set state with the result
      // setData(json);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div className="filters__form__tags">
      {tags}
    </div>
  );
};

export default ProductTags;
