import { View, StyleSheet } from "react-native";
import CartTitlePrice from "../../molecules/Cart/CartTitlePrice";
import { useSelector } from 'react-redux';
import Button from '../../atoms/Button/Button';
import ImageAtom from "../../atoms/Image/ImageAtom";
import TextAtom from "../../atoms/Text/TextAtom";
import { useTheme } from "@react-navigation/native";
import { colors } from "../../../shared/styles/colors";
import { fonts } from "../../../shared/styles/fonts";
const CartDetails = () => {
    const cartData = useSelector(state => state.cartData);
    const { colors } = useTheme();
    return (
        <View>
            {(cartData.length > 0) ?
                <View>
                    {
                        cartData.map((cart, index) => {
                            return (
                                <View key={index}>
                                    <View style={styles.container}>
                                        <View style={styles.productContainer}>
                                            <ImageAtom source={cart.image} imageStyle={styles.productImage} />
                                            <View style={styles.productTitlePrice}>
                                                <CartTitlePrice cart={cart} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                    <Button title="Proceed to Buy" buttonStyle={styles.buy} textStyle={styles.buyNowText} />
                </View>
                :
                <TextAtom textStyle={[styles.cartText, { color: colors.text }]} content="No Products are added in the cart" />

            }

        </View>
    )
}
export default CartDetails;

const styles = StyleSheet.create({
    cartText: {
        fontSize: 23,
        color: colors.black,
        padding: 20,
        fontFamily: fonts.BreeSerifRegular,
    },
    container: {
        marginVertical: 8,
        borderBottomWidth: 2,
        borderBottomColor: colors.pattensBlue,
    },

    productContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,

    },
    productTitlePrice: {
        width: 300,
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    productTitle: {
        textAlign: 'center',
        fontSize: 23,
        marginBottom: 10,
        fontFamily: fonts.JosefinSansMedium,
        padding: 2,
        fontWeight: 'bold'

    },
    buy: {
        backgroundColor: colors.pattensBlue,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        width: '100%',
    },
    buyNowText: {
        fontSize: 26,
        color: colors.black,
        fontWeight: 'bold'
    }

})