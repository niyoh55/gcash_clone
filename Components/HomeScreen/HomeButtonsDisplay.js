import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import FAIcons from "react-native-vector-icons/FontAwesome5";
import MaterialCommIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import Colors from "../Colors";
import { useNavigation } from "@react-navigation/native";
import PressableIcon from "./PressableIcon";

const HomeButtonsDisplay = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "DM-Sans": require("../../assets/fonts/DMSans-Medium.ttf"),
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
    <View
      style={{
        flex: 1,
        paddingVertical: 10,
      }}
      onLayout={onLayoutRootView}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <PressableIcon iconName={"money-bill-wave"} text="Send" />
        <PressableIcon iconName={"money-bill-wave"} text="Load" />
        <PressableIcon iconName={"money-bill-wave"} text="Transfer" />
        <PressableIcon iconName={"money-bill-wave"} text="Bills" />
      </View>

      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <PressableIcon iconName={"money-bill-wave"} text="Borrow" />
        <PressableIcon iconName={"money-bill-wave"} text="GSave" />
        <PressableIcon iconName={"money-bill-wave"} text="GInsure" />
        <PressableIcon iconName={"money-bill-wave"} text="GInvest" />
      </View>

      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <PressableIcon iconName={"money-bill-wave"} text="GLife" />
        <PressableIcon iconName={"money-bill-wave"} text="A+ Rewards" />
        <PressableIcon iconName={"money-bill-wave"} text="GForest" />

        <View style={{ alignItems: "center" }}>
          <MaterialCommIcons
            name="dots-horizontal"
            size={40}
            color={Colors.iconColor}
          />
          <Text
            style={{
              fontFamily: "DM-Sans",
              color: Colors.iconColor,
              fontSize: 13,
            }}
          >
            View All
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeButtonsDisplay;
