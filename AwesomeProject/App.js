import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


//Unidad1Práctica1
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Cambio uno</Text>
      <Text>Cambio dos</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});