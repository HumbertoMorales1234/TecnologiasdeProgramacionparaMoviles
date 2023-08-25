import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; // Cualquier objeto que se pueda presionar, se necesita de la caracteristica Touchable
import { StyledText } from './src/components/StyledText';

export default function App() {
  return (//Las funciones siempre van a retornar una etiqueta
    <View style={styles.container}> 
      <Text style={styles.text}>Texto Simple</Text>
      <StyledText text='Custom Styled text' fontSize={40}/>
      <StyledText text='Custom Styled text 2' fontSize={20}/>
      
      <TouchableOpacity style={styles.button}>
        <Text> Boton </Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />

    </View>
  );
}

// const Card = () =>{
// Funciones flecha
// }

// Ojeto que se guarda en un objeto llamado styles
// Se puede trabajar los estilos en otro documento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C30Bf4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue'
  },
  button: {
    borderWidth: 3,
    padding: 10,
  }
});
