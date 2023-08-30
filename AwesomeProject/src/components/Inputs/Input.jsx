import { TextInput, View, StyleSheet, Text} from "react-native";
import { THEME } from '../../theme/colors';

export const StyledInput=({placeholder, type, label, secureTextEntry})=>{
    return(
        <View>
            <Text style={styles.label} >{label}</Text>
            <TextInput style={styles.container} placeholder={placeholder} type={type} placeholderTextColor={THEME.COLORS.MIDDLEGREY} secureTextEntry={secureTextEntry}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.COLORS.WHITE,
        borderWidth: 1,
        borderColor: THEME.COLORS.LIGHTGREY, 
        borderRadius: 15,
        paddingHorizontal: 15,
        width:300,
        height: 60,
        color: THEME.COLORS.DARKGREY,
    },
    label:{
        fontSize: 15,
        color: THEME.COLORS.MIDDLEGREY,
    },
});