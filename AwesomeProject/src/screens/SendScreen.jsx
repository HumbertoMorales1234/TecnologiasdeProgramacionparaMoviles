import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Header } from '../components/Header'
import { THEME } from '../theme/Colors'
import { NumberGrid } from '../components/NumberGrid'
import { Girl } from '../../assets'

const themes = THEME.DARKMODE

export const SendScreen = () => {
  return (
    <View style={styles.container}>
        <Header/>
        <View style={{alignItems: 'center'}}>
            <Image source={Girl} style={styles.profilePic}/>
            <Text style={[styles.generalText, {fontSize: 20}]}>Benjamin Parker</Text>
            <Text style={styles.generalText}>**** 3284</Text>
        </View>
        <Text style={[styles.generalText, styles.calculatorText]}>$340.00</Text>
        <View style={{alignItems: 'center', width: '100%', gap: 10, paddingBottom: 30}}>
            <NumberGrid/>
        <TouchableOpacity style={styles.sendButton}>
            <Text style={{color: themes.BACKGROUND, fontSize: 20}}>Send</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles =  StyleSheet.create({
    container:{
        backgroundColor: themes.BACKGROUND,
        flex: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profilePic:{
        borderRadius: 100,
        width: 70,
        height: 70,
    },
    sendButton: {
        backgroundColor: themes.YELLOW,
        borderRadius: 30,
        paddingVertical: 15,
        width: '80%',
        alignItems: 'center',
        marginTop: 10
    },
    generalText:{
        color: themes.SIMPLETEXT
    },
    calculatorText:{
        fontSize: 40,
        fontWeight: '600',
        padding: 20
    }
})
