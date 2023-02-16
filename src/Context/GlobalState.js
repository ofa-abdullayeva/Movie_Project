
//! Create Context

import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext()

//! Provider Components
const initialState = {
    Wathlist : [],
    Wathed : [],
    
}

export const GlobalProvider = (props) => {
    const [state,dispath] = useReducer(AppReducer, initialState)
    console.log(state)
    return( 
        <GlobalContext.Provider
        value={{
            Ofeliya:"Developper"
        }}
        >{props.children}</GlobalContext.Provider>
    )
}