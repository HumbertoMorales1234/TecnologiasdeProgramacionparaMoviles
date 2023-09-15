      
import { StyleSheet, View } from 'react-native';
import { THEME } from '../../theme/colors';


export default function MainFooter() {
  return (
    <View style={styles.container}>

    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'flex-end',
      width: '100%'
      //justifyContent: 'center',
    },
  });
