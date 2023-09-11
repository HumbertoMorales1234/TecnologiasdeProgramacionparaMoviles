import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import { AntDesign } from '@expo/vector-icons';
import { LIGHTTHEME as THEME } from '../theme/COLORS';

import { TitleText } from '../components/Texts/TitleText';
import { StyledTextInput } from '../components/Inputs/StyledTextInput';
import { AcceptButton } from '../components/Buttons/AcceptButton';


export default class SignUpScreen extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => this.props.navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color={THEME.COLORS.BLACK} />
          </TouchableOpacity>
          <TitleText text={'Create new\naccount'} orientation={'left'}/>
        </View>
        <StyledTextInput placeholder={'Full name'} type={'Text'} label={'Enter your name'}/>
        <StyledTextInput placeholder={'examplemail@mail.com'} type={'Email'} label={'Email address'} secureTextEntry={false}/>
        <StyledTextInput placeholder={'Enter your password'} type={'Password'} label={'Create password'} secureTextEntry={true}/>
      
        <AcceptButton text={'Sign Up!'}/>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  header:{
    width: '90%',
    paddingHorizontal: 25,
  },
});