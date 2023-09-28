import React, { useState, useEffect} from "react";
import { Button, Modal, Text, View, StyleSheet, Switch, ActivityIndicator } from "react-native";
import { Header } from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
//import { useState } from "react";

export const HomeScreen = ({navigation}) =>{

    const [isVisible, setIsVisible] = useState(false)

    const [isEnabled, setIsEnabled] = useState(false)

    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        const fetchData = async () =>{
            try {
                setIsFetching(true)
                const res = await fetch('https://rickandmortyapi.com/api/character')
                const data = await res.json()
                await delay(5000)
            } catch (error) {
                
            }finally{
                setIsFetching(false)
            }
        }
    }, [])

    const toggleSwitch = () => setIsEnabled(
        previousState => !previousState
    );

    return(
        <View style={{alignItems: 'center', justifyContent:'space-evenly', flex:1}}>
            <Modal
                animationType="slide"
                visible={isVisible}
                transparent
                onRequestClose={() => setIsVisible(false)}
            >
                <View style = {styles.modal}>
                    <Text> Modal </Text>
                    <Button title="Close Modal" onPress={() => setIsVisible(false)}/>
                </View>
            </Modal>

            <Text>Home</Text>
            <Button title="Show Modal" onPress={() => setIsVisible(true)}/>

            <Switch
                trackColor={{false: 'purple', true: 'yellow'}}
                thumbColor={isEnabled? '#00ff00':'#0000ff'}
                onValueChange={toggleSwitch}
                value= {isEnabled}
                style = {{transform: [{scaleX: 5}, {scaleY: 5}]}}
            />
            { isEnabled ? (
                <Text>Texto sorpresa</Text>
            ): null}

            <ActivityIndicator size='large' color='#00ffff'/>
            
            {isFetching ?(
                <View>
                    <Text>Cargando</Text>
                    <ActivityIndicator size='large' color='#00ffff'/>
                </View>
            ):null}
        </View>
    )
}

const styles = StyleSheet.create({
    modal:{
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
})