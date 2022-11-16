import { StyleSheet, View } from 'react-native'
import FeedbackForm from '../organism/Feedback/FeedbackForm';
const Feedback = () => {
    return (
        <View style={styles.container}>
            <FeedbackForm />
        </View>
    )
}
export default Feedback;

const styles = StyleSheet.create({
    container: {
        height: 800,
        display: 'flex',
        justifyContent: 'center'
    },

})