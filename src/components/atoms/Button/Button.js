import { TouchableOpacity, Text, StyleSheet } from "react-native";
const Button = (props) => {
    const { title, onPress, buttonStyle, textStyle,toast,disabled } = props;
    return (
        <TouchableOpacity activeOpacity={toast ? 1 : 0.7} disabled = {disabled} style={[styles.buttonContainer,buttonStyle]} onPress={onPress}>
            <Text style={[styles.buttonTitle,textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}
export default Button;

const styles = StyleSheet.create({
    buttonTitle: {
        fontSize: 25,
        color: 'black',
        fontFamily: 'Roboto-Medium',
    },
    buttonContainer: {
        border: 'none',
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
        width: 140,
    },
})