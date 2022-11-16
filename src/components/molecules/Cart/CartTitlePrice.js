import { useTheme } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { fonts } from "../../../shared/styles/fonts";
import TextAtom from "../../atoms/Text/TextAtom";

const CartTitlePrice = ({ cart }) => {
    const { colors } = useTheme()
    return (
        <View>
            <TextAtom textStyle={[styles.productTitle, { color: colors.text }]} content={cart.title} />
            <TextAtom textStyle={[styles.productPrice, { color: colors.text }]} content={`Rs ${cart.price}/-`} />
        </View>
    )
}
export default CartTitlePrice;

const styles = StyleSheet.create({
    productTitle: {
        textAlign: 'center',
        fontSize: 23,
        marginBottom: 10,
        fontFamily: fonts.JosefinSansMedium,
        padding: 2,
        fontWeight: 'bold'

    },
    productPrice: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: fonts.RobotoMedium
    },

})
