import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React, { useCallback } from "react";
import Colors from "../../../Components/Colors";
import { useFonts } from "expo-font";
import { hideAsync } from "expo-splash-screen";
import ProfileHeader from "./Components/ProfileHeader";
import ProfileItem from "./Components/ProfileItem";

const Profile = () => {
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
    <View style={styles.mainContainer}>
      <ScrollView>
        <ProfileHeader />
        <View style={{ paddingHorizontal: 0 }}>
          <ProfileItem title={"Profile Limits"} />
          <ProfileItem title={"My Linked Accounts"} />
          <ProfileItem title={"My QR Codes"} />
          <ProfileItem title={"GScore"} />
          <ProfileItem title={"AliPay+"} />
          <ProfileItem title={"Promos"} />
          <ProfileItem title={"Voucher Pocket"} />
          <ProfileItem title={"Partner Merchants"} />
          <ProfileItem title={"Refer Friends"} />
          <ProfileItem title={"Logout"} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.darkBlue,
    flex: 1,
  },
});
