import "./Character.css";
import { Link } from "react-router-dom";

const Character = ({ name, img, description, heroId }) => {
  return (
    <Link to={`/comics/${heroId}`}>
      <div className="character-container">
        <h3>{name}</h3>
        <img className="heroImage" src={`${img}.jpg`} alt="Hero image" />
        <div className="heroDescription">
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Character;
