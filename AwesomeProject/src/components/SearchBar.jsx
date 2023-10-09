import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { THEME } from '../theme/Colors';


export const SearchBar = () => {
  return (
    <View style={styles.container}>
        <Feather name="search" size={24} color={THEME.COLORS.HIGHLIGHT} />
        <TextInput value='Burgers' style={styles.inputContainer}/>
        <Entypo name="sound-mix" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderRadius: 20,
        width: 390,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: THEME.COLORS.SHADOWING,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    inputContainer:{
        width: '70%'
    }
})