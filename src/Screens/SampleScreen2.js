import { Button, StatusBar, Text, View } from "react-native";

const SampleScreen2 = ({ navigation }) => (
  <View>
    <Text>Sample Screen 2</Text>
    <Button
      title="PRESS ME"
      onPress={() => navigation.navigate("ProfileStack")}
    />
  </View>
);

export default SampleScreen2;
