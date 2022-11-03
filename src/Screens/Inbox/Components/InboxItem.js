import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import Colors from "../../../../Components/Colors";

const InboxItem = (props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomColor: Colors.bottomBorderHome,
        borderBottomWidth: 2,
      }}
      onPress={() =>
        navigation.navigate("inboxDetail", { data: "hello world!" })
      }
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicon
          name={"mail-outline"}
          size={24}
          color={Colors.tabIconColor}
          style={{ marginRight: 10 }}
        />
        <View>
          <Text
            style={{
              fontSize: 14,
              color: Colors.inboxTextTitle,
              fontWeight: "600",
              fontFamily: "DM-Sans",
            }}
          >
            Lorem ipsum dolor sit amet...
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: Colors.inboxSubTitle,
              fontWeight: "600",
              fontFamily: "DM-Sans",
            }}
          >
            Extra info. Extra info.
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "500",
            fontFamily: "DM-Sans",
            color: Colors.inboxSubTitle,
          }}
        >
          Sep 30, 2022
        </Text>
      </View>
    </Pressable>
  );
};

export default InboxItem;
