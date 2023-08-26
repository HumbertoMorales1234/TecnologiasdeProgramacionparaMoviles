import { Text, TouchableHighlight} from "react-native"



const onPress = () => console.log('Saludos desde la terminal');

export const StyledButton = ({text , borderWidth, borderColor, padding, borderRadius, backgroundColor, fontSize, fontStyle, color}) =>{
    return(
        <TouchableHighlight style={{borderWidth, borderColor, padding, borderRadius, backgroundColor}} onPress={onPress}>
            <Text style={{fontSize, fontStyle, color}}>{text}</Text>
        </TouchableHighlight>
    )
}


