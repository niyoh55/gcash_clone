import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../../Components/Colors";
import { useFonts } from "expo-font";
import { hideAsync } from "expo-splash-screen";
import { useIsFocused } from "@react-navigation/native";
import InboxItem from "./Components/InboxItem";

const InboxScreen = ({ navigation }) => {
  const isFocused = useIsFocused();

  const [fontsLoaded] = useFonts({
    "DM-Sans": require("../../../assets/fonts/DMSans-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  let arr = [
    1, 2, 3, 45, 6, 6, 66, 6, 4, 345, 345, 53, 2, 1, 1, 23, 4, 4, 2, 21,
  ];

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom", "left", "right"]}>
      {/* <StatusBar style="light" backgroundColor={Colors.balanceColor} /> */}
      <View style={styles.mainContainer} onLayout={onLayoutRootView}>
        <View
          style={{
            backgroundColor: Colors.contentContainerColor,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: Colors.latestHeaderBlue,
              fontWeight: "600",
              fontFamily: "DM-Sans",
            }}
          >
            Latest
          </Text>
        </View>
        <ScrollView scrollEnabled>
          <View style={styles.contentContainer}>
            {arr.map((x, index) => (
              <InboxItem key={index} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.literallyJustWhite,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10,
    //backgroundColor: Colors.contentContainerColor,
  },
  megaDealsContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default InboxScreen;
