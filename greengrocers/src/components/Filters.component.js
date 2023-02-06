import ProductType from "./ProductType.component";
import ProductTags from "./ProductTags.component";
import ProductName from "./ProductName.component";
import "./Filters.component.scss";

const Filters = () => {
  return (
    <>
      <section className="filters">
        <form className="filters__form">
        <img className="filters__form__logo" src={require(`../assets/logo2.png`)} alt=""  />

          <ProductType />
          <ProductTags />
          <ProductName />
          <input type="submit" value="Apply filters" className="btn filters__form__button" />
        </form>
      </section>
    </>
  );
};

export default Filters;
