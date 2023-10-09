import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { THEME } from '../../theme/Colors'

export const RegisterInput = ({label, placeholder, onTextChange, value, isSecure}) => {
  return (
    <View>
        <Text> {label}</Text>
        <TextInput value={value} onChangeText={onTextChange} style={styles.inputContainer} placeholder={placeholder} secureTextEntry={isSecure}/>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        backgroundColor: THEME.COLORS.SHADOWING,
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        width: 370,
        fontSize: 15,
        paddingHorizontal: 20
    },
})