import React, {useEffect, useState}from "react";
import { THEME } from "../theme/colors";
import { View, Text, StyleSheet, Image } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const CharInfoScreen = ({navigation, route}) =>{

    const {item} = route.params

    const [episode, setEpisode] = useState(JSON)

    // Las funciones Async van fuera del useEffect
    const getApiData = async () =>{
        try {
            const response = await fetch(item.episode[0])
            const data = await response.json()
            setEpisode(data)
        } catch (error) {
            console.log('Error', error.toString())
        }
    }

    useEffect(() =>{
        getApiData()
    },[])


    const StatusCheck = (status) =>{
        if(status ==="Alive") return(<Ionicons name="heart-circle-outline" size={30} color={THEME.COLORS.GREEN.POSITIVE} />)
        else if (status === "Dead") return(<Ionicons name="skull-outline" size={25} color={THEME.COLORS.RED.WARNING} />) 
        else return(<AntDesign name="questioncircleo" size={25} color={THEME.COLORS.GREY.noSTATUS} />)
    }

    const GenderCheck = (gender) => {
        if(gender ==="Male") return(<Foundation name="male-symbol" size={30} color={THEME.COLORS.BLUE.COMPLETE} />)
        else if (gender === "Female") return(<Foundation name="female-symbol" size={30} color={THEME.COLORS.RED.WARNING} />) 
        else return(<AntDesign name="questioncircleo" size={25} color={THEME.COLORS.GREY.noSTATUS} />)
    }
    
    const SpeciesCheck = (species) => {
        if(species ==="Human") return(<MaterialIcons name="face" size={30} color={THEME.COLORS.ORANGE.WARNING} />) 
        else return(<MaterialCommunityIcons name="alien-outline" size={30} color={THEME.COLORS.GREEN.POSITIVE} />)
    }
    
    const typeCheck = (type) => {
        if(type !== '')return (
            <View >
                <Text style={styles.labeText}>Type:</Text>
                <Text style={styles.generalText}>{item.type}</Text>
            </View>
        )
    }
    
    return(
    <View style={styles.container}>
        <Text style={[styles.generalText, styles.charNameText]}>{item.name}</Text>
        <Image source={{uri: item.image }} 
            style={styles.imageStyle}
        />
        
               
            <View style= {{alignItems: 'center'}}>   
                <Text style={styles.labeText}>General Info:</Text>
                <View style={styles.rowsTextContainer}>
                    <View style = {{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                        {GenderCheck(item.gender)}
                        <Text style={styles.generalText}>{item.gender}</Text>
                    </View>
                    <View style = {{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                        {StatusCheck(item.status)}
                        <Text style={styles.generalText}>{item.status}</Text>
                    </View>
                    <View style = {{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                        {SpeciesCheck(item.species)}
                        <Text style={styles.generalText}>{item.species}</Text>
                    </View>
                </View>
            </View>
            {typeCheck(item.type)}
            <View >
                <Text style={styles.labeText}>Origin:</Text>
                <Text style={styles.generalText}>{item.origin.name}</Text>
            </View>
            <View >
                <Text style={styles.labeText}>Last Location:</Text>
                <Text style={styles.generalText}>{item.location.name}</Text>
            </View>
            <View >
                <Text style={styles.labeText}>First seen:</Text>
                <Text style={styles.generalText}>{episode.name}</Text>
            </View>
        
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        //justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        gap: 20,
        backgroundColor: THEME.COLORS.GREY.CARDS,
    },
    infoConteiner:{
        gap: 5,
        maxWidth: 200
    },
    rowsTextContainer:{
        width: '100%',
        flexDirection: 'row',
        //alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    generalText:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    labeText:{
        fontSize: 20,
        color: THEME.COLORS.GREY.noSTATUS,
        paddingBottom: 5,
        textAlign: 'center',
    },
    charNameText:{
        fontSize: 40,
        maxWidth: 300,
        textAlign: 'center',
        fontWeight: '600',
    },
    imageStyle:{
        width: 200,
        height: 200,
        borderRadius: 20,
    }
})