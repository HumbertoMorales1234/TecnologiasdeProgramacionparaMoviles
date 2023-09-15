import { StyleSheet, Text, View, Image } from 'react-native';
import { Profile } from '../../../assets';
import { AntDesign } from '@expo/vector-icons';
import { THEME } from '../../theme/colors';

export default function MainHeader() {
  return (
    <View style={styles.container}>
      <Image style={{width: 60, height:60, borderRadius:50}} source={Profile}/>
      <Text style={styles.textHeader}>Hey Alireza ✌️</Text>
      <AntDesign name="search1" size={30} color="black" />
      <AntDesign name="appstore-o" size={30} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  textHeader:{
    fontWeight:'600',
    fontSize:30,
  },
});