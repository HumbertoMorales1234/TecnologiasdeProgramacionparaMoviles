import React from "react";
import { Button, Text, View } from "react-native";

export const HomeScreen = ({navigation}) =>{
    return(
        <View>
            <Text>Home</Text>
            <Button title="Go login" onPress={() => navigation.navigate('Login', {name: 'Beto'})}/>
        </View>
    )
}