import React from "react";
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

const PopularCrypto = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        height: "auto",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        marginVertical: 6,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ marginRight: 5 }}>
          <FAIcon name="bitcoin" size={40} />
        </View>
        <View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Bitcoin</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 16 }}>BTC</Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 15,
                alignItems: "center",
              }}
            >
              <Icon name="caretup" size={16} color={"#4d6bff"} />
              <Text style={{ fontWeight: "600", marginLeft: 5 }}>2.10%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>$1,234.56</Text>
      </View>
    </View>
  );
};

export default PopularCrypto;
