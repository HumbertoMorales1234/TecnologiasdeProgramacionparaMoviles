import React from 'react'
import { StyleSheet, View, Text, Image} from 'react-native'
import { IconButton } from './Buttons/IconButton'
import { THEME } from '../theme/Colors'
import { useAppContext } from '../hooks/useAppContext'
import { useNavigation } from '@react-navigation/native'
import { Girl } from '../../assets'


let theme


export const Header = ({text, canGoBack}) => {
  const {themes, handleLightDarkMode, islightMode} = useAppContext()
  const {goBack} = useNavigation()
  theme = themes

  const handleCantGoBack = () =>{
    if(canGoBack){
      return(
        <IconButton iconName='left' iconType='AntDesign' disables={!canGoBack} onPress={() => goBack()}/>
      )
    }
    else{
      return(
        <Image source={Girl} style={{width: 50, height: 50, borderRadius: 50}}/>
      )
    }
  }

  return (
    <View style={styles(theme).container}>
        {handleCantGoBack()}
        <Text style={[styles(theme).title,]}>{text}</Text>
        <View style={{flexDirection: 'row', gap: 5}}>
          <IconButton iconName={islightMode ? 'moon': 'sun'} iconType='FontAwesome5' onPress={handleLightDarkMode}/>
          <IconButton iconName='appstore1' iconType='AntDesign' />
        </View>
    </View>
  )
}

const styles = (theme) => StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: '100%',
        //paddingTop:40,
    },
    title:{
        justifyContent: 'center',
        color: theme.SIMPLETEXT,
        fontSize: 24,
        textAlign: 'center',
        alignSelf: 'center',
        position: 'absolute',
        width: '105%'
    }
})