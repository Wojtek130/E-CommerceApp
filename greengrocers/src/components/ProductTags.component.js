import ProductTagCheckbox from "./ProductTagCheckbox.component";
// import "./ProductTags.component.scss";

const ProductTags = function (props) {
  return (
    <div className="filters__form__tags">
      <ProductTagCheckbox value="citrus" />
      <ProductTagCheckbox value="berries" />
      <ProductTagCheckbox value="seasonal" />
    </div>
  );
};

export default ProductTags;
