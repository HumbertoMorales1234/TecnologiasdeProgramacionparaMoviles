import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { THEME } from '../../theme/Colors'

export const TextButton = ({text, isSelected}) => {
  return (
    <TouchableOpacity style={[styles.container, isSelected&&styles.selectedContainer]}>
        <Text style={[styles.text, isSelected&&styles.selectedText]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 30,
        borderWidth: 1,
        borderColor: THEME.COLORS.UNUSED,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight:10,
    },
    text:{
        color: THEME.COLORS.UNUSED,
    },
    selectedContainer:{
        backgroundColor: THEME.COLORS.HIGHLIGHT,
        borderWidth: 0
    },
    selectedText:{
        color: THEME.COLORS.CARD,
        fontWeight: '600',
    }
})
