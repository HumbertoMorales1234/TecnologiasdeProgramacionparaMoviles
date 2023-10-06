import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppContext } from '../hooks/useAppContext';
import { Text } from 'react-native';

let theme

export const Transaction = ({item}) => {
    const {themes} = useAppContext()
    theme = themes



  return (
    <View style={styles(theme).container}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <View style={styles(theme).iconContainer}>
                <MaterialCommunityIcons name={item.income>=0?'inbox-arrow-down':'inbox-arrow-up'} size={40} color={theme.HIGHLIGHT} />
            </View>
            <View>
                <Text style={styles(theme).nameText}>{item.to}</Text>
                <Text style={styles(theme).dateText}>{item.date}</Text>
            </View>
        </View>
        <Text style={styles(theme).incomeText}>${item.income}</Text>
    </View>
  )
}

const styles = (theme) => StyleSheet.create({
    container:{
        width: '84%',
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconContainer:{
        backgroundColor: theme.BACKGROUND,
        padding: 10,
        borderRadius: 100,
    },
    nameText:{
        color: theme.BACKGROUND,
        fontSize: 18
    },
    dateText:{
        color: theme.SHADOWING,
        fontSize: 11
    },
    incomeText:{
        color: theme.BACKGROUND,
        fontSize: 20,
        fontWeight: '600'
    }
})
