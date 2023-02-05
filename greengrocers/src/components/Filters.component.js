import ProductType from "./ProductType.component";
import ProductTags from "./ProductTags.component";
import ProductName from "./ProductName.component";
import "./Filters.component.scss";

const Filters = () => {
  return (
    <>
      <section className="filters">
        <form className="filters__form">
          <ProductType />
          <ProductTags />
          <ProductName />
          <input type="submit" value="Submit" />
        </form>
      </section>
      <section className="gallery"> aaa</section>
    </>
  );
};

export default Filters;
