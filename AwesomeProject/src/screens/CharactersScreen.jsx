import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet} from "react-native";
import { CharCard } from "../components/Characters/CharCard";
import { THEME } from "../theme/colors";

export const CharactersScreen = ({navigation}) =>{

    
    const [characters, setCharacters] = useState([])

    // Las funciones Async van fuera del useEffect
    const getApiData = async () =>{
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            setCharacters(data.results)
            //console.log(data.results[0].name)
        } catch (error) {
            console.log('Salio mal', error)
        }
    }

    useEffect(() =>{
        getApiData()
    },[])

    return(
        <View style={styles.container}>
            <FlatList
                data={characters}
                renderItem={({item}) => {
                    return(
                        <CharCard item={item} navigation={navigation} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.COLORS.GREY.BACKGROUND,
        paddingHorizontal: 10, 
        paddingVertical: 20

    },
    tittle: {
        fontSize: 40, 
        fontWeight: '600',
        color: 'white',
        marginBottom: 30,
    }
})