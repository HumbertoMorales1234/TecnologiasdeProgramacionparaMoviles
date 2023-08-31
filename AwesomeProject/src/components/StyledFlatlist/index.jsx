import React from "react";
import { Text, View, StyleSheet} from "react-native";

const StyledFlatlist = ({name, lastname, index}) => {
    return (
        <View style={styles.totalContainer}>
            <View style={styles.container1}>
                <Text style={styles.textSeparator}>Nombre</Text>
                <Text style={styles.textSeparator}>Apellido</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.textContent}>{name}</Text>
                <Text style={styles.textContent}>{lastname}</Text>
            </View>
        </View>
    );
  }

const styles = StyleSheet.create({
    totalContainer:{
        padding: 10,

    },
    container1:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderColor: '#D1D1D1'
    },
    container2:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    textContent:{
        fontSize:30,
    },
    textSeparator:{
        fontSize:20,
        color: '#919191',
        fontStyle: 'italic',
    },
})

export default StyledFlatlist