import React, { useState, useEffect} from "react";
import { Button, Modal, Text, View, StyleSheet, Switch, ActivityIndicator, TextInput } from "react-native";
import { Header } from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
//import { useState } from "react";

export const HomeScreen = ({}) =>{

    const navigation = useNavigation()
    const [inputValue, setInputValue] = useState('')
    const [characters, setCharacters] = useState([])
    const [filteredCharacters, setFilteredCharacters] = useState([])

    // useEffect ( ()=> {
    //     navigation.setOptions({
    //         title: 'Home from Component', 
    //         headerSearchBarOptions: {
    //             placeHolder: 'hello',
    //         }
    //     })
    // },  [navigation])

    useEffect( () => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://rickandmortyapi.com/api/character')
                const data =  await res.json()
                setCharacters(data.results)
                setFilteredCharacters(data.results)
            } catch (error) {
                console.log(error)
            }
        }

    fetchData()
    },[])

    const filterData = (value) => {
        if (value){
            const filteredData = characters.filter(characters => characters.name.includes(value))
            setFilteredCharacters(filteredData)
        }else{
            setFilteredCharacters(characters)
        }
    }

    return(
        <View style={[styles.modal]}>
            <TextInput 
                value={inputValue}
                onChangeText={(e) => {setInputValue(e), filterData(e)}}
                style = {{borderWidth: 1, borderColor: 'white', color:'white', paddingVertical:10 }}
            />
            {filteredCharacters.map((character) =>{
                return(
                    <View key={character.id}>
                        <Text style={styles.text}>Name: {character.name}</Text>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    modal:{
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: '#000'
    }, 
    text:{
        color: 'white'
    }
})