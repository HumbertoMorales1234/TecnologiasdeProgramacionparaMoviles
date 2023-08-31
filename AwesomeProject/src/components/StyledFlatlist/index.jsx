import React from "react";
import { Text, View} from "react-native";

const StyledFlatlist = ({name, lastname, index}) => {
    return (
        <View
            style={{borderWidth:1, flexDirection:"column"}}>
            <Text style={{fontSize:40}}>{name}</Text>
            <Text style={{fontSize:40}}>{lastname}</Text>
        </View>
    );
  }

export default StyledFlatlist