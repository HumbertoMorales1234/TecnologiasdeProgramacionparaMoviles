import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'; 
import { THEME } from '../../theme/colors';

export const NextButton=({text})=>{
    return(
        <View>
            <TouchableOpacity style={styles.boton}>
                <Text style={styles.texto}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    boton:{
        justifyContent: 'center',
        backgroundColor: THEME.COLORS.LIGHTBLUE,
        borderRadius: 15,
        width: 300,
        paddingVertical:10,
    },
    texto:{
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
});


