import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { TextButton } from '../../components/Buttons/TextButton'
import { THEME } from '../../theme/Colors'
import { SearchBar } from '../../components/SearchBar'

import { Food } from '../../constants/Food'
import { FlatList } from 'react-native-gesture-handler'
import { FoodCard } from '../../components/Cards/FoodCard'


export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>Store for fast food & etc.</Text>
      <SearchBar/>
        <ScrollView horizontal style={{height: 5}}>
            <TextButton text='Burgers' isSelected/>
            <TextButton text='Snacks' />
            <TextButton text='Drinks'/>
            <TextButton text='Tacos'/>
            <TextButton text='Pizza'/>
            <TextButton text='Desserts'/>
        </ScrollView>
      <FlatList style={{marginBottom: 70}}
          horizontal
          data={Food}
          renderItem={({item}) => {
              return(
                  <FoodCard food={item}/>
              )
        }}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        gap: 60,
        paddingVertical:20,
        backgroundColor: THEME.COLORS.BACKGROUND,
        paddingHorizontal:20,
    },
    descriptionText:{
      color: THEME.COLORS.GENERALTEXT,
      fontWeight: '400',
      fontSize: 27,
    },
})