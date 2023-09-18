import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const ButtonP = ({text, onPress, light}) =>{
    return(
    <TouchableOpacity style={[styles.container, light&&styles.whiteButton]} onPress={onPress}>
          <Text style={[light && styles.whiteButtonText]}>{text}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1, 
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        paddingVertical: 2,
    },
    whiteButton:{
        borderColor: 'white',
    },
    whiteButtonText:{
        color: 'white', 
    }
})