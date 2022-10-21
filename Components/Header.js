import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 5,
      }}
    >
      <View>
        <Text style={{ fontSize: 20 }}>Welcome</Text>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Niyoh Villanueva
        </Text>
      </View>
      <View>
        <Image
          style={{ width: 75, height: 75, borderRadius: 10 }}
          source={{ uri: "https://i.ibb.co/ZfkF2jh/bdeaac79a831.jpg" }}
        />
      </View>
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
