import "./Comics.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const Comics = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics?id=${id}`
        );
        setData(response.data.comics);
        console.log(response);
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
  const filteredData = sortedData.filter((comic) =>
    comic.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="comics-page-container">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="search-input"
        type="search"
        placeholder="Recherche des comics"
      />

      <div className="comics-container">
        {filteredData.map((comic) => {
          return (
            <article key={comic._id}>
              <img
                src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                alt={comic.title}
              />
              <h2>{comic.title}</h2>
              <p>{comic.description}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
