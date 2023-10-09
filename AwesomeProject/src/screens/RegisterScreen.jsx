import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinkButton } from '../components/Buttons/LinkButton'
import { RegisterInput } from '../components/Inputs/RegisterInput'
import { ContinueButton } from '../components/Buttons/ContinueButton'
import { THEME } from '../theme/Colors'

export const RegisterScreen = () => {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={{width: '87%'}}>
            <Text style={styles.title}> Sign Up! </Text>
            <View style={{flexDirection: 'row', gap:5}}>
                <Text> Already have an account?</Text>
                <LinkButton text='Log In' onPress={() => navigation.navigate('Login')}/>
            </View>
        </View>
        <RegisterInput label='Name:' placeholder='Enter your name' />
        <RegisterInput label='Email:' placeholder='Enter your email' />
        <RegisterInput label='Password:' placeholder='Enter your password' isSecure/>
        <View style={{gap: 8, alignItems: 'center'}}>
            <ContinueButton text='Sign up'/>
            <Text style={{maxWidth: 370}}>
                <Text>By signing up, you are agreeing to our </Text>
                <Text style={styles.importantText}>Terms of Service </Text>
                <Text>and </Text>
                <Text style={styles.importantText}>Privacy</Text>
            </Text>
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        backgroundColor: THEME.COLORS.BACKGROUND,
        flex: 1,
        alignItems: 'center',
        gap: 40,
        paddingTop: 40,
    },
    title:{
        fontWeight: '600',
        fontSize: 40,
    },
    importantText:{
        fontWeight: 'bold',
        color: THEME.COLORS.HIGHLIGHT
    },
})
