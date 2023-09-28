
import { StyleSheet, TouchableOpacity, Text} from "react-native";

export const NumberButton = ({text, onPress, buttonColor, textColor}) =>{
    return(
        <TouchableOpacity style={[styles.container, {backgroundColor: buttonColor}]}>
            <Text style={[styles.buttonText, {color: textColor,}]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 40,
    },
    buttonText: {
        fontSize: 20, 
        fontWeight: '500',
        textTransform: 'capitalize',
    }
})