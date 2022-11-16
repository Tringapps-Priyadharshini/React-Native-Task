import { View } from "react-native";
import ProfileContainer from "../organism/Profile/ProfileContainer";
const Profile = ({ navigation }) => {
    return (
        <View>
            <ProfileContainer navigation={navigation} />
        </View>
    )
}

export default Profile;