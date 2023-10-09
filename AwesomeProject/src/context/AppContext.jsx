import { createContext, useState } from "react";


export const AppContext = createContext()

export const AppContextProvider= ({children}) =>{
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState('')

    const handleLogIn = (username, password) =>{
        if(username==='Beto' && password==='1234'){
            setUser(username)
            setAuthenticated(true)
        }
    }

    const handleLogOut = () =>{
        setUser('')
        setAuthenticated(false)
    }

    const values =[
        isAuthenticated,
        user,
        handleLogIn,
        handleLogOut,
    ]

    return(
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}