import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet} from "react-native";
import { THEME } from "../theme/Colors";
import { AntDesign } from '@expo/vector-icons';


export const CustomHeader = () =>{

    const {canGoBack, goBack} = useNavigation()

    return(
        <View style={styles.container}>
            <View style= {styles.menuContainer}>
                <AntDesign name="left" size={24} color="grey" onPress={() => goBack()} />
                    <Text style={styles.tittle}>$234 000 000</Text>
                <AntDesign name="close" size={24} color="grey" onPress={() => goBack()}/>
            </View>
                <Text>UroMillions</Text>
            <View style={styles.timeContainer}>
                <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                    <AntDesign name="calendar" size={24} color="black" />
                    <Text>Today</Text>
                </View>
                <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                    <AntDesign name="clockcircleo" size={24} color="black" />
                    <Text>10:11:00</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 10, 
        
        //paddingVertical: 20
    },
    menuContainer:{
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
    },
    timeContainer:{
        flexDirection: 'row',
        backgroundColor: THEME.COLORS.SHADING.BROWN,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '60%',
    },
    tittle: {
        fontSize: 30, 
        fontWeight: '600',
        textAlign: 'center',
    },
    description:{
        color: 'white',
        textAlign: 'center',
        maxWidth: 250,
        
    }
})