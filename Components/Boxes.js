import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Boxes() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Header Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    minHeight: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  headerText: {
    fontSize: "1.2rem",
    lineHeight: "1.7rem",
  },
});
