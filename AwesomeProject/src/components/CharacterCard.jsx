import React from "react";
import { ImageBackground, View, StyleSheet, Text} from "react-native";

export const CharacterCard = ({item}) =>{
    return(
        <View style={styles.container}>
            <ImageBackground source={{uri: item.image}} style={styles.image}>
                <View style={styles.textHolder}>
                    <Text style={{color: 'white', paddingHorizontal: 20, paddingVertical: 10}}>{item.name}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: '#f4f4f4',
        flex:1/2,
        alignItems: 'center',
    },
    image:{
        width: 150,
        height: 200,
        justifyContent: 'flex-end',
    },
    textHolder:{
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        //width: 120,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems:'center'
    },
})