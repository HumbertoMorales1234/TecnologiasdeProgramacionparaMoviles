import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../theme/colors';
import MainHeader from '../components/MainComponents/MainHeader';
import MainContent from '../components/MainComponents/MainContent';


export default function MainScreen() {
  return (
    <View style={styles.container}>
      <MainHeader/>
      <MainContent/>
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
