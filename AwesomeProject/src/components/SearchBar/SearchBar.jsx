import { StyleSheet, View, TextInput} from "react-native";
import { THEME } from "../../theme/colors";
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export const SearchBar=()=>{
    return(
        <View style={styles.container}>
            <AntDesign name="search1" size={24} color={THEME.COLORS.GREY.DARK} />
            <TextInput value="Divoom"  style={styles.searchText}/>
        </View>            
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: 'white', 
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: 280,
        marginVertical: 20,
        borderRadius: 20,
        gap:20,
    },
    searchText:{
        fontSize: 20,
        color: THEME.COLORS.BLACK,
        fontWeight: '600',
    },
});