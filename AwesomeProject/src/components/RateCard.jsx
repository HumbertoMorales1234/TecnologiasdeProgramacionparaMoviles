
import { StyleSheet, TouchableOpacity, Text, View} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { THEME } from "../theme/Colors";

export const RateCard = ({text, isEnabled}) =>{
    return(
        <View style={styles.container}>
            <View style={{gap: 10}}>
                <Text style={styles.labelText}>Rate Type</Text>
                <Text style={[styles.labelText, styles.titleText]}>{text}</Text>
            </View>
            <View style={{flexDirection: 'row-reverse', justifyContent: 'left',}}>
                <TouchableOpacity style={[styles.enabledButton, isEnabled&&{backgroundColor: THEME.COLORS.BUTTONS.ORANGE}]}>
                    <AntDesign name="check" size={24} color={isEnabled?'white':'grey'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
//        alignItems: 'center',
        justifyContent: 'space-between',
        height: 180,
        width: 180,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'white',
        marginLeft: 5,
    },
    enabledButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: THEME.COLORS.BUTTONS.DISABLED,
    },
    labelText:{
        fontWeight: '600',
        fontSize: 15,
        color: 'grey',
    },
    titleText: {
        color: 'black',
        fontSize: 20,
    }
})