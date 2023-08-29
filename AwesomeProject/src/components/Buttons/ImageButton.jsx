import { View, TouchableOpacity, Image, Text, StyleSheet} from "react-native";


export const ImageButton=({uri, text})=>{
    return( 
        <TouchableOpacity>
            <View style={styles.container}>
                <Image style={{width:30, height:30}}  source={{uri}}/>
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
        borderColor: '#D1D1D1',
        borderWidth:2,
        borderRadius: 15,
        padding: 5,
        width:125,
        marginHorizontal: 30,
    },
    texto:{
        fontSize: 15,
        color: '#5F5F5F',
        padding: 5,
    }
});