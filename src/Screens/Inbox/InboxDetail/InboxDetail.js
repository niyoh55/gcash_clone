import React from "react";
import { Button, Text, View } from "react-native";

const InboxDetail = ({ navigation, route }) => {
  console.log(">>>>ROUTE INBOX DETAIL");
  console.log(route);
  return (
    <View>
      {/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
      <Text>...Contents</Text>
    </View>
  );
};

export default InboxDetail;
