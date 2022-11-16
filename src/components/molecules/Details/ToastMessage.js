import { View, StyleSheet } from "react-native";
import TextAtom from "../../atoms/Text/TextAtom";
import Button from "../../atoms/Button/Button";
import { colors } from "../../../shared/styles/colors";
import { fonts } from "../../../shared/styles/fonts";

const ToastMessage = ({ toast, setToast }) => {

    return (
        <View style={styles.cartContainer}>
            <TextAtom textStyle={styles.cartText} content="Added to cart" />
            <Button title='X' buttonStyle={styles.cartTextX} toast={toast} onPress={() => setToast(!toast)} />
        </View>

    )
}
export default ToastMessage;

const styles = StyleSheet.create({
    cartContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.pattensBlue,
        borderRadius: 70
    },
    cartText: {
        color: colors.black,
        fontSize: 25,
        padding: 20,
        fontFamily: fonts.Pacifico,
    },
    cartTextX: {
        marginLeft: 120,
        marginTop: 15
    },
})