import "./Characters.css";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Character from "../components/Character";

import axios from "axios";

const Characters = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "site--backend-marvel--4j5fk64yfzdn.code.run/characters"
        );
        setData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const compareTitle = (a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  };

  const sortedData = Array.isArray(data) ? data.sort(compareTitle) : [];
  const filteredData = sortedData.filter((hero) =>
    hero.name.toLowerCase().includes(query.toLowerCase())
  );

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="characters-page-container">
      <div className="characters-search-conrainer">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="characters-search-input"
          type="search"
          placeholder="Hero search"
        />
      </div>
      <div className="characters-container">
        {filteredData.map((hero) => {
          return (
            <Character
              heroId={hero._id}
              img={hero.thumbnail.path}
              name={hero.name}
              description={hero.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
