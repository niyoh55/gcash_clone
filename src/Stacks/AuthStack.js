import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/Auth/Login/LoginScreen";
import Register from "../Screens/Auth/Register/Register";

const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={() => {
        return { animation: "flip" };
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          title: "DAPAT HINDI TO KITA",
          //title: "Overview",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: true,
          title: "Account Registration",
          //title: "Overview",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
