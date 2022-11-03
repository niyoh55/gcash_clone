import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SampleScreen1 from "../Screens/SampleScreen1";
import SampleScreen2 from "../Screens/SampleScreen2";
import Home from "../Screens/Home/Home";
import Colors from "../../Components/Colors";

const HomeStack = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={() => {
        return { animation: "flip" };
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          // statusBarHidden: true,
          title: "Overview",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#4d6bff",
          },
          statusBarColor: Colors.contentContainerColor,
          statusBarStyle: "dark",
        }}
      />
      <Stack.Screen name="sample1" component={SampleScreen1} />
      <Stack.Screen name="sample2" component={SampleScreen2} />
    </Stack.Navigator>
  );
};

export default HomeStack;
