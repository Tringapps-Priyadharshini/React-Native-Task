import { StyleSheet, TextInput } from "react-native";
const TextBox = (props) => {
    const {placeholder,placeholderTextColor,textStyle} = props
    return(
        <TextInput placeholder={placeholder} placeholderTextColor = {placeholderTextColor} 
        style = {[styles.input,textStyle]}
        />
    )
}
export default TextBox;

const styles = StyleSheet.create({
    input:{
        fontSize:20,
        fontFamily:'Roboto-Medium',
        borderRadius:10
    }
})