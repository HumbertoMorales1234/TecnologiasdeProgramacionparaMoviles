import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Card } from './src/components/card';
import { AppContextProvider } from './src/context/AppContext';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './src/screens/LoginScreen';
import { DetailsScreen } from './src/screens/DetailsScreen';
import { AcountScreen } from './src/screens/AcountScreen';
import { AuthContextProvider } from './src/context/AuchContex';
import { Layout } from './src/Layout/Layout';

// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/stack
// npx expo install react-native-gesture-handler

export default function App() {

  return (
      <AuthContextProvider>
        <Layout/>
      </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
