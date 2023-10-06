import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useAppContext } from '../../hooks/useAppContext'

let theme

export const NumberButton = ({number}) => {
  const {themes} = useAppContext()
  theme = themes
  return (
    <TouchableOpacity style={styles(theme).container}>
        <Text style={styles(theme).text}>{number}</Text>
    </TouchableOpacity>
  )
}

const styles =(theme) => StyleSheet.create({
    container:{
        backgroundColor: theme.SHADOWING,
        paddingVertical: 25,
        paddingHorizontal: 50,
        borderRadius: 30
    },
    text:{
        fontSize: 30,
        color: theme.SIMPLETEXT
    }
})