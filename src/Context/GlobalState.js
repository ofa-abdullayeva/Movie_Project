
//! Create Context

import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext()

//! Provider Components
const initialState = {
    watchlist : localStorage.getItem("watchlist")
    ?JSON.parse(localStorage.getItem("watchlist"))
    : [],
    Watched : [],
    
}

export const GlobalProvider = ({children}) => {
    const [state,dispath] = useReducer(AppReducer, initialState)

    useEffect(() =>{
        localStorage.setItem("watchlist",JSON.stringify(state.watchlist))
    },[state])

    const addMovieToWatchlist = (movie) =>{
        dispath({type: "ADD_MOVIE_TO_WATCHLIST",payload : movie})
    }

    const removeMovieFromWatchlist = (id) =>{
        dispath({type: "REMOVE_MOVIE_TO_WATCHLIST" , payload: id})
    }

    return( 
        <GlobalContext.Provider
        value={{
            watchlist:state.watchlist,
            addMovieToWatchlist,
            removeMovieFromWatchlist
        }}
        >{children}</GlobalContext.Provider>
    )
}