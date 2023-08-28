
import Login from './src/screens/Login';
import { StyleSheet, View} from 'react-native'; // Cualquier objeto que se pueda presionar, se necesita de la caracteristica Touchable

export default function App() {

  return (//Las funciones siempre van a retornar una etiqueta
    <View style={styles.container}> 
      <Login />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth:1,
    borderRadius: 20, 
    height: 50,
    width: 200,
    paddingHorizontal: 10,
    color: 'red'
  }
});
