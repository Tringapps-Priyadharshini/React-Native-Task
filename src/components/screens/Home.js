import { useTheme } from "@react-navigation/native";
import { View, FlatList, Text, StyleSheet, TouchableHighlight } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { particularDetail } from "../../redux/actions";
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
                <View style={[styles.container, theme.dark ? { backgroundColor: 'black', borderBottomWidth: 2, borderBottomColor: '#f6f6f6' } : {
                    backgroundColor: '#f6f6f6', borderWidth: 2,
                    borderColor: '#dedede'
                }]}>
                    <View style={styles.productContainer}>
                        <ImageAtom source={item.image} imageStyle={styles.productImage} />
                        <View style={styles.productTitlePrice}>
                            <View>
                                <TextAtom textStyle={[styles.productTitle, { color: colors.text }]} content={item.title} />
                            </View>
                            <View>
                                <TextAtom textStyle={[styles.productPrice, { color: colors.text }]} content={`Rs. ${item.price} /-`} />
                            </View>
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
            ListFooterComponent={<Text style={[styles.endText, theme.dark ? { color: 'white' } : { color: 'brown' }]}>Looks like you've reached the end</Text>}
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
        color: 'black',
        fontSize: 23,
        marginBottom: 10,
        fontFamily: 'JosefinSans-Bold',
        padding: 2

    },
    productPrice: {
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
    },
    descriptionContainer: {
        padding: 15,
    },
    description: {
        color: 'black',
        lineHeight: 23,
        textAlign: 'justify',
        padding: 10,
        fontSize: 21,
        borderRadius: 20,
        fontFamily: 'Roboto-Medium',
        height: 65,
    },
    endText: {
        fontSize: 23,
        fontFamily: 'Roboto-Medium',
        textAlign: 'center'
    }
})