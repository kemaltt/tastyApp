import logo from "./../images/tasty-logo-04 1.svg";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../assets/css/Header.scss";


const Header = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      navigate(`/search/${input}`);
      setInput("");
    }
  };

  useEffect(() => {
    if (input) {
      navigate(`/search/${input}`);
    }
  }, [input, navigate]);

  return (
    <section className="headerContainer">
      <Link to={"/"}>
        <img src={logo} alt={logo} />
      </Link>

      <h1>Find a recipe, an idea, an inspiration...</h1>
      <form action="" onSubmit={handleSubmit}>
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
