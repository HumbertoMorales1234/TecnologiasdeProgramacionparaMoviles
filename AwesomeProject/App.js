import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, View , Alert, Modal} from 'react-native';
import { Todo } from './src/components/Todo';
import { ButtonP } from './src/components/ButtonP';
import { TodoInput } from './src/components/TodoInput';
import { THEME } from './src/theme/colors';
import { useTodos } from './src/hooks/useTodos';


export default function App() {

  const {
    // inputVal,
    // canAdd,
    // setInputVal,
    //- todos, 
    handelAddTodo,
    handleCompleteTodo,
    handleUpdateButton,
    handleDeleteTodo,
    handleUpdateInput,
    state,
  } = useTodos()


  return (
    
      <View style={styles.container}>
        <Text style={styles.tittle}>To do List</Text>
        <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
          <TodoInput 
            value={state.inputVal}
            onChangeText={(value) => handleUpdateInput(value)}
            />
          <ButtonP text={state.canAdd?'Add Task ': 'Edit Task '} light 
              onPress={handelAddTodo} 
              color={state.canAdd?THEME.COLORS.GREEN.POSITIVE:THEME.COLORS.ORANGE.WARNING} 
              iconName={state.canAdd?'plus-circle':'edit'}/>
        </View>
        <FlatList 
          data={state.toDos}
          keyExtractor={(item) => item.id}
          renderItem={(( {item: {id, nombre, isCompleted, isUpdating, updated, created} } ) => 
          <Todo nombre={nombre} id={id} updated={updated} created={created}
          handleDelete={handleDeleteTodo} handleComplete={handleCompleteTodo} handleUpdate={handleUpdateButton}
          isComplete={isCompleted} isUpdating={isUpdating}
          />)}
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