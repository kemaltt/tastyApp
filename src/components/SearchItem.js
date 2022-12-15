import { Link } from "react-router-dom";

const SearchItem = ({ img, id, name, i }) => {
  return (
    <Link to={`/detail/${id}`}>
      <section
        className="searchItemContainer"
        style={{ backgroundColor: i % 2 === 0 ? "#FF6E85 " : " #ffab61e8" }}
      >
        <h1>{name}</h1>
        <img src={img} alt={img} />
      </section>
    </Link>
  );
};

export default SearchItem;
