import { View, StyleSheet } from "react-native";
import TextAtom from "../../atoms/Text/TextAtom";
import Button from "../../atoms/Button/Button";

const ToastMessage = ({ toast, setToast }) => {

    return (
        <View style={styles.cartContainer}>
            <View>
                <TextAtom textStyle={styles.cartText} content="Added to cart" />
            </View>
            <Button title='X' buttonStyle={styles.cartTextX} toast={toast} onPress={() => setToast(!toast)} />
        </View>

    )
}
export default ToastMessage;

const styles = StyleSheet.create({
    cartContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#D0E8F2',
        borderRadius: 70
    },
    cartText: {
        color: 'black',
        fontSize: 25,
        padding: 20,
        fontFamily: 'Pacifico',
    },
    cartTextX: {
        marginLeft: 120,
        marginTop: 15
    },
})