import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ContinueButton } from '../components/Buttons/ContinueButton'
import { Avocado } from '../../assets'
import { THEME } from '../theme/Colors'


export const WelcomeScreen = () => {
    
    const navigation = useNavigation()
    
  return (
    <View style={styles.container}> 
        <Image source={Avocado} style={styles.image}/>
        <Text style={{fontSize: 30, fontWeight: '600', maxWidth: 370, textAlign: 'center'}}>Shoping with the best e-commerce store </Text>
        <Text style={{fontSize: 19, maxWidth: 370, textAlign: 'center'}}>Find the best shopping experience with us, by your favourite daily needs!</Text>
        <ContinueButton text='Get Started!' onPress={() => navigation.navigate('Login')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingVertical: 90,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: THEME.COLORS.BACKGROUND
    },
    image:{
        width: 370,
        height: 370,
        borderRadius: 300,
        borderWidth: 8,
        borderColor: THEME.COLORS.SHADOWING
    }
})
