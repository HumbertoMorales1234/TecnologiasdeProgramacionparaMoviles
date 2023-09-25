import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { THEME } from "../../theme/colors";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { ButtonP } from "../ButtonP";



export const CharCard = ({item, navigation}) =>{

    //const {item2} = route.params

    const [episode, setEpisode] = useState(JSON)

    // Las funciones Async van fuera del useEffect
    const getApiData = async () =>{
        try {
            const response = await fetch(item.episode[0])
            const data = await response.json()
            setEpisode(data)
        } catch (error) {
            console.log('Error', error.toString())
        }
    }

    useEffect(() =>{
        getApiData()
    },[])

    const StatusCheck = (status) =>{
        if(status ==="Alive") return(<Ionicons name="heart-circle-outline" size={24} color={THEME.COLORS.GREEN.POSITIVE} />)
        else if (status === "Dead") return(<Ionicons name="skull-outline" size={20} color={THEME.COLORS.RED.WARNING} />) 
        else return(<AntDesign name="questioncircleo" size={18} color={THEME.COLORS.GREY.noSTATUS} />)
    }

    const GenderCheck = (gender) => {
        if(gender ==="Male") return(<Foundation name="male-symbol" size={24} color={THEME.COLORS.BLUE.COMPLETE} />)
        else if (gender === "Female") return(<Foundation name="female-symbol" size={24} color={THEME.COLORS.RED.WARNING} />) 
        else return(<AntDesign name="questioncircleo" size={20} color={THEME.COLORS.GREY.noSTATUS} />)
    }

    return(
    <View style={styles.container}>
        <Image source={{uri: item.image }} 
            style={styles.imageStyle}
        />
        <View style={styles.infoConteiner}>
            <View style={styles.rowsTextContainer}>
                <Text style={[styles.generalText, styles.nameText]}>{item.name}</Text>
                {GenderCheck(item.gender)}
                <ButtonP iconName={'eye'} color={THEME.COLORS.BLUE.LABELS} onPress={() => navigation.navigate('Character Info.', {item: item})}/>
            </View>

            <View style={styles.rowsTextContainer}>
                {StatusCheck(item.status)}
                <Text style={styles.generalText}>{item.status}</Text>
                <Text style={styles.generalText}>-</Text>
                <Text style={styles.generalText}>{item.species}</Text>
            </View>
            
            <View>
                <Text style={styles.labeText}>Last Location:</Text>
                <Text style={styles.generalText}>{item.location.name}</Text>
            </View>
            <View>
                <Text style={styles.labeText}>First seen:</Text>
                <Text style={styles.generalText}>{episode.name}</Text>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
//        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        backgroundColor: THEME.COLORS.GREY.CARDS,
        gap: 40,
        maxWidth: 390,
    },
    infoConteiner:{
        gap: 5,
        maxWidth: 200
    },
    rowsTextContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    generalText:{
        color: 'white',
    },
    labeText:{
        color: THEME.COLORS.GREY.noSTATUS
    },
    nameText:{
        fontSize: 20,
        maxWidth: 130,
        fontWeight: '600',
    },
    imageStyle:{
        width: 120,
        height: 120,
        borderRadius: 20,
    }
})