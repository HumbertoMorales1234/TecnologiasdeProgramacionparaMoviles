import { TextInput, View, StyleSheet, Text} from "react-native";
import { LIGHTTHEME as THEME } from "../../theme/COLORS";

export const StyledTextInput=({placeholder, type, label, secureTextEntry})=>{
    return(
        <View>
            <Text style={styles.label} >{label}</Text>
            <TextInput style={styles.TextInput} placeholder={placeholder} type={type} secureTextEntry={secureTextEntry}/>
        </View>
    );
}
const styles = StyleSheet.create({
    TextInput: {
        borderBottomWidth: 1,
        borderColor: THEME.COLORS.GRAY.DARK, 
        paddingHorizontal: 10,
        width:300,
        paddingBottom: 10,
        paddingTop: 15,
        color: THEME.COLORS.BLACK,
    },
    label:{
        fontSize: 15,
        color: THEME.COLORS.GRAY.DARK,
    },
});