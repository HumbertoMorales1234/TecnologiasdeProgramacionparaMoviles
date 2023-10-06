import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useAppContext } from '../../hooks/useAppContext'
import { MaterialCommunityIcons } from '@expo/vector-icons';

let theme

export const ContactFrame = ({item}) => {
    const {themes} = useAppContext()
    theme = themes

    return (
        <View style={styles(theme).container}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Image source={item.foto} style={{width: 75, height: 75, borderRadius:100}}/>
                <View style={{justifyContent: 'space-between', height: 50}}>
                    <Text style={styles(theme).contactText}>{item.name}</Text>
                    <Text style={styles(theme).cardDataText}>**** {item.cardEnding}</Text>
                </View>
            </View>
            <MaterialCommunityIcons name="dots-vertical" size={25} color={theme.SIMPLETEXT} />
        </View>
  )
}

const styles = (theme) => StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    contactText:{
        color: theme.SIMPLETEXT,
        fontSize: 20,
        fontWeight: '600',
    },
    cardDataText:{
        color: theme.SIMPLETEXT,
        fontSize: 12
    }
})
