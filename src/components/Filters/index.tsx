import { FlatList } from "react-native";
import Filter from "@/components/Filter";
import { StyleSheet } from "react-native";

interface FiltersProps {
  filters: string[];
  filter: string;
  onChange: (value: string) => void;
}
export default function Filters({ filters, filter, onChange }: FiltersProps) {
  return (
    <FlatList
      data={filters}
      style={styles.list}
      contentContainerStyle={styles.content}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Filter
          title={item}
          selected={filter === item}
          onPress={() => onChange(item)}
        />
      )}
    />
  );
}

export const styles = StyleSheet.create({
  list: {
    paddingBottom: 4,
    maxHeight: 30,
  },
  content: {
    gap: 24,
    paddingHorizontal: 8,
  },
});
