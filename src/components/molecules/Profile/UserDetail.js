import login from '../../../assets/images/login.webp'
import TextAtom from "../../atoms/Text/TextAtom";
import { View,StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import ImageLocal from "../../atoms/Image/ImageLocal";
const UserDetail = ({getEmail}) => {
    const {colors} = useTheme();
    return (
        <View style = {styles.container}>
            <ImageLocal source = {login} imageStyle = {styles.profileImage}  />
            <TextAtom textStyle = {[styles.email, { color: colors.text }]} content = {`Hi ${getEmail}`} />
        </View>
    )
}
export default UserDetail;

const styles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center'
    },
    email: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
})