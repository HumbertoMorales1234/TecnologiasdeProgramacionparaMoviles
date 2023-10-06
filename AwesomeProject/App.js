import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from './src/components/card';
import { AppContextProvider } from './src/context/AppContext';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './src/screens/LoginScreen';
import { DetailsScreen } from './src/screens/DetailsScreen';
import { AcountScreen } from './src/screens/AcountScreen';
import { AuthContextProvider } from './src/context/AuchContex';
import { useAuthContext } from './src/hooks/useAuthContext';

const stack = createStackNavigator()

export default function App() {


  return (
      <AuthContextProvider>
      <NavigationContainer>
        <stack.Navigator>
          {Layout()}
          {/* <stack.Screen name='Login' component={LoginScreen}/>
          <stack.Screen name='Home' component={DetailsScreen} options={{}}/>
          <stack.Screen name='Account' component={AcountScreen}/> */}
        </stack.Navigator>
      </NavigationContainer>
      </AuthContextProvider>
  );
}

const Layout = () =>{
  const {user} = useAuthContext()

  if(!user){
    return(
      <stack.Screen name='Login' component={LoginScreen}/>
    )
  }
  return(
    <>
      <stack.Screen name='Home' component={DetailsScreen} options={{}}/>
      <stack.Screen name='Account' component={AcountScreen}/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
