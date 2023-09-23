import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, View , Alert, Modal} from 'react-native';
import { CharactersScreen } from './src/screens/CharactersScreen';
import { THEME } from './src/theme/colors';


export default function App() {

  return (
    
      <View style={styles.container}>
        <CharactersScreen/> 
        <StatusBar style="auto" />
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: THEME.COLORS.GREY.BACKGROUND,
  },
  tittle:{
    fontSize: 40, 
    fontWeight: 'bold',
    textAlign:'center', 
    color:'white',
    margin: 20,
  },
});