import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";

export const card = ({isDarkBlue, text, icon, iconType})=> {
    const IconColor = isDarkBlue?'#537acd':'white'
    const CustomIcon = icon === 'Ionicos' ? <Ionicons name={icon} size={30} color={IconColor}/> : <AntDesign name={icon}  size={30} color={IconColor}/> 
    return(
        <View>
            <View style={[styles.cardContainer, 
                isDarkBlue?styles.cardContainerDark:styles.cardContainerLight]}>
                    <View style={[styles.cardIconContainer, 
                        isDarkBlue?styles.cardIconContainerDark:styles.cardIconContainerLight]}>
                        {CustomIcon}
                    </View>
                    <Text style={[styles.cardText,
                        isDarkBlue?styles.cardTextDark:styles.cardTextLight]}
                    >Start training</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        gap:30,
        paddingHorizontal: 20,
        height:200,
        width:200,
        borderRadius:40,
        marginHorizontal: 5,
        justifyContent: 'space-evenly'
    },
    cardContainerLight:{
        backgroundColor: '#e6ecff',
    },
    cardContainerDark:{
        backgroundColor: '#2362df',
    },
    cardIconContainer:{
        width: 50,
        height: 50,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 52,
    },
    cardIconContainerLight:{
        backgroundColor: '#2362df',
    },
    cardIconContainerDark:{
        backgroundColor: '#e6ecff',
    },
    cardText:{
        fontSize:25,
        fontWeight: 'bold',
    },
    cardTextLight:{
        color: '#48525e'
    },
    cardTextDark:{
        color: 'white'
    },
})