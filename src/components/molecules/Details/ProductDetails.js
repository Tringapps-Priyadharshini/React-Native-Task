import { View, StyleSheet } from "react-native";
import TextAtom from "../../atoms/Text/TextAtom";
import { useSelector } from "react-redux";
import { useTheme } from "@react-navigation/native";
import ImageAtom from "../../atoms/Image/ImageAtom";
import { colors } from "../../../shared/styles/colors";
import { fonts } from "../../../shared/styles/fonts";
const ProductDetails = () => {
    const data = useSelector(state => state.particularDetail);
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <ImageAtom source={data.image} imageStyle={styles.imgContainer} />
            <TextAtom textStyle={[styles.contentTitle, { color: colors.text }]} content={data.title} />
            <TextAtom textStyle={[styles.contentPrice, { color: colors.text }]} content={`Rs. ${data.price}/-`} />
            <TextAtom textStyle={[styles.contentDescription, { color: colors.text }]} content={data.description} />
        </View>
    )
}
export default ProductDetails;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: 30,
    },
    contentTitle: {
        fontSize: 30,
        textAlign: 'center',
        padding: 15,
        fontFamily: fonts.JosefinSansMedium,
    },
    contentPrice: {
        fontSize: 28,
        textAlign: 'center',
        padding: 15,
        fontFamily: fonts.RobotoMedium
    },
    contentDescription: {
        fontSize: 20,
        textAlign: 'justify',
        padding: 20,
        color: colors.black,
        fontFamily: fonts.RobotoMedium,
        height: 90,
        borderTopWidth: 2,
        borderTopColor: colors.pattensBlue,
        marginTop: 20
    },
    imgContainer: {
        width: 200,
        height: 200
    },
})