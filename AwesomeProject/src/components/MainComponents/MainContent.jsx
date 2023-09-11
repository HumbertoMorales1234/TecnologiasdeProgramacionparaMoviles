import { ScrollView, StyleSheet, Text, View} from 'react-native';
import { IconButton } from '../Button/IconButton';
import { THEME } from '../../theme/colors';
import { SearchBar } from '../SearchBar/SearchBar';
import { SelectedFilters } from '../SearchBar/SelectedFilters';
import { Products } from '../../constants/Products';
import { ProductResult } from '../SearchBar/ProductResult';

export default function MainContent() {
  return (
    <View style={styles.container}>

      <View style={styles.searchBar}>
        <SearchBar/>
        <IconButton iconName={'sound-mix'} color={THEME.COLORS.BLACK} backgroundColor={THEME.COLORS.YELLOW}/>
      </View>
      <View style={{height: 50}}>  
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SelectedFilters filter={'miniso'}/>
            <SelectedFilters filter={'Neurso'}/>
        </ScrollView>
      </View>
      <Text style={styles.tittle}>Popular Product</Text>
      <View style={{height: 300}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Products.map(({id, hash, nombre, precio, img})=>
              <ProductResult hash={hash} nombre={nombre} precio={precio} img={img}/>
          )}
        </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    paddingLeft: 30,
  },
  searchBar:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  tittle:{
    fontSize: 30,
    fontWeight: '600',
  },
});