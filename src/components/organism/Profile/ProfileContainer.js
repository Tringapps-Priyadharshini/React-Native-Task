import { StyleSheet, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "@react-navigation/native";
import Button from "../../atoms/Button/Button";
import UserDetail from "../../molecules/Profile/UserDetail";
import MenuItems from "../../molecules/Profile/MenuItems";
import { colors } from "../../../shared/styles/colors";
const ProfileContainer = ({ navigation }) => {
    const getEmail = useSelector(state => state.userEmail)
    const { colors } = useTheme();

    const handleSignOut = async () => {
        await AsyncStorage.setItem('emailId', JSON.stringify(''))
        navigation.reset({
            index: 0,
            routes: [{ name: 'form' }]
        })
    }
    return (
        <View>
            <View style={[styles.profile, { backgroundColor: colors.background }]}>
                <UserDetail getEmail={getEmail} />
            </View>
            <View style={styles.menuContainer}>
                <MenuItems />
                <Button title="Sign out" onPress={handleSignOut} buttonStyle={styles.signoutContainer} textStyle={[styles.signOut, { color: colors.text }]} />
                <View style={styles.line}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: colors.white,
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey
    },
    signoutContainer: {
        alignItems: 'flex-start',
        width: 280
    },
    signOut: {
        fontSize: 20,
        color: colors.black,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
    },
})
export default ProfileContainer;