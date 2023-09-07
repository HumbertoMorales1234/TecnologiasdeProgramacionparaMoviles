import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { THEME } from './src/theme/colors';
import MainScreen from './src/screens/MainScreen';

export default function App() {
  return (
    <View style={styles.container}>
        <MainScreen /> 
        {/* <Second/>  */}
        <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.ORANGE.DARK,
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    //justifyContent: 'center',
  },
});
