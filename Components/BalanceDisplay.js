import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FAIcon from "react-native-vector-icons/FontAwesome5";

const BalanceDisplay = () => {
  return (
    <View
      style={{
        backgroundColor: "#4d6bff",
        height: "auto",
        width: "90%",
        paddingHorizontal: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingVertical: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
      }}
    >
      <View>
        <View style={{}}>
          <View style={{}}>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "300" }}>
              Balance
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 26,
                marginTop: 5,
                letterSpacing: 2,
                fontWeight: "bold",
              }}
            >
              $123,456
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "300" }}>
              Monthly Profit
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 26,
                marginTop: 5,
                letterSpacing: 2,
                fontWeight: "bold",
              }}
            >
              $1,234
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            backgroundColor: "#748bff",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name="caretup" size={16} color="#fff" />
          <Text
            style={{
              fontSize: 16,
              color: "white",
              letterSpacing: 0,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            +10%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BalanceDisplay;
