import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../../Components/Colors";
import Profile from "../Screens/Profile/Profile";
import SampleScreen1 from "../Screens/SampleScreen1";
import SampleScreen2 from "../Screens/SampleScreen2";

const ProfileStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={({}) => {
        return {
          animation: "fade_from_bottom",
        };
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          statusBarColor: Colors.darkBlue,
          statusBarStyle: "light",
        }}
      />
      <Stack.Screen name="sample1" component={SampleScreen1} />
      <Stack.Screen name="sample2" component={SampleScreen2} />
      {/* <Stack.Screen name="inboxDetail" component={InboxDetail} /> */}
    </Stack.Navigator>
  );
};

export default ProfileStack;
