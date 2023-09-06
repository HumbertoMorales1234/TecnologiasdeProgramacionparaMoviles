import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";

export const card = ()=> {
    return(
        <View>
            <View style={styles.cardContainer}>
                    <View style={styles.cardText}>
                        <AntDesign name="hdd" size={30} color="white" />
                    </View>
                    <Text>Start training</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        gap:30,
        paddingHorizontal: 20,
        height:200,
        width:200,
        backgroundColor: '#e6ecff',
        borderRadius:40,
    },
    cardIconContainer:{
        backgroundColor: '#2362df',
        width: 50,
        height: 50,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 52,
    },
    cardText:{
        fontSize:25,
        fontWeight: 'bold',
        color: '#48525e'
    }
})