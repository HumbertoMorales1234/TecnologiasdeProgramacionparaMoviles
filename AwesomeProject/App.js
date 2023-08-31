import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import StyledFlatlist from './src/components/StyledFlatlist'

const DATA=[
  {id: 0, name: 'Beto', lastname: 'Morales'},
  {id: 1, name: 'Beto', lastname: 'Morales'},
  {id: 2, name: 'Beto', lastname: 'Morales'},
  {id: 3, name: 'Beto', lastname: 'Morales'},
  {id: 4, name: 'Beto', lastname: 'Morales'},
  {id: 5, name: 'Beto', lastname: 'Morales'},
  {id: 6, name: 'Beto', lastname: 'Morales'},
  {id: 7, name: 'Beto', lastname: 'Morales'},
]

//Flatlist permite renderizar varios elementos a manera de scroll
export default function App() {
  return (
    <View style={styles.container}>
      {/*<Login/> */}
      <FlatList data={DATA} 
      renderItem={({item: {name, lastname}, index})=>
        <StyledFlatlist name={name} lastname={lastname} index={index}/>
      }
      ItemSeparatorComponent={<Text>a</Text>}
      keyExtractor={({id}) => id}
      />
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
  },
});
