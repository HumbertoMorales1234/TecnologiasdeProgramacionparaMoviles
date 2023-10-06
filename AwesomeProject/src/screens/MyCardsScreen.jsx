import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useAppContext } from '../hooks/useAppContext'
import { Header } from '../components/Header'
import { OperationButton } from '../components/Buttons/OperationButton'
import { TextButton } from '../components/Buttons/TextButton'
import { Feather } from '@expo/vector-icons';
import { creditCards } from '../constants/credCards'
import { contacts } from '../constants/contacts'
import { CardFrame } from '../components/Frames/CardFrame'
import { Ionicons } from '@expo/vector-icons';
import { ContactFrame } from '../components/Frames/ContactFrame'

let theme

export const MyCardsScreen = () => {
    const {themes} = useAppContext()
    theme = themes
  return (
    <View style={styles(theme).container}>
        <Header/>
        <Text style={styles(theme).titleText}>My cards</Text>

        <View style={{flexDirection: 'row', height:180, paddingHorizontal: 5, gap: 10, paddingVertical: 10}}>
            <TouchableOpacity style={styles(theme).addCardButton}>
                <Feather name="plus" size={24} color={theme.BACKGROUND} />
            </TouchableOpacity>
            <FlatList
                horizontal
                data={creditCards}
                renderItem={({item}) => {
                    return(
                        <CardFrame item={item}/>
                    )
                }}
            />
        </View>

        <View style={{flexDirection: 'row', gap: 10}}>
            <OperationButton operation='Send' iconName='inbox-arrow-up'/>
            <OperationButton operation='Receive' iconName='inbox-arrow-down'/>
            <OperationButton operation='Swap' iconName='autorenew'/>
        </View>
        <View style={{flexDirection: 'row', gap: 10, paddingVertical: 10}}>
            <TextButton text='Activity'/>
            <TextButton text='Contacts' isSelected/>
            <TextButton text='Payments'/>
            <TextButton text='Sale'/>
        </View>
        <View style={styles(theme).contactsHolder}>
            <View style={{justifyContent: 'space-between', alignItems:'center', flexDirection: 'row'}}>
                <Text style={{color: theme.SIMPLETEXT, fontSize: 20, fontWeight: '600'}}>My contacts</Text>
                <Ionicons name="md-search-outline" size={30} color={theme.SIMPLETEXT}/>
            </View>
            <FlatList
                data={contacts}
                renderItem={({item}) => {
                    return(
                        <ContactFrame item={item}/>
                    )
                }}
            />
        </View>
    </View>
  )
}
 const styles = (theme) => StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 35,
        paddingHorizontal: 15,
        backgroundColor: theme.BACKGROUND,
    },
    titleText:{
        color: theme.SIMPLETEXT,
        fontSize: 50,
        textAlign: 'left'
    },
    addCardButton:{
        backgroundColor: theme.HIGHLIGHT,
        justifyContent: 'center',
        alignItems:'center',
        width: 90,
        borderRadius: 30,
    },
    contactsHolder:{
        backgroundColor: theme.SHADOWING,
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        borderRadius: 30
    },
 })
