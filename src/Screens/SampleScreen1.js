import { Button, StatusBar, Text, View } from "react-native";

const SampleScreen1 = ({ navigation, route }) => (
  <View>
    <StatusBar style="light" backgroundColor="black" />
    <Text>Sample Screen 1</Text>
    <Button title="Click Me" onPress={() => navigation.navigate("sample2")}>
      Click me
    </Button>
  </View>
);

export default SampleScreen1;
