import { forwardRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "@/theme";
import BottomSheet from "@gorhom/bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";
import MenuButton from "../MenuButton";

interface MenuProps {
  onClose: () => void;
}

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            name="close"
            size={24}
            onPress={onClose}
            color={theme.colors.white}
          />

          <Text style={styles.title}>Menu</Text>
        </View>

        <View style={styles.options}>
          <MenuButton title="Pin" icon="home" />
          <MenuButton title="Colagem" icon="paste" />
          <MenuButton title="Pasta" icon="folder" />
        </View>
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[800],
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.white,
    textAlign: "center",
    flex: 1,
    marginRight: 24,
  },
  options: {
    marginTop: 32,
    flexDirection: "row",
    gap: 16,
  },
});
