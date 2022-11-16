import { View, StyleSheet } from 'react-native'
import SearchContainer from '../molecules/Search/SearchContainer';
const Search = ({ navigation }) => {
    return (
        <View style={styles.searchContainer}>
            <SearchContainer navigation={navigation} />
        </View>
    )
}
export default Search;

const styles = StyleSheet.create({
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: 20,
    },
})