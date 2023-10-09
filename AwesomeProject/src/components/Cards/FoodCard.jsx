import React from 'react'
import { Image, View, Text, StyleSheet} from 'react-native'
import { Burger } from '../../../assets'
import { THEME } from '../../theme/Colors'

export const FoodCard = ({food}) => {
  return (
    <View style={styles.container}>
        <Image source={Burger} style={{width: 180, height: 180, borderRadius: 200}}/>
        <Text style={styles.nameText}>{food.name}</Text>
        <Text style={styles.priceText}>${food.price}</Text>
    </View>
  )
}

const styles =  StyleSheet.create({
    container:{
        borderColor: THEME.COLORS.HIGHLIGHT, 
        borderWidth: 2, 
        borderRadius:20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginRight: 10
    },
    nameText:{
        fontSize: 20,
        fontWeight: '600',
        color: THEME.COLORS.GENERALTEXT,
        maxWidth: 150,
        textAlign: 'center',
    },
    priceText:{
        fontSize: 25,
        fontWeight: '600',
        color: THEME.COLORS.HIGHLIGHT,
    },
})
