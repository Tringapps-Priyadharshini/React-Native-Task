import { StyleSheet, View } from "react-native";
import React from "react";
import {  useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "@react-navigation/native";
import Button from "../../atoms/Button/Button";
import UserDetail from "../../molecules/Profile/UserDetail";
import MenuItems from "../../molecules/Profile/MenuItems";
const ProfileContainer = ({ navigation }) => {
    const getEmail = useSelector(state => state.userEmail)
    const {colors} = useTheme();

    const handleSignOut = async () => {
        await AsyncStorage.setItem('emailId', JSON.stringify(''))
        navigation.reset({
            index: 0,
            routes: [{ name: 'form' }]
        })
    }
    return (
        <View>
            <View style={[styles.profile,{backgroundColor:colors.background}]}>
                <UserDetail getEmail = {getEmail}/> 
            </View>
            <View style = {styles.menuContainer}>
            <View>
                <MenuItems />
            </View>
            <View>
                <Button title = "Sign out" onPress = {handleSignOut} buttonStyle = {styles.signoutContainer} textStyle = {[styles.signOut,{color:colors.text}]} />
            </View>
            <View style = {styles.line}></View> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        borderBottomWidth:1,
        borderBottomColor:'#E0E0E0'
    },
    signoutContainer:{
       alignItems:'flex-start',
       width:280
    },
    signOut: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginTop:5,
        marginBottom:5
    },
    line:{
        borderBottomWidth:1,
        borderBottomColor:'#E0E0E0',
    },
})
export default ProfileContainer;