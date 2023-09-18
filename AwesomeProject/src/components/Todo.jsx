import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ButtonP } from "./ButtonP";
import { THEME } from "../theme/colors";

export const Todo = ({nombre}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.tittle}>{nombre}</Text>
            <View style={styles.buttonContainer}>
                <ButtonP text={'Delete'} light  iconName={'trash-2'} color={THEME.COLORS.RED.WARNING}/>
                <ButtonP text={'Edit'} light  iconName={'edit'}/>
                <ButtonP text={'Subtask'} light  iconName={'corner-down-right'} />
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
        backgroundColor: THEME.COLORS.BLUE.CARDS,
    },
    buttonContainer:{
        flexDirection: 'row',
        gap: 10,
    }, 
    tittle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
})