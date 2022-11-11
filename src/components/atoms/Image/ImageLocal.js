import { Image } from "react-native";

const ImageLocal = (props) => {
    const {source,imageStyle} = props;
    return(
        <Image source = {source} style = {imageStyle} />
    )
}
export default ImageLocal;