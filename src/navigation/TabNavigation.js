import { StyleSheet, View } from 'react-native';
import Home from '../components/screens/Home';
import Products from '../components/screens/Products';
import Feedback from '../components/screens/Feedback';
import Cart from '../components/screens/Cart';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import home from '../assets/images/home.png';
import homeActive from '../assets/images/homeActive.png';
import products from '../assets/images/products.png';
import productActive from '../assets/images/productActive.png';
import feedback from '../assets/images/feedback.png';
import feedbackActive from '../assets/images/feedbackActive.png';
import cart from '../assets/images/cart.png';
import cartActive from '../assets/images/cartActive.png';
import ImageLocal from '../components/atoms/Image/ImageLocal';
import TextAtom from '../components/atoms/Text/TextAtom';
import { colors } from '../shared/styles/colors';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const countCartData = useSelector(state => state.cartData.length);
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarLabel: () => { return null },
      tabBarStyle: styles.tabBarStyle,
      tabBarHideOnKeyboard: true

    }} >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          focused ?
            <ImageLocal source={homeActive} imageStyle={styles.tabImg} />
            :
            <ImageLocal source={home} imageStyle={styles.tabImg} />
        )
      }} />
      <Tab.Screen name="Product" component={Products} options={{
        tabBarIcon: ({ focused }) => (
          focused ?
            <ImageLocal source={productActive} imageStyle={styles.tabImg} />
            :
            <ImageLocal source={products} imageStyle={styles.tabImg} />
        )
      }} />
      <Tab.Screen name="feedback" component={Feedback} options={{
        tabBarIcon: ({ focused }) => (
          focused ?
            <ImageLocal source={feedbackActive} imageStyle={styles.tabImg} />
            :
            <ImageLocal source={feedback} imageStyle={styles.tabImg} />
        ),

      }} />
      <Tab.Screen name="cart" component={Cart} options={{
        tabBarIcon: ({ focused }) => (
          focused ?
            <ImageLocal source={cartActive} imageStyle={styles.tabImg} />
            :
            <View style={styles.cartContainer}>
              <ImageLocal source={cart} imageStyle={styles.tabImg} />
              {countCartData > 0 &&
                <TextAtom textStyle={styles.notification} content={countCartData > 99 ? '99+' : countCartData} />
              }
            </View>
        ),

      }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabImg: {
    width: 30,
    height: 30,
  },
  cartContainer: {
    position: 'relative'
  },
  notification: {
    backgroundColor: colors.red,
    borderRadius: 100,
    width: 20,
    height: 20,
    position: 'absolute',
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 15,
    right: 0,
    marginTop: -40,
    marginRight: -8
  },
  tabBarStyle: {
    height: 60,
    backgroundColor: colors.pattensBlue
  }
})

export default TabNavigation;