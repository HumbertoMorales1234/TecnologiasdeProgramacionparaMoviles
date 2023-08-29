import { View, StyleSheet, Text } from "react-native";
import HeaderLog from "../components/Login/HeaderLog";
import ContentLog from "../components/Login/ContentLog";
import FooterLog from "../components/Login/footerLog";

export default function Login(){
    return(
        <View>
            <HeaderLog />
            <ContentLog/> 
            <FooterLog />           
        </View>
    );
}
