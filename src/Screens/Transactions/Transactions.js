import React, { useCallback, useEffect } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../../Components/Colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import FAIcons from "react-native-vector-icons/FontAwesome5";
import { useFonts } from "expo-font";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import HomeButtonsDisplay from "../../../Components/HomeScreen/HomeButtonsDisplay";
import { useIsFocused } from "@react-navigation/native";
import Ionicon from "react-native-vector-icons/Ionicons";

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

  const InboxItem = () => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomColor: Colors.bottomBorderHome,
        borderBottomWidth: 2,
        paddingHorizontal: 20,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: Colors.inboxTextTitle,
              fontWeight: "600",
              fontFamily: "DM-Sans",
            }}
          >
            Send Money
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: Colors.inboxSubTitle,
              fontWeight: "600",
              fontFamily: "DM-Sans",
            }}
          >
            2022-09-27 | 12:00:00
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: "center" }}>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: Colors.transactionsCurrencyText,
              fontWeight: "600",
              fontFamily: "DM-Sans",
              textAlign: "right",
            }}
          >
            -150.00
          </Text>
          <Pressable onPress={() => console.log("pressed details")}>
            <Text
              style={{
                fontSize: 13,
                color: Colors.transactionsDetailsButton,
                fontWeight: "600",
                fontFamily: "DM-Sans",
                textAlign: "right",
              }}
            >
              Details
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

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
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
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
