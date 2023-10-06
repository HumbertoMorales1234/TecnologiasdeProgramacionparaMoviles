import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

export const AcountScreen = () => {
    const {navigate} = useNavigation()
  return (
    <View>
        <Text> Acount</Text>
        
    </View>
  )
}
