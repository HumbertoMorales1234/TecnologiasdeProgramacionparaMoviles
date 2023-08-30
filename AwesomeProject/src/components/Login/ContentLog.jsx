import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'; // Cualquier objeto que se pueda presionar, se necesita de la caracteristica Touchable
import { StyledInput } from '../Inputs/Input';
import { NextButton } from '../Buttons/Next';
import { ImageButton } from '../Buttons/ImageButton';
import { googleImage, facebookImage } from '../../../assets';

export default function ContentLog() {
  return (
    <View style={styles.container}> 
      <View style={styles.form}>
        <StyledInput placeholder='email' type='email' label='Email' secureTextEntry={false}/>
        <StyledInput placeholder='password' type='password' label='Password' secureTextEntry={true}/>
        <TouchableOpacity style={styles.touchableText}>
            <Text style={styles.enlace}>¿Olvidaste la Contraseña?</Text>
        </TouchableOpacity>
        <NextButton text='Login'/>
        <View style={styles.separador}>
            <Text style={{ color: '#AAAAAA', textDecorationLine: 'line-through' }}>                      </Text>
            <Text style={{ paddingHorizontal:15}}>O inicia sesión con</Text>
            <Text style={{ color: '#AAAAAA', textDecorationLine: 'line-through' }}>                      </Text>
        </View>
        <View style={styles.separador}>
          <ImageButton source={googleImage} text='Google'/>
          <ImageButton source={facebookImageImage} text='Facebook'/>
        </View>
        </View>  
    </View>
    
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    form:{
      gap:20,
      alignItems: 'center',
    },
    touchableText:{
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    enlace: {
        color: '#0091C0',
        margin: 10,
        textDecorationLine: 'underline',
        textAlign: 'right',
    },
    separador:{
      flexDirection: 'row',     
      margin: 10,
      justifyContent: 'space-between',
    },
});