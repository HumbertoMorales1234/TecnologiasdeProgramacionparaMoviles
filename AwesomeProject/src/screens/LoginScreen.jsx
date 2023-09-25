import React from "react";
import { Text, View } from "react-native";

export const LoginScreen = ({navigation, route}) =>{

    const {name}  = route.params

    return(
        <View>
            <Text>Login {name}</Text>
        </View>
    )
}