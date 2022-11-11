import { Image } from "react-native";

const ImageAtom = (props) => {
    const {source,imageStyle} = props;
    return(
        <Image source = {{uri:source}} style = {imageStyle} />
    )
}
export default ImageAtom;