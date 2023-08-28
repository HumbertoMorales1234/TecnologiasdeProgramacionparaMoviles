import {View, Text} from 'react-native'; // Cualquier objeto que se pueda presionar, se necesita de la caracteristica Touchable

export default function App() {

  return (//Las funciones siempre van a retornar una etiqueta
    <View style={styles.container}> 
      <Text> Content </Text>
    </View>
    
  );
}