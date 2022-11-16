import { TouchableHighlight, Image } from "react-native";
const ImageButton = (props) => {
    const { onPress, source, imageStyle } = props;
    return (
        <TouchableHighlight
            onPress={onPress} underlayColor='transparent'>
            <Image source={source} style={imageStyle} />
        </TouchableHighlight>
    )
}
export default ImageButton;