
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, Text} from "react-native";
import React from 'react';
import { THEME } from '../../theme/colors';

export const SelectedFilters=({filter})=>{
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.filterText}>{filter}</Text>
            <Entypo name="cross" size={16} color={THEME.COLORS.GREY.DARK} />
        </TouchableOpacity>            
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 15,
        width: 'auto',
        paddingHorizontal: 10,
        height: 40,
        backgroundColor: '#fff',
        gap: 10,

        marginRight: 10,
    },
    filterText:{
        color: THEME.COLORS.GREY.DARK,
        fontSize: 16,
        textTransform: 'capitalize',
    }
});