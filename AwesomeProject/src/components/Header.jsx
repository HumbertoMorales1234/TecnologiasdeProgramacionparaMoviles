import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';


export const Header = () =>{

    const {canGoBack, goBack} = useNavigation()

    return(
        <View style={{backgroundColor: 'red', padding: 20, flexDirection: 'row', gap: 10}}>
            <AntDesign name="caretleft" size={24} color="white" disabled={!canGoBack} onPress={() =>goBack()}/>
            <Text style={{color: 'white', fontSize: 20}}>My header</Text>
        </View>
    )
}