import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Header } from '../components/Header'
import { NumberGrid } from '../components/NumberGrid'
import { Joe } from '../../assets'
import { useAppContext } from '../hooks/useAppContext'

let theme

export const SendScreen = () => {

  const {themes} = useAppContext()
  theme = themes

  return (
    <View style={styles(theme).container}>
        <Header text={'Send'} canGoBack/>
        <View style={{alignItems: 'center'}}>
            <Image source={Joe} style={styles(theme).profilePic}/>
            <Text style={[styles(theme).generalText, {fontSize: 20}]}>Joe Deckard</Text>
            <Text style={styles(theme).generalText}>**** 3284</Text>
        </View>
        <Text style={[styles(theme).generalText, styles(theme).calculatorText]}>$340.00</Text>
        <View style={{alignItems: 'center', width: '100%', gap: 10, paddingBottom: 30}}>
            <NumberGrid/>
        <TouchableOpacity style={styles(theme).sendButton}>
            <Text style={{color: themes.BACKGROUND, fontSize: 20}}>Send</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = (theme)=> StyleSheet.create({
    container:{
        backgroundColor: theme.BACKGROUND,
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 35,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profilePic:{
        borderRadius: 100,
        width: 70,
        height: 70,
    },
    sendButton: {
        backgroundColor: theme.HIGHLIGHT,
        borderRadius: 30,
        paddingVertical: 15,
        width: '80%',
        alignItems: 'center',
        marginTop: 10
    },
    generalText:{
        color: theme.SIMPLETEXT
    },
    calculatorText:{
        fontSize: 40,
        fontWeight: '600',
        padding: 20
    }
})
