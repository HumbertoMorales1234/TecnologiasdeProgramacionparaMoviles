import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, View , Alert} from 'react-native';
import { useState } from 'react';
import { Todo } from './src/components/Todo';
import { ButtonP } from './src/components/ButtonP';
import { TodoInput } from './src/components/TodoInput';


export default function App() {

  const [todos, setTodo] = useState([])
  const [inputVal, setInputVal] = useState('')

  const handleShowError =(error)=>
      Alert.alert('Error', error, [{text: 'Aceptar'}])
    
  
  const handelAddTodo = () => {
    if (inputVal === '')return(handleShowError('La tarea debe tener un nombre'))

    const existingTodo=todos.some( todo=> todo.name.toLowerCase() === inputVal.toLowerCase())

    if (existingTodo) return handleShowError('La tarea ya existe')

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
  
  const handleDeleteTodo = (todoId) => {
    const filteredArray = todos.filter(todo=> todo.id !== todoId)

    setTodo(filteredArray)
  }

  const handleCompleteTodo = (todoId) => {
    const mappedArray = todos.map( todo =>{
      if (todo.id === todoId){
        return {
          ...todo, 
          isCompleted: true
        }
      }
      return todo
    })
    setTodo(mappedArray)
  }
  

  return (
    
      <View style={styles.container}>
        <Text style={styles.tittle}>To do List</Text>
        <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
          <TodoInput 
            value={inputVal}
            onChangeText={(value) => setInputVal(value)}
            />
          <ButtonP text={'Add Task'} light onPress={handelAddTodo} />
        </View>
        <FlatList 
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={(( {item: {id, name, isCompleted} } ) => <Todo nombre={name} id={id} handleDelete={handleDeleteTodo} completed={isCompleted} handleComplete={handleCompleteTodo}/>)}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#296355'
  },
  tittle:{
    fontSize: 40, 
    fontWeight: 'bold',
    textAlign:'center', 
    color:'white',
    margin: 20,
  },
});