import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import ToDoScreen from './src/screens/toDoScreen';
import { store } from './src/store';

//* Redux
//npm install @reduxjs/toolkit
//npm install react-redux

export default function App() {
  return (
    <Provider store={store}>
      <ToDoScreen/>
    </Provider>
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
