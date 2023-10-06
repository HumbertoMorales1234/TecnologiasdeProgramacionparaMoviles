import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useAppContext } from '../../hooks/useAppContext'
import { transactions } from '../../constants/transactions'
import { Transaction } from '../Transaction'

let theme

export const TransactionsFrame = () => {
    const {themes} = useAppContext()
    theme = themes
  
    return (
    <View style={styles(theme).container}>
        <View style={styles(theme).ornament}></View>
        <View style={{flexDirection: 'row', justifyContent:'space-between', width: '80%', alignItems:'center', paddingBottom: 20}}> 
            <Text style={styles(theme).titleText}>Transactions</Text>
            <Text style={{color: theme.SHADOWING}}>See all</Text>
        </View>
        <FlatList 
            data={transactions}
            renderItem={({item}) => {
                return(
                    <Transaction item={item}/>
                )
            }}
        />
    </View>
  )
}

const styles = (theme) => StyleSheet.create({
    container:{
        backgroundColor: theme.HIGHLIGHT,
        flex: 1,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15, 
        width: '100%'
    },
    ornament:{
        borderWidth: 2,
        width: 60,
        borderRadius: 20,
        borderColor: theme.SHADOWING,
        marginBottom: 30
    },
    titleText:{
        color: theme.BACKGROUND,
        fontWeight: '600',
        fontSize: 20,
    }
})
