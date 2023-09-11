import { TouchableOpacity, StyleSheet, Text, View} from "react-native";
import { LIGHTTHEME as THEME } from "../../theme/COLORS";
import React from 'react';

export const AcceptButton=({text})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>            
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        backgroundColor: THEME.COLORS.ORANGE.STRONG, 
        borderRadius: 15,
        paddingVertical: 15,
        width: 300,
        marginVertical: 20,
    },
    buttonText:{
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
    },
});