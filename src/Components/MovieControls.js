import React, { useContext } from "react";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { GlobalContext } from "../Context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const { removeMovieFromWatchlist, addMovieToWatched ,moveToWatchlist,removeMovieFromWatched} =
    useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="cntr-btn" onClick={() => addMovieToWatched(movie)}>
            <BsEyeFill />
          </button>
          <button
            className="cntr-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <FaTimes />
          </button>
        </>
      )},
       {type === "watched" && (
        <>
          <button className="cntr-btn" onClick={() => moveToWatchlist(movie)}>
            <BsEyeSlashFill />
          </button>
          <button
            className="cntr-btn"
            onClick={() => removeMovieFromWatched(movie.id)}
          >
            <FaTimes />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
