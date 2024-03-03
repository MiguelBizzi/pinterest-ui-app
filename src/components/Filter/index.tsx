import { theme } from "@/theme";
import { Pressable, PressableProps, Text } from "react-native";
import { StyleSheet } from "react-native";

interface FilterProps extends PressableProps {
  title: string;
  selected: boolean;
}

export default function Filter({ title, selected, ...rest }: FilterProps) {
  return (
    <Pressable
      style={[styles.pressable, selected && styles.pressableSelected]}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {},
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fontFamily.medium,
  },
  pressableSelected: {
    borderBottomWidth: 4,
    borderBottomColor: theme.colors.white,
  },
});
