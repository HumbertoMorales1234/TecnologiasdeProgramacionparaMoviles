import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { Todo } from './src/components/Todo';
import { ButtonP } from './src/components/ButtonP';
import { TodoInput } from './src/components/TodoInput';
import { THEME } from './src/theme/colors';


export default function App() {

  const [todos, setTodo] = useState([])
  const [inputVal, setInputVal] = useState('')

  const handelAddTodo = () => {
    if (inputVal === '')return
    setTodo([
      ...todos, //Spread operator, mantener lo que ya había
      {
        id: new Date().toISOString(), 
        name:inputVal, 
        isCompleted: false
      }
    ])
    setInputVal('')
  }

  const sumValue= ()=>{
    setSatate(state+1) // State por si mismo no es modificable, es necesario usar una función adicional
  }
  return (
    
      <View style={styles.container}>
        <Text style={styles.tittle}>To do List</Text>
        <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
          <TodoInput 
            value={inputVal}
            onChangeText={(value) => setInputVal(value)}
            />
          <ButtonP text={'Add Task'} light onPress={handelAddTodo} iconName={'plus-square'} color={THEME.COLORS.GREEN.POSITIVE} />
        </View>
        <FlatList 
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={(( {item: {name} } ) => <Todo nombre={name}/>)}
        />
        <StatusBar style="auto" />
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.BLUE.BACKGROUND,
  },
  tittle:{
    fontSize: 40, 
    fontWeight: 'bold',
    textAlign:'center', 
    color:'white',
    margin: 20,
  },
});