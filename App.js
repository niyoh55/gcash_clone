import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./Store/store";
import Ionicon from "react-native-vector-icons/Ionicons";
import Colors from "./Components/Colors";
import InboxScreen from "./src/Screens/Inbox/Inbox";
import TransactionsScreen from "./src/Screens/Transactions/Transactions";
import InboxDetail from "./src/Screens/Inbox/InboxDetail/InboxDetail";
import ProfileStack from "./src/Stacks/ProfileStack";
import TransactionStack from "./src/Stacks/TransactionsStack";
import InboxStack from "./src/Stacks/InboxStack";
import HomeStack from "./src/Stacks/HomeStack";
import SampleScreen2 from "./src/Screens/SampleScreen2";
import AuthStack from "./src/Stacks/AuthStack";

export default function App() {
  const [hidden, setHidden] = useState(false);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const MainTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "HomeStack") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "InboxStack") {
              iconName = focused ? "mail" : "mail-outline";
            } else if (route.name === "TransactionsStack") {
              iconName = focused ? "list-sharp" : "list-outline";
            } else if (route.name === "ProfileStack") {
              iconName = focused ? "person" : "person-outline";
            }

            return (
              <Ionicon
                name={iconName}
                size={size}
                color={color}
                style={{ paddingTop: 5 }}
              />
            );
          },
          tabBarActiveTintColor: Colors.tabIconColor,
          tabBarInactiveTintColor: Colors.tabIconInactiveColor,
          tabBarStyle: {
            height: 70,
            paddingVertical: 10,
            paddingBottom: 10,

            // height: 70,
            // paddingVertical: 10,
            // paddingBottom: 10,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "700",
          },
        })}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
            // statusBarHidden: true,
            title: "Overview",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#4d6bff",
            },
          }}
        />
        <Tab.Screen
          name="InboxStack"
          component={InboxStack}
          options={{
            headerShown: false,
            // statusBarHidden: true,
            title: "Inbox",
            headerTitleAlign: "center",
            headerTitleStyle: { fontSize: 16 },
            headerStyle: {
              backgroundColor: Colors.balanceColor,
            },
            headerTintColor: "white",
            tabBarBadge: " ",
            tabBarBadgeStyle: {
              transform: [{ scale: 0.5 }, { translateY: -3 }],
            },
          }}
        />
        <Tab.Screen
          name="TransactionsStack"
          component={TransactionStack}
          options={{
            headerShown: false,
            // statusBarHidden: true,
            title: "Transactions",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerTitleStyle: { fontSize: 16 },
            // headerTitleContainerStyle: {
            //   marginTop: "auto",
            //   marginBottom: "auto",
            // },
            headerStyle: {
              backgroundColor: Colors.balanceColor,
              // height: 36,
            },
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            headerShown: false,
            // statusBarHidden: true,
            title: "Profile",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#4d6bff",
            },
            headerTintColor: "white",
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="AuthStack">
            <Stack.Screen
              name="AuthStack"
              component={AuthStack}
              options={{
                headerShown: false,
                statusBarStyle: "light",
                statusBarColor: Colors.balanceColor,
              }}
            />
            <Stack.Screen
              name="Main"
              component={MainTabNavigator}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f2f3f3",
//     paddingHorizontal: 10,
//   },
//   welcomeHeader: {
//     width: "100%",
//     height: "auto",
//     minHeight: 80,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#eee",
//   },
//   headerText: {
//     fontSize: "1.2rem",
//     lineHeight: "1.7rem",
//   },
// });
