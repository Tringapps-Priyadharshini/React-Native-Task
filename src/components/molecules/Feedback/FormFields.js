import { StyleSheet, View } from "react-native";
import { colors } from "../../../shared/styles/colors";
import { fonts } from "../../../shared/styles/fonts";
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
    input: {
        margin: 30,
        borderWidth: 1,
        backgroundColor: colors.whiteSmoke,
        fontSize: 22,
        borderRadius: 5,
        fontFamily: fonts.JosefinSansMedium
    },
})