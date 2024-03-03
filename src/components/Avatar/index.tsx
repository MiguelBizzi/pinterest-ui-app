import { Image, ImageProps, StyleSheet } from "react-native";
import { theme } from "@/theme";

interface AvatarProps extends ImageProps {
  selected: boolean;
}

export default function Avatar({ selected, ...rest }: AvatarProps) {
  return (
    <Image style={[styles.image, selected && styles.selected]} {...rest} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  selected: {
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
});
