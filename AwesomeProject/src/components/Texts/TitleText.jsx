import {Text, StyleSheet} from "react-native";
import { LIGHTTHEME as THEME } from "../../theme/COLORS";

export const TitleText=({text, orientation,})=>{
    return(
        <Text style={[
            styles.title, 
            {textAlign:orientation} 
        ]}>
            {text}
        </Text>
    );
}
const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: '600',
        color: THEME.COLORS.BLACK,
        paddingTop: 40,
        marginVertical:10,
    },
});