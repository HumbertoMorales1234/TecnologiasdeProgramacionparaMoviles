
import { TouchableOpacity, StyleSheet, View, Image, Text} from "react-native";
import React from 'react';
import { THEME } from "../../theme/colors";

export const stories=({nombre, img})=>{
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={img} style={styles.imageProfile}/>
            </View>
            <Text>{nombre}</Text>
        </TouchableOpacity>  
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    imageContainer:{
        borderColor: '#f052f1',
        borderRadius: 50,
        padding:2,
        borderWidth: 1,
    },
    imageProfile:{
        width:50,
        height: 50,
    }
});