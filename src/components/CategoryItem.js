import { Link } from "react-router-dom";
const CategoryItem = ({ img, name, i }) => {
  return (
    <Link to={`/category/${name}`}>
      <section
        className="categoryItemContainer"
        style={{ backgroundColor: i % 2 === 0 ? "#ffab61e8" : "#FF6E85" }}
      >
        <h1>{name}</h1>
        <img src={img} alt={img} />
      </section>
    </Link>
  );
};

export default CategoryItem;
