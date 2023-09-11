
import { Entypo } from '@expo/vector-icons';

//<Entypo name="home" size={24} color="black" />
//<Entypo name="shopping-bag" size={24} color="black" />
//<Entypo name="bell" size={24} color="black" />
//<Entypo name="user" size={24} color="black" />
import { TouchableOpacity, StyleSheet} from "react-native";
import React from 'react';

export const IconButton=({iconName, color, backgroundColor})=>{
    return(
        <TouchableOpacity style={[styles.container, {backgroundColor:backgroundColor}]}>
            <Entypo name={iconName} size={30} color={color} />
        </TouchableOpacity>            
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 15,
        width: 50,
        height: 50,
    },
});