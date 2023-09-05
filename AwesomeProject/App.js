import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as ReactStatus, SafeAreaView, Platform} from 'react-native';
//* SafeAreaView: Solo funciona en IOS, la statusbar de react-native solo funciona en android
//
import Constants from 'expo-constants'; // npx expo install expo-constants
//? Provee componentes compatibles con Android y IOS
//import { BsFillBellFill } from 'react-icons'; //! Solo funciona en React
import {Ionicons} from '@expo/vector-icons' //? iconos de expo
import { IosText } from './IosText';
import { WebText } from './WebText';


const CustomText = Platform.select({
  android: () => IosText,
  Web: () => WebText,
})();

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text>Wallet</Text>
          <View>
              <Ionicons name='notifications' size={50} color='#F0F'/>
              <Ionicons name='person-circle' size={50} color='#F0F'/>      
          </View>
      </View>
      <CustomText/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: Platform.OS === 'web' ? '#000000': '#FFFFFF',
    backgroundColor: Platform.select({
      android:'green',
      ios: 'blue',
      web: 'black',
    }),
    paddingTop: Constants.statusBarHeight, // *Funciona en IOS y Android
    //? paddingTop: ReactStatus.currentHeight, // Este componente solo funciona en android
    ...Platform.select({
      ios:{
        backgroundColor: 'cyan',
        paddingTop: 20,
      },
      web:{
        backgroundColor: 'yellow'
      }
    }),
  },
  header: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
});
