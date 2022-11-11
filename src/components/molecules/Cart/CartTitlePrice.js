import { useTheme } from "@react-navigation/native";
import { View,StyleSheet } from "react-native";
import TextAtom from "../../atoms/Text/TextAtom";

const CartTitlePrice = ({cart}) => {
    const {colors} = useTheme()
    return (
        <View>
            <View>
                <TextAtom textStyle={[styles.productTitle, { color: colors.text }]} content={cart.title} />
            </View>
            <View>
                <TextAtom textStyle={[styles.productPrice, { color: colors.text }]} content={`Rs ${cart.price}/-`} />
            </View>
        </View>
    )
}
export default CartTitlePrice;

const styles = StyleSheet.create({
    productTitle: {
        textAlign: 'center',
        fontSize: 23,
        marginBottom: 10,
        fontFamily: 'JosefinSans-Medium',
        padding: 2,
        fontWeight:'bold'

    },
    productPrice: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Roboto-Medium'
    },

})
