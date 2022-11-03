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
import HelloHeading from "./Components/HelloHeading";
import BalanceDisplay from "./Components/BalanceDisplay";

const Home = ({ navigation }) => {
  const isFocused = useIsFocused();
  const navigation2 = useNavigation();

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
          <HelloHeading />
          <BalanceDisplay />
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
