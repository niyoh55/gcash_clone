import React from "react";
import { Text, View } from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/AntDesign";

const PortfolioDisplay = ({ iconName, value, coinName, percentageChanged }) => {
  return (
    <View
      style={{
        width: "auto",
        minWidth: 250,
        height: 175,
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FAIcon name="bitcoin" size={60} />
        <Text
          style={{
            marginHorizontal: 10,
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          BTC
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={{ fontSize: 20 }}>Portfolio</Text>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>$123,456</Text>
        </View>
        <View style={{ justifyContent: "flex-end", paddingBottom: 3 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="caretup" size={16} color="#748bff" />
            <Text
              style={{
                fontSize: 20,
                color: "#748bff",
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
    </View>
  );
};

export default PortfolioDisplay;
