import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NumberButton } from './Buttons/NumberButton'

export const NumberGrid = () => {
  return (
    <View style={styles.container}>
        <View style={styles.rows}>
            <NumberButton number='1'/>
            <NumberButton number='2'/>
            <NumberButton number='3'/>
        </View>
        <View style={styles.rows}>
            <NumberButton number='4'/>
            <NumberButton number='5'/>
            <NumberButton number='6'/>
        </View>
        <View style={styles.rows}>
            <NumberButton number='7'/>
            <NumberButton number='8'/>
            <NumberButton number='9'/>
        </View>
        <View style={styles.rows}>
            <NumberButton number='<'/>
            <NumberButton number='0'/>
            <NumberButton number='.'/>
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    rows:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5
    }
})
