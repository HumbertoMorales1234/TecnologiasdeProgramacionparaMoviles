import React from "react";
import { Button, Text, View } from "react-native";
import { Header } from "../components/Header";

export const HomeScreen = ({navigation}) =>{
    return(
        <View>
            <Header/>
            <Text>Home</Text>
            <Button title="Go login" onPress={() => navigation.navigate('Login', {name: 'Beto'})}/>
        </View>
    )
}