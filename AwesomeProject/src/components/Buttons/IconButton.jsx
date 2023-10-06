import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { useAppContext } from '../../hooks/useAppContext';

let theme

export const IconButton = ({iconName, iconType, onPress}) => {
    const {themes, handleLightDarkMode, isligthMode} = useAppContext()
    theme = themes

    const setIcon = (iconType, iconName) =>{
        if(iconType==='AntDesign') return(<AntDesign name={iconName} size={20} color={theme.SIMPLETEXT} />) //leftcircleo - appstore1
        else if(iconType==='FontAwesome5') return(<FontAwesome5 name={iconName} size={20} color={theme.SIMPLETEXT} />) //moon - sun
    }
  return (
    <TouchableOpacity onPress={onPress} style={styles(theme).container}>
        {setIcon(iconType, iconName)}
    </TouchableOpacity>
  )
}

const styles = (theme) => StyleSheet.create({
    container:{
        borderRadius: 5,
        borderWidth: 2,
        borderColor: theme.SHADOWING,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50
    }
})
