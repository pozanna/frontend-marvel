import "./Header.css";
import { Link } from "react-router-dom";
import marvelLogo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <Link to="/">
          <img className="headerLogo" src={marvelLogo} alt="Marvel logo" />
        </Link>
        <div className="headerCategories">
          <Link to="/">
            <button className="charactersHeader">Characters</button>
          </Link>
          <Link to="/comics">
            <button className="comicsHeader">Comics</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
