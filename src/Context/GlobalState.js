
//! Create Context

import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext()

//! Provider Components
const initialState = {
    watchlist : [],
    Watched : [],
    
}

export const GlobalProvider = ({children}) => {
    const [state,dispath] = useReducer(AppReducer, initialState)
//    console.log(state)

    const addMovieToWatchlist = (movie) =>{
        dispath({type: "ADD_MOVIE_TO_WATCHLIST",payload : movie})
    }

    return( 
        <GlobalContext.Provider
        value={{
            watchlist:state.watchlist,
            addMovieToWatchlist
        }}
        >{children}</GlobalContext.Provider>
    )
}