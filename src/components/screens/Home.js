import { useTheme } from "@react-navigation/native";
import { View, FlatList, Text, StyleSheet, TouchableHighlight } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { particularDetail } from "../../redux/actions";
import { colors } from "../../shared/styles/colors";
import { fonts } from "../../shared/styles/fonts";
import ImageAtom from "../atoms/Image/ImageAtom";
import TextAtom from "../atoms/Text/TextAtom";
const Home = ({ navigation }) => {
    const data = useSelector(state => state.fetchData)
    const dispatch = useDispatch();
    const { colors } = useTheme()
    const theme = useTheme();

    const renderItem = ({ item }) => {
        return (
            <TouchableHighlight underlayColor='transparent' onPress={() => handleDetails(item)}>
                <View style={[styles.container, theme.dark ? styles.darkThemeStyle : styles.lightThemeStyle]}>
                    <View style={styles.productContainer}>
                        <ImageAtom source={item.image} imageStyle={styles.productImage} />
                        <View style={styles.productTitlePrice}>
                            <TextAtom textStyle={[styles.productTitle, { color: colors.text }]} content={item.title} />
                            <TextAtom textStyle={[styles.productPrice, { color: colors.text }]} content={`Rs. ${item.price} /-`} />
                        </View>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <TextAtom textStyle={[styles.description, { color: colors.text }]} content={item.description} />
                    </View>
                </View>
            </TouchableHighlight>
        )

    }
    const handleDetails = (item) => {
        dispatch(particularDetail(item))
        navigation.navigate('details');
    }

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListFooterComponent={<Text style={[styles.endText, theme.dark ? styles.endTextDarkTheme : styles.endTextLightTheme]}>Looks like you've reached the end</Text>}
        />
    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        padding: 15
    },

    productContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,

    },
    productTitlePrice: {
        width: 300,
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    productTitle: {
        textAlign: 'center',
        color: colors.black,
        fontSize: 23,
        marginBottom: 10,
        fontFamily: fonts.JosefinSansBold,
        padding: 2

    },
    productPrice: {
        fontSize: 25,
        color: colors.black,
        textAlign: 'center',
        fontFamily: fonts.RobotoMedium,
    },
    descriptionContainer: {
        padding: 15,
    },
    description: {
        color: colors.black,
        lineHeight: 23,
        textAlign: 'justify',
        padding: 10,
        fontSize: 21,
        borderRadius: 20,
        fontFamily: fonts.RobotoMedium,
        height: 65,
    },
    endText: {
        fontSize: 23,
        fontFamily: fonts.RobotoMedium,
        textAlign: 'center'
    },
    darkThemeStyle: {
        backgroundColor: colors.black,
        borderBottomWidth: 2,
        borderBottomColor: colors.whiteSmoke
    },
    lightThemeStyle: {
        backgroundColor: colors.whiteSmoke,
        borderWidth: 2,
        borderColor: colors.lightGrey
    },
    endTextDarkTheme: {
        color: colors.white
    },
    endTextLightTheme: {
        color: colors.crimson
    }
})