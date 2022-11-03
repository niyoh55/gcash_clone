import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "../../../../Components/Colors";

const TransactionItem = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomColor: Colors.bottomBorderHome,
        borderBottomWidth: 2,
        paddingHorizontal: 20,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: Colors.inboxTextTitle,
              fontWeight: "600",
              fontFamily: "DM-Sans",
            }}
          >
            Send Money
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: Colors.inboxSubTitle,
              fontWeight: "600",
              fontFamily: "DM-Sans",
            }}
          >
            2022-09-27 | 12:00:00
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: "center" }}>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: Colors.transactionsCurrencyText,
              fontWeight: "600",
              fontFamily: "DM-Sans",
              textAlign: "right",
            }}
          >
            -150.00
          </Text>
          <Pressable onPress={() => navigation.navigate("TransactionDetails")}>
            <Text
              style={{
                fontSize: 13,
                color: Colors.transactionsDetailsButton,
                fontWeight: "600",
                fontFamily: "DM-Sans",
                textAlign: "right",
              }}
            >
              Details
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({});
