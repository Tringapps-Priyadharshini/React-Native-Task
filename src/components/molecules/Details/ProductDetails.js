import { View,StyleSheet } from "react-native";
import TextAtom from "../../atoms/Text/TextAtom";
import { useSelector } from "react-redux";
import { useTheme } from "@react-navigation/native";
import ImageAtom from "../../atoms/Image/ImageAtom";
const ProductDetails = () => {
    const data = useSelector(state => state.particularDetail);
    const {colors} = useTheme();
    return(
        <View style={styles.container}>

        <View>
            <ImageAtom source = {data.image} imageStyle = {styles.imgContainer} />
        </View>
        <View>
            <TextAtom textStyle={[styles.contentTitle,{color:colors.text}]} content = {data.title} />
        </View>
        <View>
            <TextAtom textStyle = {[styles.contentPrice,{color:colors.text}]} content = {`Rs. ${data.price}/-`} />
        </View>
        <View>
            <TextAtom textStyle = {[styles.contentDescription,{color:colors.text}]} content = {data.description} />
        </View>
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
        color: '#03045e',
        fontFamily: 'JosefinSans-Medium',
    },
    contentPrice: {
        fontSize: 28,
        textAlign: 'center',
        padding: 15,
        color: 'green',
        fontFamily: 'Roboto-Medium'
    },
    contentDescription: {
        fontSize: 20,
        textAlign: 'justify',
        padding: 20,
        color: 'black',
        fontFamily: 'Roboto-Medium',
        height: 90,
        borderTopWidth:2,
        borderTopColor:'#D0E8F2',
        marginTop:20
    },
    imgContainer: { width: 200, height: 200 },
})