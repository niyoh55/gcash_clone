import React from "react";
import { Pressable, Text } from "react-native";
import FAIcons from "react-native-vector-icons/FontAwesome5";
import Colors from "../Colors";
import { useNavigation } from "@react-navigation/native";

const PressableIcon = ({ iconName, text }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      android_ripple={{ color: Colors.balanceColor, borderless: true }}
      onPress={() => navigation.navigate("sample1")}
      style={{ alignItems: "center" }}
    >
      <FAIcons name={iconName} size={40} color={Colors.iconColor} />
      <Text
        style={{
          fontFamily: "DM-Sans",
          color: Colors.iconColor,
          fontSize: 13,
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default PressableIcon;
