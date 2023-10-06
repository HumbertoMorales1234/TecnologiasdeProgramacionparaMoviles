import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import { useAppContext } from '../../hooks/useAppContext';

let theme

export const CardFrame = ({item}) => {
    const {themes} = useAppContext()
    theme = themes

  return (
    <View style={[styles(theme).container, item.id%2>0&&{backgroundColor: theme.SIMPLETEXT}]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>
            <Fontisto name="mastercard" size={30} color={item.id%2>0?themes.BACKGROUND:theme.SIMPLETEXT} />
            <Text style={[styles(theme).textGeneral, item.id%2>0&&{color: theme.BACKGROUND}]}>**** {item.ending}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={[styles(theme).textGeneral, item.id%2>0&&{color: theme.BACKGROUND}, {fontSize: 20}]}>$</Text>
            <Text style={[styles(theme).textGeneral, item.id%2>0&&{color: theme.BACKGROUND}, {fontSize: 30}] }>{item.budget}</Text>
        </View>
    </View>
  )
}

const styles = (theme) => StyleSheet.create({
    container:{
        backgroundColor: theme.PARALELHI,
        justifyContent:'space-between',
        padding: 25,
        borderRadius: 40,
        width: 250,
        marginLeft: 5,
    },
    textGeneral:{
        color: theme.SIMPLETEXT,
    }
})
