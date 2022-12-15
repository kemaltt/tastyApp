import { Link } from "react-router-dom";

const MealItem = ({ img, id, name, i }) => {
    return (
        <Link to={`/detail/${id}`}>
            <section
                className="mealItemContainer"
                style={{ backgroundColor: i % 2 === 0 ? "  #FF6E85" : "#ffab61e8" }}
            >
                <h1>{name.length > 42 ? name.slice(0, 42) + "..." : name}</h1>
                <img src={img} alt={img} />
            </section>
        </Link>
    );
};

export default MealItem;
