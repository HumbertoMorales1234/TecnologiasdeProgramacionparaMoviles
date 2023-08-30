import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { THEME } from '../../theme/colors';

export default function FooterLog(){
    return(
        <View style={styles.container}>
            <Text>¿No tienes Cuenta?</Text>
            <TouchableOpacity>
                <Text style={styles.enlace}>Crea tu Perfil</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingBottom: 10,
    },
    enlace:{
        color: THEME.COLORS.BLUE,
        textAlign: 'left',
        textDecorationLine: 'underline',
        paddingHorizontal: 10,

    },
});