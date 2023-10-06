import React from 'react'
import { StyleSheet, View , Image, Text} from 'react-native'
import { Graficas } from '../../assets'
import { useAppContext } from '../hooks/useAppContext'

let theme

export const GraphHolder = () => {
    const  {themes} = useAppContext()
    theme= themes
  return (
    <View style={styles(theme).container}>
        <Text style={styles(theme).titleText}>Total Balance</Text>
        <Text style={styles(theme).balanceText}>$652,144.75</Text>
        <View style={{flexDirection: 'row', gap: 20}}>
            <Text style={styles(theme).periodText}>Day</Text>
            <Text style={styles(theme).periodText}>Week</Text>
            <Text style={[styles(theme).periodText, {color: theme.HIGHLIGHT, fontWeight: '500'}]}>Month</Text>
            <Text style={styles(theme).periodText}>Year</Text>
        </View>
        <Image source={Graficas} style={{width: 450, height:200,}}/>
        <View style={{flexDirection: 'row', gap: 20}}>
            <Text style={styles(theme).calendarText}>Jan</Text>
            <Text style={styles(theme).calendarText}>Feb</Text>
            <Text style={styles(theme).calendarText}>Apr</Text>
            <Text style={styles(theme).calendarText}>Mar</Text>
            <Text style={styles(theme).calendarText}>May</Text>
            <Text style={styles(theme).calendarText}>Jun</Text>
        </View>
    </View>
  )
}
const styles = (theme) => StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.BACKGROUND,
        padding: 15,
    },
    titleText:{
        color: theme.SHADOWING,
        fontSize: 20
    },
    balanceText:{
        color: theme.SIMPLETEXT,
        fontWeight: '600',
        fontSize: 45,
    },
    periodText:{
        color: theme.SIMPLETEXT,
        fontSize: 20,
        fontWeight: '400'
    },
    calendarText:{
        color: theme.SHADOWING,
        fontSize: 20,
    },
})
