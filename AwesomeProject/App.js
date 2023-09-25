import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { CharactersScreen } from './src/screens/CharactersScreen';
import { THEME } from './src/theme/colors';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { CharInfoScreen } from './src/screens/CharInfoScreen';

const StackNav = createStackNavigator()

export default function App() {

  return (
      <NavigationContainer>
        <View style={styles.container}>
          <StackNav.Navigator initialRouteName='Characters' 
            screenOptions={{headerTitleStyle:{ 
              fontWeight: '600', fontSize: 20
              },
              headerStyle:{
                backgroundColor: THEME.COLORS.GREY.BACKGROUND,
              }, 
              headerTintColor: 'white'
            }} >
            <StackNav.Screen name='Characters' component={CharactersScreen}/>
            <StackNav.Screen name='Character Info.' component={CharInfoScreen}/>
          </StackNav.Navigator> 
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: THEME.COLORS.GREY.BACKGROUND,
  },
  headerTitleStyle:{
    fontWeight: '900',
    fontFamily: 40,
  },
});