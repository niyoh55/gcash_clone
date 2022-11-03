//import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect } from "react";
import { Text, View } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Colors from "../../../../Components/Colors";

function HelloHeading({}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        marginBottom: 20,
        marginTop: 10,
      }}
    >
      <MaterialIcons name="monetization-on" size={32} color={Colors.darkBlue} />
      <Text
        style={{
          marginLeft: 10,
          fontWeight: "800",
          fontSize: 26,
          color: Colors.darkBlue,
          letterSpacing: 3,
          fontFamily: "DM-Sans", //fontFamily: "Roboto",
        }}
      >
        Hello!
      </Text>
    </View>
  );
}

export default HelloHeading;
