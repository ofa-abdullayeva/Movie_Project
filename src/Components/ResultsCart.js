import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const ResultsCart = ({ movie }) => {
  const {watchlist,addMovieToWatchlist} = useContext(GlobalContext);
  const storedMovie = watchlist.find((o)=>o.id === movie.id);
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.poster_path}`}
          />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date
              ? movie.release_date.substring(0, 4)
              : "Bilgisi yok"}
          </h4>
          <h4 className="release-date">
           IMDB : <b>{movie.vote_average ? movie.vote_average : "bilgi yok"}</b>
          </h4>
        </div>
        <div className="controls">
          <button 
          className="btn" 
          onClick={()=>addMovieToWatchlist(movie)}
          disabled={storedMovie}>Add to Wathlist</button>
        </div>
      </div>
    </div>
  );
};

export default ResultsCart;
