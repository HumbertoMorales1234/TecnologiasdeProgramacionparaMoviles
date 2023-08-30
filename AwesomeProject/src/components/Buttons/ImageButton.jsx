import { View, TouchableOpacity, Image, Text, StyleSheet} from "react-native";
import { THEME } from '../../theme/colors';

export const ImageButton=({source, text})=>{
    return( 
        <TouchableOpacity>
            <View style={styles.container}>
                <Image style={{width:30, height:30}}  source={source}/>
                <Text style={styles.texto}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
        borderColor: THEME.COLORS.LIGHTGREY,
        borderWidth:2,
        borderRadius: 15,
        padding: 5,
        width:125,
        marginHorizontal: 30,
    },
    texto:{
        fontSize: 15,
        color: THEME.COLORS.MIDDLEGREY,
        padding: 5,
    }
});