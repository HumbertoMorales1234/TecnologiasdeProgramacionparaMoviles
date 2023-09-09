
import { StyleSheet, View,} from 'react-native';
import { WelcomeScreen } from './src/screens/WelcomeScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
});
