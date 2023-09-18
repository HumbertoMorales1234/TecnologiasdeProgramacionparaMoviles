import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ButtonP } from "./ButtonP";

export const Todo = ({nombre}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.tittle}>{nombre}</Text>
            <View style={styles.buttonContainer}>
                <ButtonP text={'Delete'} light />
                <ButtonP text={'Edit'} light />
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    container:{
        borderRadius: 20,
        marginTop: 30,
        width: 400,
        paddingHorizontal: 15,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2c715f',
    },
    buttonContainer:{
        flexDirection: 'row',
        gap: 20,
    }, 
    tittle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
})