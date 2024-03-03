import Filter from "@/components/Filter";
import Filters from "@/components/Filters";
import { theme } from "@/theme";
import { StyleSheet, View } from "react-native";
import { FILTERS } from "../utils/filters";
import { useState } from "react";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>(FILTERS[0]);
  return (
    <View style={styles.container}>
      <Filters
        filter={selectedFilter}
        filters={FILTERS}
        onChange={(item) => setSelectedFilter(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 52,
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
});
