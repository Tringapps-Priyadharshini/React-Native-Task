import { createStackNavigator } from '@react-navigation/stack';
import Form from "../components/screens/Form";
import Search from '../components/screens/Search'
import Details from '../components/screens/Details';
import DrawerNavigation from './DrawerNavigation';
const StackNavigation = ({initialRoute}) => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
            <Stack.Screen name="form" component={Form} />
            <Stack.Screen name="drawerscreen" component={DrawerNavigation} />
            <Stack.Screen name="search" component={Search} />
            <Stack.Screen name="details" component={Details} />
        </Stack.Navigator>
    )
}
export default StackNavigation;