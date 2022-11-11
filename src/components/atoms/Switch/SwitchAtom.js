import { Switch } from "react-native";
const SwitchAtom = (props) => {
    const {onValueChange,isEnabled} = props
    return(
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? '#D0E8F2' : '#E0E0E0'}
        onValueChange={onValueChange}
        value={isEnabled}
    />
    )
}
export default SwitchAtom;