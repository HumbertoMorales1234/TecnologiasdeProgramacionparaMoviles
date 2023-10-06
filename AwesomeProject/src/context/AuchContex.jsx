import { createContext, useState } from "react";
import { View } from "react-native";

export const AuthContext =  createContext()

export const AuthContextProvider =()=>{
    const [user, setUser] = useState('')

    const handleLogin = (username, password)=>{
        if(username==='Beto' && password ==='123')
            setUser(username)
    }
    const handleLogout = () =>{
        setUser('')
    }

    const values= [
        user, 
        handleLogin, 
        handleLogout
    ]
    return(
        <AuthContext.Provider value={values}>

        </AuthContext.Provider>
    )
}