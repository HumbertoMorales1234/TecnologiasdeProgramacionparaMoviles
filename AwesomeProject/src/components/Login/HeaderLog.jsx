import { View, Text, StyleSheet } from "react-native";
import { THEME } from '../../theme/colors';

export default function HeaderLog() {
    return(
        <View style={styles.container}>
            <Text style={styles.principal}>Inicia Sesión</Text>
            <Text style={styles.complemento}>Accede con tu cuenta!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 0.45, 
        backgroundColor: THEME.COLORS.DARKBLUE,
        alignItems: 'left',
        justifyContent: 'flex-end',
        width: 450,

    }, 
    principal:{
        fontSize: 60,
        color: 'white', 
        paddingLeft: 24,
    },   
    complemento:{
        fontSize: 15,
        color: 'white',
        paddingLeft: 26,
        paddingBottom: 50,
    }
});