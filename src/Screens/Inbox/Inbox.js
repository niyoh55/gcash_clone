import React, { useCallback, useEffect } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
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

const InboxScreen = ({ navigation }) => {
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
    <Pressable
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomColor: Colors.bottomBorderHome,
        borderBottomWidth: 2,
      }}
      onPress={() =>
        navigation.navigate("inboxDetail", { data: "hello world!" })
      }
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicon
          name={"mail-outline"}
          size={24}
          color={Colors.tabIconColor}
          style={{ marginRight: 10 }}
        />
        <View>
          <Text
            style={{
              fontSize: 14,
              color: Colors.inboxTextTitle,
              fontWeight: "600",
              fontFamily: "DM-Sans",
            }}
          >
            Lorem ipsum dolor sit amet...
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: Colors.inboxSubTitle,
              fontWeight: "600",
              fontFamily: "DM-Sans",
            }}
          >
            Extra info. Extra info.
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "500",
            fontFamily: "DM-Sans",
            color: Colors.inboxSubTitle,
          }}
        >
          Sep 30, 2022
        </Text>
      </View>
    </Pressable>
  );

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
    paddingHorizontal: 10,
    //backgroundColor: Colors.contentContainerColor,
  },
  megaDealsContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default InboxScreen;
