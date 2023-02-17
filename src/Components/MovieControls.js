import React, { useContext } from "react";
import { BsEyeFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { GlobalContext } from "../Context/GlobalState";


const MovieControls = ({movie}) => {

  const {removeMovieFromWatchlist,addMovieToWatched} = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      <button className="cntr-btn" onClick={()=>addMovieToWatched(movie)}><BsEyeFill/></button>
      <button className="cntr-btn" onClick={()=>removeMovieFromWatchlist(movie.id)}><FaTimes/></button>
    </div>
  );
};

export default MovieControls;
