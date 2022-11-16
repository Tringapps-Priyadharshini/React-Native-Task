import { createDrawerNavigator } from '@react-navigation/drawer'
import { StyleSheet } from 'react-native';
import TabNavigation from './TabNavigation';
import Profile from '../components/screens/Profile';
import threelines from '../assets/images/threelines.webp'
import search from '../assets/images/search.webp';
import ImageButton from '../components/atoms/ImageButton/ImageButton';
import { colors } from '../shared/styles/colors';
import { fonts } from '../shared/styles/fonts';
const DrawerNavigation = ({ navigation }) => {
    const Drawer = createDrawerNavigator();

    const renderHeader = (navigation) => (<ImageButton onPress={() => { navigation.openDrawer() }} source={threelines} imageStyle={styles.threeLines} />)
    const renderSearch = (navigation) => (<ImageButton onPress={() => navigation.navigate('search')} source={search} imageStyle={styles.tabImg} />)
    return (
        <Drawer.Navigator
            drawerContent={(props) => <Profile {...props} />}
            screenOptions={({ navigation }) => ({
                headerLeft: () =>
                    renderHeader(navigation),
                headerStyle: styles.headerStyle
            })}

        >
            <Drawer.Screen name="tabs" component={TabNavigation}
                options={{
                    headerTitle: 'ecart.in',
                    headerTitleStyle: styles.headerTitleStyle,
                    headerRight: () => renderSearch(navigation)
                }}
            />
        </Drawer.Navigator>
    )
}
const styles = StyleSheet.create({
    threeLines: {
        width: 30,
        height: 30,
        marginStart: 15,

    },
    tabImg: {
        width: 30,
        height: 30,
        marginRight: 15,
        marginTop: 4,
    },
    headerStyle: {
        backgroundColor: colors.pattensBlue
    },
    headerTitleStyle: {
        fontFamily: fonts.BreeSerifRegular,
        fontSize: 30,
        color: colors.crimson
    },
})
export default DrawerNavigation;