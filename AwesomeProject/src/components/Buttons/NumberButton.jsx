import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { THEME } from '../../theme/Colors'

const themes = THEME.DARKMODE

export const NumberButton = ({number}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{number}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: themes.SHADOWING,
        paddingVertical: 25,
        paddingHorizontal: 50,
        borderRadius: 30
    },
    text:{
        fontSize: 30,
        color: themes.SIMPLETEXT
    }
})