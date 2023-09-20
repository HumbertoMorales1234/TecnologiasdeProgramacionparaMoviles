import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ButtonP } from "./ButtonP";
import { THEME } from "../theme/colors";

export const Todo = ({id, nombre, handleDelete, isComplete, handleComplete, handleUpdate, updated, isUpdating , created}) =>{

    const updateText = (updated) =>{
        if(updated !== ''){
            return(
                <Text style={[styles.subText, isComplete&&styles.completedFormat]}>Last Update: {updated}</Text>
            )
        }
    }

    return(
        <View style={[styles.container, isComplete&&styles.completedContainer]}>
            <View>
                <Text style={[styles.tittle, isComplete&&styles.completedFormat]}>{nombre}</Text>
                <Text style={[styles.subText, isComplete&&styles.completedFormat]}>Created: {created}</Text>
                {updateText(updated)}
            </View>
            <View style={styles.buttonContainer}>
                <ButtonP  light  iconName={'trash-2'} color={THEME.COLORS.RED.WARNING} onPress={() => handleDelete(id)}/>
                <ButtonP  light  iconName={isUpdating?'slash':'edit'}  onPress={() => handleUpdate(id)} color={isUpdating&&THEME.COLORS.ORANGE.WARNING} />
                <ButtonP light iconName={ isComplete?'rewind':'check-circle'} onPress={() => handleComplete(id)} color={isComplete?THEME.COLORS.ORANGE.WARNING : THEME.COLORS.BLUE.COMPLETE}/>
                <ButtonP light  iconName={'corner-down-right'} />
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    container:{
        borderRadius: 20,
        marginTop: 30,
        width: '92%',
        paddingHorizontal: 15,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
        backgroundColor: THEME.COLORS.BLUE.CARDS,
    },
    completedContainer:{
        backgroundColor: THEME.COLORS.GREEN.APPROVED,
    },
    buttonContainer:{
        flexDirection: 'row',
        gap: 8,
    }, 
    tittle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    subText:{
        fontSize: 8,
        color: '#e0e0e0',
    },
    completedFormat:{
        textDecorationLine: 'line-through',
        color: '#c0c0c0'
    }
})