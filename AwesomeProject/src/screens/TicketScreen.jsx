
import { View, Text, StyleSheet, Image} from "react-native";
import { THEME } from "../theme/Colors";
import { ColorButton } from "../components/ColorButton";
import { CustomHeader } from "../components/CustomHeader";
import { NumberButton } from "../components/NumberButton";
import { ScrollView } from "react-native-gesture-handler";
import { RateCard } from "../components/RateCard";

export const TicketScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            
            <View>
                <CustomHeader/>
            </View>

            <View style={styles.bodyContainer}>   
                <View style= {styles.ticketContainter}>
                    <Text style={styles.ticketTittle}>Ticket 1</Text>
                    <View style={{flexDirection: 'row', gap: 5}}>
                        <NumberButton text='1' buttonColor={THEME.COLORS.BUTTONS.YELLOW} textColor='black' padding={1}/>
                        <NumberButton text='14' buttonColor={THEME.COLORS.BUTTONS.YELLOW} textColor='black' padding={1}/>
                        <NumberButton text='5' buttonColor={THEME.COLORS.BUTTONS.YELLOW} textColor='black' padding={1}/>
                        <NumberButton text='7' buttonColor={THEME.COLORS.BUTTONS.YELLOW} textColor='black' padding={1}/>
                        <NumberButton text='19' buttonColor={THEME.COLORS.BUTTONS.YELLOW} textColor='black' padding={1}/>
                    </View>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingVertical: 4, paddingHorizontal: 15}} >
                    <RateCard text='One Time bet' isEnabled/>
                    <RateCard text='Subscription' />
                    <RateCard text='One Time bet' isEnabled/>
                </ScrollView>
                
                <ColorButton text='Watch Results' buttonColor={THEME.COLORS.BUTTONS.GREEN} textColor='white'/>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: THEME.COLORS.BACKGROUNG.BROWN,
        paddingHorizontal: 10, 
        paddingVertical: 20,
        paddingTop: 50,
    },
    bodyContainer:{
        //backgroundColor: THEME.COLORS.SHADING.BROWN,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        flex: 1,

    },
    ticketContainter:{
        backgroundColor: THEME.COLORS.BACKGROUNG.GREEN,
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 10,
        gap: 20,
    },
    ticketTittle:{
        fontSize: 20, 
        color: 'white',
        textAlign: 'left',
        marginBottom: 10,
    },
    description:{
        color: 'white',
        textAlign: 'center',
        maxWidth: 250,
        
    }
})