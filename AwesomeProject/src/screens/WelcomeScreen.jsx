import React from "react";
import { Text, View, StyleSheet, Image, ScrollView} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";
import { card as Card } from "../components/card";

export const WelcomeScreen = ()=> {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Ionicons name="notifications-outline" size={24} color="black"/>
                <Image
                    style={styles.headerImage}
                    source={{
                        uri:''
                    }}
                />
            </View>
            <Text style={styles.titleText}>
                <Text style={{color: '#c1c0c4'}}>Hello</Text>
                <Text style={{color: '#2b3941'}}>Chris</Text>
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Card />
                <Card />
                <Card />
                <Card />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:10,
        paddingHorizontal: 15,
    },
    headerContainer:{
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerImage:{
        width:50,
        height: 50,
        borderRadius: 50,
    },
    titleText:{
        marginTop: 15,
        fontSize: 30,
        fontWeight: '900',
    },
})