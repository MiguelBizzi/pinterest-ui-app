import { theme } from "@/theme";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Pressable, Text } from "react-native";

interface MenuButtonProps {
  title: string;
  icon: keyof typeof FontAwesome.glyphMap;
}

export default function MenuButton({ title, icon }: MenuButtonProps) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome name={icon} size={32} color={theme.colors.white} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  iconContainer: {
    padding: 24,
    backgroundColor: theme.colors.gray[700],
    borderRadius: 22,
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fontFamily.medium,
    fontSize: 14,
    marginTop: 10,
  },
});
