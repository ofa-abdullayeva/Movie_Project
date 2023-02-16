import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div>
      {watchlist.map((movie) => (
        <h1 key={movie.id}>{movie.title}</h1>
      ))}
    </div>
  );
};

export default WatchList;
