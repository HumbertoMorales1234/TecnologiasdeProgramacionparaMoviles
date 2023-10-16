import React, { useEffect } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { Salad } from '../../assets'
import { ActivityIndicator } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

export const LoadingScreen = () => {

    const navigation = useNavigation()
    const delay = (ms) => new Promise((res) => setTimeout(res, ms))

    useEffect(() =>{
        const passScreen= async() =>{
            await delay(3000)
            navigation.navigate('Welcome')
        }
        passScreen()
    }, [])

  return (
    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
        <ImageBackground source={Salad} resizeMode='center' style={{width: 700, height:1000, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{backgroundColor: 'rgba(52, 52, 52, 0.8)', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, gap: 10}}>
                <ActivityIndicator size='large' color='#ff0000'/>
                <Text style={{color: 'white'}}>Loading</Text>
            </View>
        </ImageBackground>
    </View>
  )
}
