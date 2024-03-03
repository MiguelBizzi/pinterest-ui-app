import { Image, ImageProps } from "react-native";
import { styles } from "./styles";

interface AvatarProps {
  selected: boolean;
}

export default function Avatar({
  selected,
  ...rest
}: AvatarProps & ImageProps) {
  return (
    <Image style={[styles.image, selected && styles.selected]} {...rest} />
  );
}
