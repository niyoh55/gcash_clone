//import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import Colors from "../../../../Components/Colors";

const BalanceDisplay = () => {
  return (
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
  );
};

export default BalanceDisplay;
