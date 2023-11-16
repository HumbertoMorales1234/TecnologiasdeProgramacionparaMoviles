import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View,} from 'react-native';
import { Todo } from '../components/Todo';
import { ButtonP } from '../components/ButtonP';
import { TodoInput } from '../components/TodoInput';
import { THEME } from '../theme/colors';
import { 
    handleAddToDo,
    handleDeleteToDo,
    handlePressEditToDo,
    handleCompleteToDo, 
    setInputValue,} from '../features/todoSlice'

import { useSelector, useDispatch } from 'react-redux'


export default function ToDoScreen() {
    const inputVal = useSelector((state) => state.toDo.inputVal)
    const todos = useSelector((state) => state.toDo.toDos)
    const canAdd = useSelector((state) => state.toDo.canAdd)
    const dispatch = useDispatch()


  return (
    
      <View style={styles.container}>
        <Text style={styles.tittle}>To do List</Text>
        <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
          <TodoInput 
            value={inputVal}
            onChangeText={(value) => dispatch(setInputValue(value))}
            />
          <ButtonP text={canAdd?'Add Task ': 'Edit Task '} light 
              onPress={() => dispatch(handleAddToDo({action: ''}))} 
              color={canAdd?THEME.COLORS.GREEN.POSITIVE:THEME.COLORS.ORANGE.WARNING} 
              iconName={canAdd?'plus-circle':'edit'}/>
        </View>
        <FlatList 
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={(( {item: {id, name, isCompleted, isUpdating, updated, created} } ) => 
          <Todo nombre={name} id={id} updated={updated} created={created}
          handleDelete={() => dispatch(handleDeleteToDo(id))} 
          handleComplete={() => dispatch(handleCompleteToDo(id))} 
          handleUpdate={() => dispatch(handlePressEditToDo(id))}
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