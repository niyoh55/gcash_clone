import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../../Components/Colors";
import InboxDetail from "../Screens/Inbox/InboxDetail/InboxDetail";
import SampleScreen2 from "../Screens/SampleScreen2";
import TransactionsScreen from "../Screens/Transactions/Transactions";

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
          animation: "fade_from_bottom",
          statusBarColor: Colors.balanceColor,
          statusBarStyle: "light",
        };
      }}
    >
      <Stack.Screen
        name="Inbox"
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
        name="inboxDetail"
        component={InboxDetail}
        options={{
          headerShown: true,
          title: "Inbox Detail",
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
      <Stack.Screen name="sample2" component={SampleScreen2} />
    </Stack.Navigator>
  );
};

export default TransactionStack;
