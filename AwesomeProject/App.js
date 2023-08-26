import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { StyledText } from './src/components/StyledText';
import { StyledButton } from './src/components/StyledButton';


export default function App() {
  
  return (
    <View style={styles.container}>

      <StyledText text='Texto Customizado' fontSize={40} fontStyle={'italic'} 
      textDecorationLine={'underline'} color={'#ED007A'} fontWeight={'500'} padding={10}/>

      <StyledButton text='Botón Customizado' borderWidth={1.5} borderColor={'#ffff'} padding={9} borderRadius={15} backgroundColor={'#FFEAF6'}
      fontSize={20} fontStyle={'normal'} color={'#474747'} 
     />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC3E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
