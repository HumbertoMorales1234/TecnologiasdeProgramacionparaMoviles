import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

import { AntDesign } from '@expo/vector-icons';
import { LIGHTTHEME as THEME } from '../theme/COLORS';

import { TitleText } from '../components/Texts/TitleText';
import { StyledTextInput } from '../components/Inputs/StyledTextInput';
import { AcceptButton } from '../components/Buttons/AcceptButton';
import { SwitchButton } from '../components/Buttons/SwitchButton';


export default class SignInScreen extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        
        {/* Contenedor del header */}
        <View style={styles.header}>   
          <TouchableOpacity 
              onPress={() => this.props.navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color={THEME.COLORS.BLACK} />
          </TouchableOpacity>
          <TitleText text={'Welcome \nback!'} orientation={'left'}/>
        </View>

          <StyledTextInput placeholder={'examplemail@mail.com'} type={'Email'} label={'Email'} secureTextEntry={false}/>
          <StyledTextInput placeholder={'Password'} type={'Password'} label={'Password'} secureTextEntry={true}/>
        
        <SwitchButton/>
        

        <AcceptButton text={'Sign In!'}/>

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