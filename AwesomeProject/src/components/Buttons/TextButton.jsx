import React from 'react'
import { StyleSheet, TouchableOpacity, Text} from 'react-native'
import { useAppContext } from '../../hooks/useAppContext'

let theme

export const TextButton = ({text, isSelected}) => {
    const {themes} = useAppContext()
    theme = themes
  return (
    <TouchableOpacity style={[styles(theme).container, isSelected&&styles(theme).selected]}>
        <Text style={{color: isSelected? theme.BACKGROUND:theme.SIMPLETEXT}}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = (theme) => StyleSheet.create({
    container:{
        borderWidth: 1,
        borderRadius: 40,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: theme.HIGHLIGHT
    },
    selected:{
        backgroundColor: theme.HIGHLIGHT
    }
})