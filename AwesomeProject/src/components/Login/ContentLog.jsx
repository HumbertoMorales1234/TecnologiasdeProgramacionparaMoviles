import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'; // Cualquier objeto que se pueda presionar, se necesita de la caracteristica Touchable
import { StyledInput } from '../Inputs/Input';
import { NextButton } from '../Buttons/Next';
import { ImageButton } from '../Buttons/ImageButton';


export default function ContentLog() {
  return (
    <View style={styles.container}> 
        <StyledInput placeholder='email' type='email' label='Email'/>
        <StyledInput placeholder='password' type='password' label='Password'/>
        <TouchableOpacity>
            <Text style={styles.enlace}>¿Olvidaste la Contraseña?</Text>
        </TouchableOpacity>
        <NextButton text='Login'/>
        <View style={styles.separador}>
            <Text style={{ color: '#AAAAAA', textDecorationLine: 'line-through' }}>                      </Text>
            <Text style={{ paddingHorizontal:15}}>O inicia sesión con</Text>
            <Text style={{ color: '#AAAAAA', textDecorationLine: 'line-through' }}>                      </Text>
        </View>
        <View style={styles.separador}>
          <ImageButton uri="https://img.freepik.com/iconos-gratis/buscar_318-265146.jpg?w=2000" 
          text='Google'/>
          <ImageButton uri="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" 
          text='Facebook'/>
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
    enlace: {
        color: '#0091C0',
        textAlign: 'left',
        margin: 10,
        textDecorationLine: 'underline'
    },
    separador:{
      flexDirection: 'row',     
      margin: 10,
      justifyContent: 'space-between',
    },
});