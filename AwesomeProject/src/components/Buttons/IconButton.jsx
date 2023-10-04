import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { THEME } from '../../theme/Colors';
import { StyleSheet } from 'react-native';

const themes = THEME.DARKMODE

export const IconButton = ({iconName, iconType, onPress}) => {

    const setIcon = (iconType, iconName) =>{
        if(iconType==='AntDesign') return(<AntDesign name={iconName} size={20} color={themes.SIMPLETEXT} />) //leftcircleo - appstore1
    }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        {setIcon(iconType, iconName)}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 5,
        borderWidth: 2,
        borderColor: themes.SHADOWING,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    }
})
