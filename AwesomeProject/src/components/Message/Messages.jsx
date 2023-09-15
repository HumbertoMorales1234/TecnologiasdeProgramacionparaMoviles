
import { TouchableOpacity, StyleSheet, View, Image, Text} from "react-native";
import React from 'react';
import { THEME } from "../../theme/colors";

export const Messages=({nombre, img, message, messages})=>{
    return(
        <TouchableOpacity style={styles.container}>
            <Image source={img} style={styles.imageProfile}/>
            <View style={{alignItems: 'flex-start'}}>
                <Text style={styles.nameText}>{nombre}</Text>
                <Text style={styles.messageText}>{message}</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.messageText}>12:00</Text>
                <View style={styles.notifcationText}>
                    <Text style={{color: 'white'}}>{messages}</Text>
                </View>
            </View>
        </TouchableOpacity>  
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-around',
        marginRight: 10,
    },
    imageProfile:{
        width:50,
        height: 50,
    },
    nameText:{
        fontWeight: '600',
        fontSize: 20,
    },
    messageText:{
        color: '#b5b5b5'
    },
    notifcationText:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 50,
        width: 20,
        height:20,
    },
});