import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import FAIcons from "react-native-vector-icons/FontAwesome5";
import Colors from "../../../../Components/Colors";

const ProfileItem = ({ title }) => {
  return (
    <Pressable
      android_ripple={{ color: "rgba(0,0,0,.2)" }}
      android_disableSound={false}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 7,
        paddingHorizontal: 20,
      }}
      onPress={() => {
        Alert.alert(`Navigate to ${title}`);
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FAIcons name={"money-bill-wave"} size={24} color={"#f4f0ea"} />
        <Text
          style={{
            marginLeft: 20,
            fontSize: 18,
            color: "#f4f0ea",
            fontFamily: "DM-Sans",
            //fontWeight: "",
          }}
        >
          {title ? title : "Icon Title"}
        </Text>
      </View>

      <View>
        <Text style={{ color: "white", fontSize: 24 }}>{">"}</Text>
      </View>
    </Pressable>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({});
