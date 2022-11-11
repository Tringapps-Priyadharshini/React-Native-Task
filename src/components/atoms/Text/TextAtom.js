import { View,Text } from "react-native";
const TextAtom = (props) => {
    const {textStyle,content} = props;
    return(
        <View>
            <Text style = {textStyle}>{content}</Text>
        </View>
    )
}
export default TextAtom;