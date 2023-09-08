import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {AntDesign} from "@expo/vector-icons";



const Therapist =({name, job, rate}) =>{
    return(
        <View style={styles.container}>
            <Image
                source={{uri:'https://i1.sndcdn.com/artworks-96JSClFLpAx79Njf-Zzf0dA-t500x500.jpg'}}
                style={styles.image}
            />
            <View >
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.greyText}>{job}</Text>
            </View>
            <View style={styles.therapistRate}>
                <AntDesign name={rate>4? 'star' : 'staro'} size={20} color={'#2263df'}/>
                <Text style={styles.greyText}>{rate.toFixed(1)}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor: '#fefdfe', 
        alignItems:'center',
        borderRadius: 10,
        paddingVertical:10,
        justifyContent:'space-evenly',
    },
    image:{
        height:40,
        width:40,
        borderRadius:40,
    },
    name:{
        color:'#495258',
        fontSize: 18,
        fontWeight:'bold'
    },
    greyText:{
        color: '#d4d4d7',
        fontWeight:'bold',
        fontSize: 15,
        marginTop: 10,
    },
    therapistRate:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-evenly',
    },
})

export default Therapist