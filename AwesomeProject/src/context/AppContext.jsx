import { createContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store"


export const AppContext = createContext()

export const AppContextProvider= ({children}) =>{
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState('')

    useEffect(() => {
        const LoggedUser = async() => {
          try {
            const currentUser = await SecureStore.getItemAsync('user')
            console.log('Logged user', currentUser)
            if(currentUser){
                setUser(currentUser)
                setAuthenticated(true)
            }
          } catch (error) {
            console.log(error)
          }
        }
        LoggedUser()
      }, [])
    
    const handleLogIn = async (username, password) =>{
        if(username==='Beto' && password==='1234'){
           setUser(username)
           await SecureStore.setItemAsync('user', username)
           setAuthenticated(true)
        }
    }

    const handleLogOut = async () =>{
        setUser('')
        await SecureStore.deleteItemAsync('user')
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