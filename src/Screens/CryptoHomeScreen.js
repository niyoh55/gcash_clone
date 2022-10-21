import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";
import FAIcon from "react-native-vector-icons/FontAwesome5";
import { Provider } from "react-redux";
import Header from "../../Components/Header";
import PopularCrypto from "../../Components/PopularCrypto";
import PortfolioDisplay from "../../Components/PortfolioDisplay";
import BalanceDisplay from "../../Components/BalanceDisplay";
import { StatusBar } from "expo-status-bar";

export default function CryptoHomeScreen() {
  const [hidden, setHidden] = useState(false);

  //console.log("statusBarHeight: ", StatusBar.currentHeight);

  return (
    // edges={["bottom", "left", "right"]}
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#4d6bff" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          <BalanceDisplay />
        </View>

        <Text style={{ marginVertical: 20, fontSize: 22, fontWeight: "bold" }}>
          My Portfolio
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 220 }}
        >
          <PortfolioDisplay />
          <PortfolioDisplay />
          <PortfolioDisplay />
        </ScrollView>

        {/* Popular Crypto Display */}
        <View>
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              Popular Currencies
            </Text>
            <Pressable
              android_ripple={{ color: "#210644" }}
              onPress={() => {
                console.log("See More");
              }}
              style={({ pressed }) =>
                pressed && { transform: [{ scale: 1.1 }] }
              }
            >
              <Text
                style={{ fontSize: 20, color: "#4d6bff", fontWeight: "600" }}
              >
                See More
              </Text>
            </Pressable>
          </View>

          <View style={{ paddingHorizontal: 10 }}>
            <PopularCrypto />
            <PopularCrypto />
            <PopularCrypto />
            <PopularCrypto />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f3f3",
    paddingHorizontal: 10,
  },
  welcomeHeader: {
    width: "100%",
    height: "auto",
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
