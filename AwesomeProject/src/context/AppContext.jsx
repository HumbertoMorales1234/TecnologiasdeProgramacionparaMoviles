import { createContext, useState } from "react";
import { THEME } from "../theme/Colors";
import React from 'react'


let themes = THEME.DARKMODE
export const AppContext = createContext()


export const AppContextProvider = ({children}) => {

    const [islightMode, setLightMode] = useState(false)
    
    const handleLightDarkMode = () =>{
        setLightMode(!islightMode)
        if(islightMode){
            themes = THEME.LIGHTMODE
        }else{
            themes = THEME.DARKMODE
        }
    
    }

    const values ={
        themes,
        handleLightDarkMode,
        islightMode,
    }

  return (
    <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
  )
}
