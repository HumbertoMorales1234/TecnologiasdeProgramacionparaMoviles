import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Router } from './src/routes/router';
import { HomeScreen } from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';


//npm install @react-navigation/native
//npx expo install react-native-screens react-native-safe-area-context
//npm install @react-navigation/stack
//npx expo install react-native-gesture-handler

const Stack = createStackNavigator()

export default function App() {

  return (
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Login' component={LoginScreen}/>
          </Stack.Navigator>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
});