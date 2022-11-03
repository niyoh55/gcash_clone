import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable } from "react-native";
import Colors from "../../Components/Colors";
import TransactionDetails from "../Screens/Transactions/TransactionDetails";
import TransactionsScreen from "../Screens/Transactions/Transactions";
import Ionicon from "react-native-vector-icons/Ionicons";

const TransactionStack = () => {
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
              route.name !== "Transactions" && (
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
        name="Transactions"
        component={TransactionsScreen}
        options={{
          headerShown: true,
          title: "Transactions",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 16 },
          headerTintColor: "white",
          headerTitleContainerStyle: {
            marginTop: "auto",
            marginBottom: "auto",
          },
          headerStyle: {
            backgroundColor: Colors.balanceColor,
          },
        }}
      />
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetails}
        options={{
          headerShown: true,
          title: "Transaction Detail",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 16 },
          headerTintColor: "white",
          headerTitleContainerStyle: {
            marginTop: "auto",
            marginBottom: "auto",
          },
          headerStyle: {
            backgroundColor: Colors.balanceColor,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default TransactionStack;
