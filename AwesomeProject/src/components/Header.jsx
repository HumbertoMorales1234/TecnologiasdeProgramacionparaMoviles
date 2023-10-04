import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { IconButton } from './Buttons/IconButton'
import { THEME } from '../theme/Colors'

const themes = THEME.DARKMODE

export const Header = () => {
  return (
    <View style={styles.container}>
        <IconButton iconName='left' iconType='AntDesign' />
        <Text style={styles.title}>Send</Text>
        <IconButton iconName='appstore1' iconType='AntDesign' />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '100%'
    },
    title:{
        color: themes.SIMPLETEXT,
        fontSize: 24
    }
})