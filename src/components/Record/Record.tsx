import { StyleSheet, Text } from "react-native";
import { Colors } from "../../global/color";

interface RecordProps {
  record: number;
}

export default function Record({ record }: RecordProps): JSX.Element {
  return <Text style={styles.text}>👑 {record}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.primary,
  },
});
