import { Text } from "react-native"

export const StyledText = ({text, fontSize, fontStyle, textDecorationLine, color, fontWeight, padding}) =>{
    return(
        <Text style={{fontSize, fontStyle, textDecorationLine, color, fontWeight, padding}}>
            {text}</Text>
    )
}
