//import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../../Components/Colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import FAIcons from "react-native-vector-icons/FontAwesome5";
import { useFonts } from "expo-font";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import HomeButtonsDisplay from "../../../Components/HomeScreen/HomeButtonsDisplay";
import { useIsFocused, useNavigation } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const isFocused = useIsFocused();

  // useEffect(() => {
  //   if (isFocused) {
  //     StatusBar.setBackgroundColor(Colors.contentContainerColor);
  //     StatusBar.setBarStyle("dark-content");
  //   }
  // }, [isFocused]);

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          "Logout",
          "You will be logged out from your account. Are you sure?",
          [
            { text: "Cancel", style: "cancel", onPress: () => {} },
            {
              text: "Confirm",
              style: "destructive",
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => {
                navigation.dispatch(e.data.action);
              },
            },
          ]
        );
      }),
    []
  );

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
    <SafeAreaView style={{ flex: 1 }}>
      {/* <StatusBar style="dark" backgroundColor={Colors.contentContainerColor} /> */}
      <View style={styles.mainContainer} onLayout={onLayoutRootView}>
        <View style={styles.contentContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              marginBottom: 20,
              marginTop: 10,
            }}
          >
            <MaterialIcons
              name="monetization-on"
              size={32}
              color={Colors.darkBlue}
            />
            <Text
              style={{
                marginLeft: 10,
                fontWeight: "800",
                fontSize: 26,
                color: Colors.darkBlue,
                letterSpacing: 3,
                fontFamily: "DM-Sans",
                //fontFamily: "Roboto",
              }}
            >
              Hello!
            </Text>
          </View>

          <View
            style={{
              backgroundColor: Colors.balanceColor,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 15,
              paddingHorizontal: 15,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 10,
              elevation: 5,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 12,
                  color: "white",
                  fontWeight: "500",
                  fontFamily: "DM-Sans",
                  letterSpacing: 4,
                }}
              >
                AVAILABLE BALANCE
              </Text>
              <Text
                style={{
                  fontSize: 40,
                  color: "white",
                  fontFamily: "DM-Sans",
                }}
              >
                ₱ 445.04
              </Text>
            </View>

            <View style={{ justifyContent: "flex-end" }}>
              <Pressable
                style={{
                  backgroundColor: Colors.balanceButtonColor,
                  borderRadius: 32,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 15,
                  paddingVertical: 6,
                }}
                android_ripple={{ color: Colors.darkBlue }}
              >
                <Octicons
                  name="plus"
                  size={18}
                  color={Colors.balanceButtonTextColor}
                  style={{ marginRight: 10, fontWeight: "900" }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    color: Colors.balanceButtonTextColor,
                    fontWeight: "bold",
                    fontFamily: "DM-Sans",
                  }}
                >
                  Cash In
                </Text>
              </Pressable>
            </View>
          </View>

          <HomeButtonsDisplay />
        </View>
        <View style={styles.megaDealsContainer}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 3,
    paddingHorizontal: 10,
    backgroundColor: Colors.contentContainerColor,
    borderBottomColor: Colors.bottomBorderHome,
    borderBottomWidth: 5,
  },
  megaDealsContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
