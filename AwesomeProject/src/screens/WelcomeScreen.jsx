
import { View, Text, StyleSheet, Image} from "react-native";
import { THEME } from "../theme/Colors";
import { Lottery } from "../../assets";
import { ColorButton } from "../components/ColorButton";

export const WelcomeScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style= {{justifyContent: 'center', alignItems:'center'}}>
                <Text style={styles.tittle}>Play and Win!</Text>
                <Text style={styles.description}>Game for anyone who likes to try luck at guessing numbers</Text>
            </View>
            <Image source={Lottery} style={styles.image}/>
            <ColorButton text='Get Started' buttonColor={THEME.COLORS.BUTTONS.ORANGE} textColor='white' onPress={() => navigation.navigate('Ticket')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: THEME.COLORS.BACKGROUNG.GREEN,
        paddingHorizontal: 10, 
        paddingVertical: 20
    },
    image:{
        height: 400,
        width: 400,
    },
    tittle: {
        fontSize: 50, 
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
    },
    description:{
        color: 'white',
        textAlign: 'center',
        maxWidth: 250,
        
    }
})