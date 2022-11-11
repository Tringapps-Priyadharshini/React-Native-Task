import ProductDetails from "../../molecules/Details/ProductDetails";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ImageButton from "../../atoms/ImageButton/ImageButton";
import ToastMessage from "../../molecules/Details/ToastMessage";
import chevron from '../../../assets/images/chevron.jpg';
import Button from "../../atoms/Button/Button";
import { cartData } from "../../../redux/actions";
const DetailContainer = ({ navigation }) => {
    const data = useSelector(state => state.particularDetail);
    const dispatch = useDispatch();
    const [toast, setToast] = useState(false)
    const handleCart = (data) => {
        setToast(!toast);
        dispatch(cartData(data))
    }

    return (
        <View>
            <ImageButton source={chevron} imageStyle={styles.img} onPress={() => navigation.goBack()} />
            {toast && <ToastMessage toast={toast} setToast={setToast} />}
            <View>
                <ProductDetails toast={toast} setToast={setToast} />
                <View style = {styles.btn}>
                    <Button title="ADD TO CART" onPress={() => handleCart(data)} disabled={toast} toast={toast} textStyle={styles.cartBtn} />
                </View>
            </View>
        </View>
    )
}
export default DetailContainer;

const styles = StyleSheet.create({
    img: { width: 30, height: 30, marginTop: 20, marginBottom: 20 },
    btn:{
        display:'flex',
        alignItems:'center'
    },
    cartBtn: {
        backgroundColor: '#D0E8F2',
        color: 'black',
        fontSize: 28,
        fontFamily: 'BreeSerif-Regular',
        padding: 10,
        borderRadius: 20,
        textAlign: 'center',
        width: 200,
    }
})