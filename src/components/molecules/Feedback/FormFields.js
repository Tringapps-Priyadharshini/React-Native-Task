import { StyleSheet, View } from "react-native";
import TextBox from "../../atoms/TextInput/TextBox";
const FormFields = () => {
    return (
        <View>
            <TextBox placeholder="Enter Email" textStyle={styles.input} />
            <TextBox placeholder="Enter Comment" textStyle={styles.input} />
        </View>
    )
}
export default FormFields;

const styles = StyleSheet.create({
    input:{
        margin:30,
        borderWidth:1,
        backgroundColor:'#F7F7F7',
        fontSize:22,
        borderRadius:5,
        fontFamily:'JosefinSans-Medium'
    },
})