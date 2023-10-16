import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import { useAppContext } from '../hooks/useAppContext'
import { THEME } from '../theme/Colors'
import { ContinueButton } from '../components/Buttons/ContinueButton'
import { Food } from '../../assets'
import { LinkButton } from '../components/Buttons/LinkButton'
import { RegisterInput } from '../components/Inputs/RegisterInput'

export const LoginScreen = () => {
    const [,,handleLogIn] = useAppContext()
    const navigation = useNavigation()
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [messageActive, setMessageActive] = useState(false)
    

    const handleLogInPress = async()=>{
        setMessageActive(false)
        if(username === '' || password === ''){
            setMessage('You are missing some data')
            setMessageActive(true)
            return
        }

        const loginValue = await handleLogIn(username, password)
        if(!loginValue){
            setMessage('Not valid credentials')
            setMessageActive(true)
        }
    }

    const handleMessageShow = () => {
        if(messageActive) return(<Text style={{color: THEME.COLORS.ALERT, textAlign: 'center', width: 370}}>{message}</Text>)
    }

  return (
    <View style={styles.container}>
        <Image source={Food} style={styles.image}/>
        <Text style={{textAlign: 'left', width: 300, fontSize: 40}}>Wecome!</Text>
        <View style={{gap: 10}}>
            <RegisterInput value={username} onTextChange={(value) => setUsername(value)} placeholder='Insert your username' label='Username: '/>
            <View style={{alignItems: 'flex-end'}}>
                <RegisterInput value={password} onTextChange={(value) => setPassword(value)} placeholder='Insert your password' label='Password: ' isSecure/>
                <LinkButton text='Forgot your password?'/>
            </View>
            {handleMessageShow()}
        </View>
        <View style={{alignItems: 'center', gap: 15}}>
            <ContinueButton text='Log in' onPress={() => handleLogInPress()}/>
            <View style={{flexDirection: 'row', gap: 5}}>
                <Text>Don't have an account?</Text>
                <LinkButton text='Sign Up' onPress={() => navigation.navigate('Register')}/>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        gap: 40,
        backgroundColor: THEME.COLORS.BACKGROUND,
    },
    image:{
        height: 300,
        width: 600,
        borderBottomLeftRadius: 225,
        borderBottomRightRadius: 225,
    }
})
