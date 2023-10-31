import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  // const multiplyCounter = () =>{
  //   setCounter(counter*2)
    
  //   console.log('counter', counter)
  //   return counter*2
  // }

  const multiplyCounter = useMemo(()=>{
    console.log('counter', counter)
    return counter*2
  }, [counter])

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 80}}>C1: {counter}</Text>
      <Text style={{fontSize: 80}}>C2: {counter2}</Text>
      <Text style={{fontSize: 20}}>Mp: {multiplyCounter}</Text>

      <TouchableOpacity
        style={{borderWidth: 1, padding: 10, width: 300, borderRadius: 20, alignItems: 'center'}}
        onPress={() => multiplyCounter}
      >
          <Text style={{fontSize: 20}}>Multiply</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />

      <TouchableOpacity
        style={{borderWidth: 1, padding: 10, width: 300, borderRadius: 20, alignItems: 'center'}}
        onPress={() => setCounter2(counter2+1)}
      >
          <Text style={{fontSize: 20}}>Increment C2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{borderWidth: 1, padding: 10, width: 300, borderRadius: 20, alignItems: 'center'}}
        onPress={() => setCounter(counter+1)}
      >
          <Text style={{fontSize: 20}}>Increment C1</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={{borderWidth: 1, padding: 10, width: 300, borderRadius: 20, alignItems: 'center'}}
        onPress={() => {setCounter(0), setCounter2(0)}}
      >
          <Text style={{fontSize: 20}}>Reset</Text>
      </TouchableOpacity>
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
    gap:20,
  },
});
