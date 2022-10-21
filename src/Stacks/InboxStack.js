import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import Colors from "../../Components/Colors";
import InboxScreen from "../Screens/Inbox/Inbox";
import InboxDetail from "../Screens/Inbox/InboxDetail/InboxDetail";
import SampleScreen2 from "../Screens/SampleScreen2";

const InboxStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => {
        //console.log(navigation);
        //console.log(navigation.canGoBack());
        return {
          headerLeft: () => {
            return (
              navigation.canGoBack() &&
              route.name !== "Inbox" && (
                <Pressable
                  onPress={() => navigation.goBack()}
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Ionicon
                    name="arrow-back-outline"
                    size={24}
                    color="white"
                  ></Ionicon>
                </Pressable>
              )
            );
          },
          animation: "slide_from_right",
          statusBarColor: Colors.balanceColor,
          statusBarStyle: "light",
        };
      }}
    >
      <Stack.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          headerShown: true,
          title: "Inbox",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 16 },
          headerTitleContainerStyle: {
            marginTop: "auto",
            marginBottom: "auto",
          },
          headerStyle: {
            backgroundColor: Colors.balanceColor,
          },

          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="inboxDetail"
        component={InboxDetail}
        options={{
          headerShown: true,
          title: "Inbox Detail",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 16 },
          headerTitleContainerStyle: {
            marginTop: "auto",
            marginBottom: "auto",
          },
          headerStyle: {
            backgroundColor: Colors.balanceColor,
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen name="sample2" component={SampleScreen2} />
    </Stack.Navigator>
  );
};

export default InboxStack;
