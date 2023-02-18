import ProductType from "./ProductType.component";
import ProductTags from "./ProductTags.component";
import ProductName from "./ProductName.component";
import "./Filters.component.scss";

const Filters = (props) => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <section className="filters">
        <form onSubmit={handleSubmit} className="filters__form">
        <img className="filters__form__logo" src={require(`../assets/logo2.png`)} alt=""  />
          <ProductType setType={props.setType}/>
          <ProductTags setTags={props.setTags} />
          <ProductName setName={props.setName}/>
        </form>
      </section>
    </>
  );
};

export default Filters;
