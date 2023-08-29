import { TextInput, View, StyleSheet, Text} from "react-native";

export const StyledInput=({placeholder, type, label})=>{
    return(
        <View>
            <Text style={styles.label} >{label}</Text>
            <TextInput style={styles.container} placeholder={placeholder} type={type} placeholderTextColor="#9D9D9D"/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#D1D1D1', 
        borderRadius: 15,
        paddingHorizontal: 15,
        width:300,
        height: 60,
        color: '#3A3A3B',
    },
    label:{
        fontSize: 15,
        color: "#656565",
    },
});