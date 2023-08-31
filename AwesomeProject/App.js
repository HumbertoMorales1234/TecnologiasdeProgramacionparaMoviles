import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import StyledFlatlist from './src/components/StyledFlatlist'

const DATA=[
  {id: 0, name: 'Joe', lastname: 'Deckard'},
  {id: 1, name: 'Beto', lastname: 'Morales'},
  {id: 2, name: 'Gustavo', lastname: 'Avila'},
  {id: 3, name: 'Maryjose', lastname: 'Contreras'},
  {id: 4, name: 'Ismael', lastname: 'Diaz'},
  {id: 5, name: 'Pau', lastname: 'Crespo'},
  {id: 6, name: 'Teresa', lastname: 'Rivera'},
  {id: 7, name: 'Marco', lastname: 'Solis'},
  {id: 8, name: 'Sebastian', lastname: 'Castro'},
  {id: 9, name: 'Luis', lastname: 'Reynaldo'},
  {id: 10, name: 'Kratos', lastname: 'Nose'},
  {id: 11, name: 'José', lastname: 'Madero'},
  {id: 12, name: 'Miguel', lastname: 'Hidalgo'},
]

//Flatlist permite renderizar varios elementos a manera de scroll
export default function App() {
  return (
    <View style={styles.container}>
      {/*<Login/> */}
      <FlatList data={DATA} style={styles.lista} 
      renderItem={({item: {name, lastname}, index})=>
        <StyledFlatlist name={name} lastname={lastname} index={index}/>
      }
      ItemSeparatorComponent={<View style={styles.separador}></View>}
      keyExtractor={({id}) => id}
      />
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    paddingHorizontal:8
  },
  lista: {
    borderWidth:1,
    borderColor: '#808080',
    borderRadius: 20,
    margin: 5,
    padding: 1,

  },
  separador:{
    borderWidth:1, 
    borderColor: '#808080',
    marginHorizontal: 3,
  },
});
