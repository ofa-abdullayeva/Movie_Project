import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
import ResultsCart from "./ResultsCart";
// import { movie_api } from "../movie_api";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const {Ofeliya} = useContext(GlobalContext)

  function onChange(e) {
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_key}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => setResults(data.results));
  }
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img
            src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg"
            alt="img"
          />
          <div className="titles">
            <h1>Hoş Geldiniz.</h1>
            <h2>
              Hoş Geldiniz. Milyonlarca film, TV şovu ve keşfedilecek kişi.
              Şimdi keşfedin.
            </h2>
            <h1>{Ofeliya}</h1>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              placeholder="Film, dizi, kişi ara..."
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                    <ResultsCart movie={movie}/>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
