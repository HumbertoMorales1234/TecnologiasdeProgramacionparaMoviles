      
import { StyleSheet, View } from 'react-native';
import { IconButton } from '../Button/IconButton';
import { THEME } from '../../theme/colors';


export default function MainFooter() {
  return (
    <View style={styles.container}>
        <IconButton iconName={'home'} color={THEME.COLORS.WHITE} backgroundColor={THEME.COLORS.BLACK}/>
        <IconButton iconName={'shopping-bag'} color={THEME.COLORS.GREY.DARK} backgroundColor={THEME.COLORS.WHITE}/>
        <IconButton iconName={'bell'} color={THEME.COLORS.GREY.DARK} backgroundColor={THEME.COLORS.WHITE}/>
        <IconButton iconName={'user'} color={THEME.COLORS.GREY.DARK} backgroundColor={THEME.COLORS.WHITE}/>
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
