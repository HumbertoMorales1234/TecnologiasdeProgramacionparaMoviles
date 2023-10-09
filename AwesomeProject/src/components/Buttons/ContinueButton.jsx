import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { THEME } from '../../theme/Colors'

export const ContinueButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
        <Text style={styles.text} >{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: THEME.COLORS.HIGHLIGHT,
        width: 370,
        borderRadius: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: THEME.COLORS.CARD,
        fontSize: 20,
    }
})
