import { useTheme } from "@react-navigation/native";
import { View, FlatList, Text, StyleSheet, Image, SectionList } from "react-native";
import { colors } from "../../shared/styles/colors";
import { fonts } from "../../shared/styles/fonts";
const Products = () => {
    const { colors } = useTheme();
    const theme = useTheme();
    const DATA = [
        {
            title: 'Made for you',
            data: [[
                {
                    title: 'Item 1',
                    image: 'https://picsum.photos/id/1/200',
                    price: '10',

                    description: 'This is a description for this product'
                },
                {
                    title: 'Item 2',
                    image: 'https://picsum.photos/id/10/200',
                    price: '20',
                    description: 'This is a description for this product'
                },

                {
                    title: 'Item 3',
                    image: 'https://picsum.photos/id/1002/200',
                    price: '30',
                    description: 'This is a description for this product'
                },
                {
                    title: 'Item 4',
                    image: 'https://picsum.photos/id/1006/200',
                    price: '40',
                    description: 'This is a description for this product'
                },
                {
                    title: 'Item 5',
                    image: 'https://picsum.photos/id/1008/200',
                    price: '50',
                    description: 'This is a description for this product'
                },
            ]],
        },
        {
            title: 'Discount Items',
            horizontal: true,
            data: [[
                {
                    title: 'Item 1',
                    image: 'https://picsum.photos/id/1011/200',
                    price: '10',
                    description: 'This is a description for this product'
                },
                {
                    title: 'Item 2',
                    image: 'https://picsum.photos/id/1012/200',
                    price: '20',
                    description: 'This is a description for this product'
                },

                {
                    title: 'Item 3',
                    image: 'https://picsum.photos/id/1013/200',
                    price: '30',
                    description: 'This is a description for this product'
                },
                {
                    title: 'Item 4',
                    image: 'https://picsum.photos/id/1015/200',
                    price: '40',
                    description: 'This is a description for this product'
                },
                {
                    title: 'Item 5',
                    image: 'https://picsum.photos/id/1016/200',
                    price: '50',
                    description: 'This is a description for this product'
                },
            ]],
        },
    ];

    const RenderItem = ({ item }) => {
        return (
            <View style={[styles.card, theme.dark ? styles.productContainerDarkTheme : styles.productContainerLightTheme]}>
                <View styles={styles.imgContainer}>
                    <Image
                        style={styles.productImage}
                        source={{ uri: item.image }}
                    />
                </View>
                <View styles={styles.titleContainer}>
                    <Text style={[styles.title, { color: colors.text }]}>{item.title}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={[styles.price, { color: colors.text }]}>Rs.{item.price}/-</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={[styles.description, { color: colors.text }]}>{item.description}</Text>
                </View>
            </View>
        )
    }

    return (
        <SectionList
            sections={DATA}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={[styles.heading, { color: colors.text }]}>{title}</Text>
            )}
            renderItem={({ item }) => (
                <FlatList
                    data={item}
                    horizontal={true}
                    renderItem={({ item }) => <RenderItem item={item} />}
                />
            )}
            showsHorizontalScrollIndicator={false}
        />

    )
}

export default Products;

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        color: colors.black,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
        fontFamily: fonts.BreeSerifRegular
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 5,
        borderWidth: 2,
        borderColor: colors.lightGrey,
    },

    title: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        lineHeight: 30,
        margin: 20,
        fontFamily: fonts.JosefinSansBold


    },
    productImage: {
        width: 300,
        height: 200,
        borderRadius: 10
    },
    price: {
        fontSize: 29,
        margin: 15,
        fontFamily: fonts.RobotoMedium
    },
    description: {
        fontSize: 20,
        padding: 10,
        textAlign: 'justify',
        width: 300,
        borderRadius: 10,
        marginBottom: 20,
        fontFamily: fonts.RobotoMedium
    },

    productContainerDarkTheme: {
        backgroundColor: colors.black,
        borderBottomColor: colors.pattensBlue
    },
    productContainerLightTheme: {
        backgroundColor: colors.whiteSmoke
    }
})