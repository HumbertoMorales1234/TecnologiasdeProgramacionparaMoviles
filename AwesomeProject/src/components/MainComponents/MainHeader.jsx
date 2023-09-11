import { StyleSheet, Text, View, Image } from 'react-native';
import { THEME } from '../../theme/colors';
import { Profile } from '../../../assets';

export default function MainHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.headerText, styles.headerTextEnphasis]}>Discover</Text>
        <Text style={styles.headerText}>your products</Text >
      </View>
      <Image source={Profile} style={styles.profileImage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  textContainer:{
    flexDirection: 'column',
  },
  headerText:{
    fontSize: 30,
    color: THEME.COLORS.BLACK,
  },
  headerTextEnphasis:{
    fontWeight: '900',
    fontSize: 35,
  },
  profileImage:{
    height: 80,
    width: 70,
    borderRadius: 50,
    marginRight: -40,
  }
});