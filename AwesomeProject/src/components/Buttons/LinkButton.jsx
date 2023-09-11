import { TouchableOpacity, StyleSheet, Text, View} from "react-native";
import { LIGHTTHEME as THEME } from "../../theme/COLORS";
import React from 'react';

export const LinkButton=({text, link})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.buttonText}>{text}</Text>
            <Text style={[styles.buttonText, styles.buttonTextLink]}>{link}</Text>
        </View>            
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        borderColor: THEME.COLORS.GRAY.LIGHT, 
        borderRadius: 15,
        borderWidth: 2,
        paddingVertical: 15,
        width: 300,
        marginVertical: 20,
    },
    buttonText:{
        fontSize: 16,
        color: THEME.COLORS.GRAY.DARK,
        fontWeight: '600',
    },
    buttonTextLink:{
        color: THEME.COLORS.ORANGE.STRONG,
    },
});