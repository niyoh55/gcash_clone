import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../../Components/Colors";
import { useFonts } from "expo-font";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import { useIsFocused } from "@react-navigation/native";
import TransactionItem from "./Transactions/TransactionItem";

const TransactionsScreen = () => {
  const isFocused = useIsFocused();

  // useEffect(() => {
  //   if (isFocused) {
  //     StatusBar.setBackgroundColor(Colors.balanceColor);
  //     StatusBar.setBarStyle("light-content");
  //   }
  // }, [isFocused]);

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

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom", "left", "right"]}>
      {/* <StatusBar style="light" backgroundColor={Colors.balanceColor} /> */}
      <View style={styles.mainContainer} onLayout={onLayoutRootView}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: Colors.latestHeaderBlue,
              fontWeight: "600",
              fontFamily: "DM-Sans",
              textAlign: "center",
            }}
          >
            See your latest transactions here. Note some may take up to 24 hours
            before posting.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.contentContainerColor,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: Colors.latestHeaderBlue,
              fontWeight: "600",
              fontFamily: "DM-Sans",
            }}
          >
            Transactions as of 2022-09-30
          </Text>
        </View>
        <ScrollView scrollEnabled>
          <View style={styles.contentContainer}>
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
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
    //paddingHorizontal: 10,
    //backgroundColor: Colors.contentContainerColor,
  },
  megaDealsContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default TransactionsScreen;
