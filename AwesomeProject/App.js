import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import { THEME } from './src/theme/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
    paddingTop: 40,
    alignItems: 'center',
    //justifyContent: 'center',
  },
});
