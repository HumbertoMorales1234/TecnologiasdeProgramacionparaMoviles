import React from "react";
import { Text, View, StyleSheet, Image, ScrollView} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";
import Constants from 'expo-constants';
import { card as Card } from "../components/card";

export const WelcomeScreen = ()=> {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Ionicons name="notifications-outline" size={24} color="black"/>
                <Image
                    style={styles.headerImage}
                    source={{
                        uri:'https://i1.sndcdn.com/artworks-96JSClFLpAx79Njf-Zzf0dA-t500x500.jpg'
                    }}
                />
            </View>
            <Text style={styles.titleText}>
                <Text style={{color: '#c1c0c4'}}>Hello </Text>
                <Text style={{color: '#2b3941'}}>Chris✌️</Text>
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Card isDarkBlue={true} text={'Start Training'} icon={'hdd'} iconType={'AntDesign'}/>
                <Card isDarkBlue={false} text={'Start Training'} icon={'hdd'} iconType={'AntDesign'}/>
                <Card isDarkBlue={true} text={'Start Training'} icon={'hdd'} iconType={'AntDesign'}/>
                <Card isDarkBlue={false} text={'Start Training'} icon={'hdd'} iconType={'AntDesign'}/>
            </ScrollView>
            <Text style={styles.headerText}>What are your symptoms</Text>
            <ScrollView>
                <View style={styles.symptomsContainer}>
                    <Text style={{fontSize: 18, fontWeight: '600'}}>😁 I'm Fine</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Constants.statusBarHeight+10,
        paddingHorizontal: 15,
        width:400,
        backgroundColor: 'white',
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
        marginBottom:15,
        fontSize: 30,
        fontWeight: '900',
    },
    headerText:{
        fontSize: 25,
        color:'#495333',
        fontWeight: 'bold',
    },
    symptomsContainer:{
        backgroundColor: '#e6ebff',
        width: 125,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginTop:15,
    },
})