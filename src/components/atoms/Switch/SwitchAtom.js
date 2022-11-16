import { Switch } from "react-native";
import { colors } from "../../../shared/styles/colors";
const SwitchAtom = (props) => {
    const { onValueChange, isEnabled } = props
    return (
        <Switch
            trackColor={{ false: colors.darkGrey, true: colors.mayaBlue }}
            thumbColor={isEnabled ? colors.pattensBlue : colors.lightGrey}
            onValueChange={onValueChange}
            value={isEnabled}
        />
    )
}
export default SwitchAtom;