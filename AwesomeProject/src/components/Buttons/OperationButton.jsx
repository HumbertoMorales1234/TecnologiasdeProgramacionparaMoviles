import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useAppContext } from '../../hooks/useAppContext'
import { MaterialCommunityIcons } from '@expo/vector-icons';


let theme

export const OperationButton = ({operation, iconName}) => {
    const {themes} = useAppContext()
    theme = themes
  return (
    <TouchableOpacity style={styles(theme).container}>
        <MaterialCommunityIcons name={iconName} size={30} color={theme.SIMPLETEXT} />
        <Text style={styles(theme).text}>{operation}</Text>
    </TouchableOpacity>
  )
}

const styles = (theme) => StyleSheet.create({
    container:{
        borderRadius: 30,
        backgroundColor: theme.SHADOWING,
        width: 120,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    text:{
        color: theme.HIGHLIGHT,
    },
})
