import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react'; // Baja solo el hook useState
//import React from 'react'; //Bajar todo lo que tiene react

//Hooks

//Custom hooks

export default function App() {

  //const state = useState(1) //Pasar parametros aqui es pasar el valor del primer estado
  const [state, setSatate] = useState(1)
  const [inputValue, setInputValue] = useState('Value')

  //console.log(state[0], '----State 0----')
  //*console.log(state, '----State 0----')
  //console.log(state[1], '----State 1----') //En posición uno siempre hay una función
  //*console.log(setSatate, '----State 1----') //En posición uno siempre hay una función

  const sumValue= ()=>{
    setSatate(state+1) // State por si mismo no es modificable, es necesario usar una función adicional
  }
  return (
    
      <View style={styles.container}>
        {/* <Text>{state}</Text> */}
        {/* <Text>{JSON.stringify(state)}</Text> Parsear objetos a string para poder imprimirlos */}
        {/* <TouchableOpacity style={{borderWidth:1, padding: 5}} */}
        {/* onPress={sumValue}> */}
        {/* onPress={() =>sumValue()}Para poder usar parametros */}
          {/* <Text>Change Value</Text> */}
        {/* </TouchableOpacity> */}
        <TextInput value={inputValue}
        onChangeText={(value) => setInputValue(value)}/>
        <Text>Value: {inputValue}</Text>
        <StatusBar style="auto" />
      </View>
    
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
