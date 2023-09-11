import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainHeader from '../components/MainComponents/MainHeader';
import { THEME } from '../theme/colors';
import MainContent from '../components/MainComponents/MainContent';
import MainFooter from '../components/MainComponents/MainFooter';


export default function MainScreen() {
  return (
    <View style={styles.container}>
      <MainHeader/>
      <MainContent/>
      <MainFooter/>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: THEME.COLORS.WHITE,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      gap:10,
      //justifyContent: 'center',
    },
  });
