import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components/Header";

export const LoginScreen = ({navigation, route}) =>{

    const {name}  = route.params

    const {canGoBack, goBack} = useNavigation()

    console.log(navigation)

    return(
        <View>
            <Header/>
            <Text>Login {name}</Text>
            <Button title="Go Back" disabled={!canGoBack} onPress={() => goBack()}/>
        </View>
    )
}