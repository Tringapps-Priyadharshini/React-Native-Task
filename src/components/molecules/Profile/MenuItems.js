import { View,StyleSheet } from "react-native";
import SwitchAtom from "../../atoms/Switch/SwitchAtom";
import TextAtom from "../../atoms/Text/TextAtom";
import { useState,useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { darkMode } from "../../../redux/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
const MenuItems = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const {colors} = useTheme();
    const dispatch = useDispatch();

    const retrieveData = async () => {
        await AsyncStorage.getItem('isDarkMode').then((res)=>{
            const isDarkMode = JSON.parse(res);
            setIsEnabled(isDarkMode)
        })
    }
    useEffect(() => {
        retrieveData();
    }, [])

    const handleSwitch = async(event) => {
        setIsEnabled(event)
        dispatch(darkMode(event))
        await AsyncStorage.setItem('isDarkMode',JSON.stringify(event))
    }
    return(
        <View>
        <TextAtom textStyle = {styles.preferenceText} content = "Preferences" />
        <View style = {styles.darkModeContainer}>
            <TextAtom textStyle = {[styles.darkModeText,{color:colors.text}]} content = "Dark Mode" />
            <SwitchAtom onValueChange  = {(event)=>handleSwitch(event)} isEnabled={isEnabled} />
        </View>
        <View style = {styles.line}></View>
    </View> 
    )
}
export default MenuItems;

const styles = StyleSheet.create({
    preferenceText:{
        fontSize:20,
        color:'#767577',
        padding:10,
    },
    darkModeContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    darkModeText:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
        padding:10,

    },
    line:{
        borderBottomWidth:1,
        borderBottomColor:'#E0E0E0',
    },
})