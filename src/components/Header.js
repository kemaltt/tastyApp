import logo from "./../images/tasty-logo-04 1.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../assets/css/Header.scss";


const Header = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

   const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value) {
      navigate(`/search/${value}`);
    }
  };


  return (
    <section className="headerContainer">
      <Link to={"/"}>
        <img src={logo} alt={logo} />
      </Link>

      <h1>Find a recipe, an idea, an inspiration...</h1>
      <form action="" >
        <input
          style={{ outlineColor: "#FF6E85" }}
          type="search"
          placeholder="Type something to search"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </section>
  );
};

export default Header;
