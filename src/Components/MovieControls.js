import React, { useContext } from "react";
import { BsEyeFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { GlobalContext } from "../Context/GlobalState";


const MovieControls = ({movie}) => {

  const {removeMovieFromWatchlist} = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      <button className="cntr-btn"><BsEyeFill/></button>
      <button className="cntr-btn" onClick={()=>removeMovieFromWatchlist(movie.id)}><FaTimes/></button>
    </div>
  );
};

export default MovieControls;
