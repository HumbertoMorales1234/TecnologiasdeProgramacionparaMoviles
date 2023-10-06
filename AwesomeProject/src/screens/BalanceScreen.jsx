import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Header } from '../components/Header'
import { useAppContext } from '../hooks/useAppContext'
import { TransactionsFrame } from '../components/Frames/TransactionsFrame'
import { Graficas } from '../../assets'
import { GraphHolder } from '../components/GraphHolder'

let theme

export const BalanceScreen = () => {
  const {themes} = useAppContext()
  theme = themes

  return (
    <View style={styles(theme).container}>
        <Header canGoBack/>
        <GraphHolder/>
        <TransactionsFrame/>
    </View>
  )
}

const styles = (theme) => StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 35,
        alignItems: 'center',
        backgroundColor: theme.BACKGROUND,
    },
})
