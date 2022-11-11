import { View,StyleSheet } from "react-native";
import ImageButton from "../../atoms/ImageButton/ImageButton";
import chevron from '../../../assets/images/chevron.jpg';
import TextBox from "../../atoms/TextInput/TextBox";
import { useTheme } from "@react-navigation/native";

const SearchContainer = ({navigation}) => {
    const {colors} = useTheme();
    return(
        <View style = {styles.searchContainer}>
            <View>
                <ImageButton onPress={() => navigation.goBack()} source = {chevron} imageStyle = {styles.backImg} />
            </View>
            <View>
                <TextBox textStyle ={[styles.input, { borderBottomColor: colors.text, color: colors.text }]} placeholder="Search" placeholderTextColor='grey' />
            </View>
        </View>
    )
}
export default SearchContainer;

const styles = StyleSheet.create({
    searchContainer:{
        display:'flex',
        flexDirection:'row',
    },
    backImg:{
        marginTop:10,
        width:30,
        height:30,

    },
    input:{
        width:310,
        borderBottomWidth:2,
        fontSize:20,
        marginLeft:15,
        fontFamily:'Roboto-Medium',
        color:'black'
    },
})