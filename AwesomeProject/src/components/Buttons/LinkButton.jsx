import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { THEME } from '../../theme/Colors'

export const LinkButton = ({text, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.textLink}>{text}</Text>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    textLink:{
        color: THEME.COLORS.HIGHLIGHT,
        textDecorationLine: 'underline',
        fontWeight: '500',
    }
})