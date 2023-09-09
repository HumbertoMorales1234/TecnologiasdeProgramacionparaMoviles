import React from "react";
import { Text, View, StyleSheet, Image, ScrollView, FlatList} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Constants from 'expo-constants';
import { card as Card } from "../components/card";
import { SymptomCard } from "../components/SymptomCard";
import Therapist from "../components/Therapist";
import { Menu } from "../components/Menu";
import { THERAPIST } from "../../TherapistList";
import { CARDS } from "../../CardLists";

export const WelcomeScreen = ()=> {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Ionicons name="notifications-outline" size={30} color="#2263df"/>
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
                {CARDS.map(({id, iconName, text, iconType, isDarkBlue})=>
                <Card isDarkBlue={isDarkBlue} text={text} icon={iconName} iconType={iconType}/>
                )}
            </ScrollView>
            <Text style={styles.headerText}>What are your symptoms</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <SymptomCard symptom={"😁 I'm fine"}/>
                <SymptomCard symptom={"🫥 Diarrea"}/>
                <SymptomCard symptom={"🤢 Noucius"}/>
                <SymptomCard symptom={"🤕 Headache"}/>
                <SymptomCard symptom={"🤒 Fever"}/>
            </ScrollView>
            <View style={styles.therapistTitle}>
                <Text style={styles.headerText}>Popular Therapist</Text>
                <Text style={{color:'#d4d4d7'}}>See all</Text>
            </View>
            <FlatList
                style={styles.therapistList}
                data={THERAPIST}
                renderItem={({item: {Name, job, rate,}})=>
                <Therapist name={Name} job={job} rate={rate}/>
                }
                ItemSeparatorComponent={<Text style={{fontSize: 8}}>  </Text>}
            />
            <Menu/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight,
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
        width:40,
        height: 40,
        borderRadius: 50,
    },
    titleText:{
        marginBottom:15,
        fontSize: 30,
        fontWeight: '900',
    },
    headerText:{
        fontSize: 25,
        color:'#495333',
        fontWeight: 'bold',
    },
    therapistTitle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    therapistList:{
        height:250,
    }
    
})