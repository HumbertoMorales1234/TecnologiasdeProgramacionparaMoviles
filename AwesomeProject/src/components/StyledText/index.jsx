import { Text } from "react-native"

export const StyledText = ({text, fontSize}) =>{
    return(
        <Text style={{fontSize}}>{text}</Text>
    )
}

export const StyledTextTwo = ({text, bold}) =>{
    const customStyles = {
        bold: bold && styles.bold
    }

    return(
        <Text>text</Text>
    )
}