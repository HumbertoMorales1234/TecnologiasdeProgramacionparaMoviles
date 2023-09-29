import React, {useEffect, useState} from "react";
import { FlatList, View, Text, ActivityIndicator, StyleSheet, Image } from "react-native";
import { Smash, Amiibo } from "../../assets";
import { CharacterCard } from "../components/CharacterCard";

export const MainScreen = () =>{

    const [amiibos, setAmiibos] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    const delay = (ms) => new Promise((res) => setTimeout(res, ms))

    useEffect(() => {
        const fetchData = async () =>{
            try {
                setIsFetching(true)
                const res = await fetch('https://amiiboapi.com/api/amiibo/?amiiboSeries=0x00')
                const data = await res.json()
                setAmiibos(data.amiibo)
                await delay(5000)
            } catch (error) {
                console.log(error)
            }finally{
                setIsFetching(false)
            }
        }

        fetchData()
    }, [])

    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row', width: 350, gap: 20, alignItems: 'center', justifyContent:'center', paddingVertical: 10}}>
                <Image style={styles.imageLogoSmash} source={Smash}/>
                <Image style={styles.imageLogoAmiibo} source={Amiibo}/>
            </View>
            <View style={{justifyContent:'center', flex: 1}}>
                {isFetching ?(
                    <View>
                        <Text style={{textAlign: 'center'}}>Cargando</Text>
                        <ActivityIndicator size='large' color='#ff0000'/>
                    </View>
                ):
                <FlatList 
                    data={amiibos}
                    numColumns={2}
                    columnWrapperStyle={{flex: 1, justifyContent:'space-around', gap: 10, marginBottom: 5}}
                    renderItem={({item}) => {
                    return(
                        <CharacterCard item={item}/>
                    )
                }}
                />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 60,
        justifyContent: 'flex-start'
    },
    imageLogoSmash:{
        height: 50,
        width: 130, 
    },
    imageLogoAmiibo:{
        height: 30,
        width: 130, 
    },

})