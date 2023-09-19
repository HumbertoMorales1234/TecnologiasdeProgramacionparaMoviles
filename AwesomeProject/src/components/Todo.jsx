import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ButtonP } from "./ButtonP";

export const Todo = ({id, nombre, handleDelete, completed, handleComplete}) =>{
    return(
        <View style={[styles.container, completed&&styles.completedContainer]}>
            <Text style={[styles.tittle, completed&&styles.completedTitle]}>{nombre}</Text>
            <View style={styles.buttonContainer}>
                <ButtonP text={'Delete'} light onPress={() => handleDelete(id)}/>
                <ButtonP text={'Edit'} light />
                <ButtonP text={ completed ? 'Activate' : 'Complete'} light onPress={() => handleComplete(id)}/>
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
    completedContainer:{
        backgroundColor: '#2c719f',
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
    completedTitle:{
        textDecorationLine: 'line-through',
        color: '#b3b3b3'
    }
})