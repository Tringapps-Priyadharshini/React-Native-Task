import { View,StyleSheet } from "react-native";
import TextAtom from "../../atoms/Text/TextAtom";
import Button from "../../atoms/Button/Button";
import FormFields from "../../molecules/Feedback/FormFields";
import { useTheme } from "@react-navigation/native";

const FeedbackForm = () => {
    const {colors} = useTheme();

    return(
        <View>
            <TextAtom textStyle = {[styles.feedback,{color:colors.text}]} content = "FEEDBACK"  />
            <FormFields/>   
            <Button title = "Send" buttonStyle = {styles.send} textStyle = {styles.sendText} />
        </View>
    )
}
export default FeedbackForm;

const styles = StyleSheet.create({
    send:{
        backgroundColor:'#D0E8F2',
        width:170,
        marginHorizontal:130,
        marginVertical:30,
        borderRadius: 10,
    },
    sendText:{
        color:'black',
        fontSize:23,
        fontFamily:'Roboto-Medium',
        textAlign:'center',
        fontWeight:'bold'
    },
    feedback:{
        textAlign:'center',
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20
    }
})