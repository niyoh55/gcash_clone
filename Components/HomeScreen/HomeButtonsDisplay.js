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

  const TextDisplay = ({ text }) => (
    <Text
      style={{
        fontFamily: "DM-Sans",
        color: Colors.iconColor,
        fontSize: 13,
      }}
    >
      {text}
    </Text>
  );

  const PressableIcon = ({ iconName }) => (
    <Pressable
      android_ripple={{ color: Colors.balanceColor, borderless: true }}
      onPress={() => navigation.navigate("sample1")}
    >
      <FAIcons name={iconName} size={40} color={Colors.iconColor} />
    </Pressable>
  );

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 10,
        //backgroundColor: "red",
        //justifyContent: "center",
        //alignItems: "center",
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
        <View style={{ alignItems: "center" }}>
          <PressableIcon iconName={"money-bill-wave"} />
          <TextDisplay text="Send" />
        </View>
        <View style={{ alignItems: "center" }}>
          <PressableIcon iconName={"money-bill-wave"} />
          <TextDisplay text="Load" />
        </View>
        <View style={{ alignItems: "center" }}>
          <PressableIcon iconName={"money-bill-wave"} />
          <TextDisplay text="Transfer" />
        </View>
        <View style={{ alignItems: "center" }}>
          <PressableIcon iconName={"money-bill-wave"} />
          <TextDisplay text="Bills" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <PressableIcon iconName={"money-bill-wave"} />
          <TextDisplay text="Borrow" />
        </View>
        <View style={{ alignItems: "center" }}>
          <PressableIcon iconName={"money-bill-wave"} />
          <TextDisplay text="GSave" />
        </View>
        <View style={{ alignItems: "center" }}>
          <PressableIcon iconName={"money-bill-wave"} />
          <TextDisplay text="GInsure" />
        </View>
        <View style={{ alignItems: "center" }}>
          <PressableIcon iconName={"money-bill-wave"} />
          <TextDisplay text="GInvest" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <PressableIcon iconName={"money-bill-wave"} />
          <TextDisplay text="GLife" />
        </View>
        <View style={{ alignItems: "center" }}>
          <PressableIcon iconName={"money-bill-wave"} />
          <TextDisplay text="A+ Rewards" />
        </View>
        <View style={{ alignItems: "center" }}>
          <PressableIcon iconName={"money-bill-wave"} />
          <TextDisplay text="GForest" />
        </View>
        <View style={{ alignItems: "center" }}>
          <MaterialCommIcons
            name="dots-horizontal"
            size={40}
            color={Colors.iconColor}
          />
          <TextDisplay text="View All" />
        </View>
      </View>
    </View>
  );
};

export default HomeButtonsDisplay;
