import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

const colorDefault = '#5faacf'
const colorSelected = '#2263df'
const sizeDefault = 30


export const Menu =() =>{
    return(
        <View style={styles.container}>
            <Feather name="home"       size={sizeDefault}   color={colorSelected} />
            <AntDesign name="message1" size={sizeDefault}   color={colorDefault} />
            <AntDesign name="calendar" size={sizeDefault}   color={colorDefault} />
            <Feather name="user"       size={sizeDefault}   color={colorDefault} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingHorizontal: 10,
        paddingVertical:10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        
    }
})