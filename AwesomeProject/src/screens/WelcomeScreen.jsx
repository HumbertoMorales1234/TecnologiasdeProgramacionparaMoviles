import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

import { Balloon } from '../../assets';
import { LIGHTTHEME as THEME } from '../theme/COLORS';
import { TitleText } from '../components/Texts/TitleText';
import { AcceptButton } from '../components/Buttons/AcceptButton';
import { LinkButton } from '../components/Buttons/LinkButton';

export default class WelcomeScreen extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <TitleText text={'Welcome!'} orientation={'center'}/>
        <Text style={styles.vanishedText}>Sign in or create new account!</Text>
        <Image source={Balloon} style={styles.illustration} />

        <TouchableOpacity title="Sign In" onPress={() => this.props.navigation.navigate('SignInScreen')}>
            <AcceptButton text={'Go to Sign In'}/>
        </TouchableOpacity>

        <TouchableOpacity title="Sign In" onPress={() => this.props.navigation.navigate('SignUpScreen')}>
            <LinkButton text={'No account yet?'} link={' Sign up'}/>
        </TouchableOpacity>

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
    justifyContent: 'center',
  },
  vanishedText:{
    color: THEME.COLORS.GRAY.LIGHT,
  },
  illustration:{
    width:380,
    height: 380,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: THEME.COLORS.GRAY.LIGHT,
    borderRadius: 400,
  }
});