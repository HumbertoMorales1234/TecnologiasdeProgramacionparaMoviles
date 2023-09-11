import { Camara0, Camara2, Radio1 } from "../../../assets";
import { StyleSheet, Image, Text, View} from "react-native";
import React from 'react';
import { THEME } from "../../theme/colors";

export const ProductResult=({hash, nombre, precio, img})=>{
    return(
        <View style={styles.container}>
            <Image source={img} style={styles.productImage}/>
            <View style={{width: '100%', marginLeft: 10, marginTop: 5}}>
                <Text style={styles.hashtag}>{hash}</Text>
                <Text style={styles.productName}>{nombre}</Text>
                <Text style={styles.productPrize}>💲{precio.toFixed(2)}</Text>
            </View>
        </View>            
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.COLORS.GREY.LIGHT,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 15,
        width: 200,
        height: 300,
        marginRight: 10,
    },
    productImage:{
        height: 150,
        width: 150,
    },
    hashtag:{
        color: THEME.COLORS.GREY.DARK,
        textAlign: 'left',
    },
    productName:{
        color: THEME.COLORS.BLACK,
        fontSize: 20,
        textAlign: 'left',
    },
    productPrize:{
        color: THEME.COLORS.BLACK,
        fontWeight: '300',
        textAlign: 'left',
    },
});