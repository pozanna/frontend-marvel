import "./Character.css";
import { Link } from "react-router-dom";

const Character = ({ name, img, description, heroId }) => {
  return (
    <Link to={`/comics/${heroId}`}>
      <div className="character-container">
        <h3 className="heroName">{name}</h3>
        <img
          className="heroImage"
          src={`${img}.jpg`}
          alt="No image available"
        />
        {description ? (
          <div className="heroDescription">
            <p>{description}</p>
            <Link to={`/comics/${heroId}`} className="find-out-more">
              Find out more in comics
            </Link>
          </div>
        ) : (
          <div className="no-description">
            <p>No description available.</p>
            Find out more in comics by clicking here!
          </div>
        )}
      </div>
    </Link>
  );
};

export default Character;
