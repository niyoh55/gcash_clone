import { View, Text, Pressable, Button, TextInput, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import Colors from "../../../../Components/Colors";
import FAIcons from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FeatherIcons from "react-native-vector-icons/Feather";

const LoginScreen = ({ navigation }) => {
  const [isInputShown, setIsInputShown] = useState(false);
  const [pin, setPin] = useState([]);
  const isFocused = useIsFocused();

  const createTwoButtonAlert = () =>
    Alert.alert("WRONG PIN", "PIN entered is incorrect.", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  useEffect(() => {
    setPin("");
    //console.log(isFocused);
  }, [isFocused]);

  const NumberKey = ({ number, onPress }) => {
    return (
      <Pressable
        style={{ width: 40, alignItems: "center" }}
        onPress={() => setIsInputShown(false)}
      >
        <Text style={{ fontSize: 24, color: "white" }}>{number}</Text>
      </Pressable>
    );
  };

  return (
    <View
      style={{ paddingTop: 40, backgroundColor: Colors.balanceColor, flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 40, color: "white" }}>GCASH</Text>
        </View>

        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <Text style={{ fontSize: 14, marginBottom: 10, color: "white" }}>
            Good Day!
          </Text>
          <View
            style={{
              backgroundColor: Colors.darkBlue,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white" }}>0995 922 3380</Text>
          </View>
        </View>

        {isInputShown && (
          <View style={{ alignItems: "center", marginBottom: 40 }}>
            <Text
              style={{
                marginBottom: 20,
                color: "white",
                fontSize: 18,
                letterSpacing: 3,
                fontWeight: "600",
              }}
            >
              Enter your MPIN
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "40%",
                justifyContent: "space-between",
              }}
            >
              <FAIcons
                name={pin[0] ? "circle" : "circle-thin"}
                size={20}
                color="white"
              />
              <FAIcons
                name={pin[1] ? "circle" : "circle-thin"}
                size={20}
                color="white"
              />
              <FAIcons
                name={pin[2] ? "circle" : "circle-thin"}
                size={20}
                color="white"
              />
              <FAIcons
                name={pin[3] ? "circle" : "circle-thin"}
                size={20}
                color="white"
              />
            </View>
          </View>
        )}
        {/* <View style={{ alignItems: "center", marginVertical: 20 }}>
        <TextInput
          style={{
            paddingVertical: 10,
            paddingHorizontal: 5,
            width: "50%",
            borderColor: "gray",
            borderWidth: 2,
            textAlign: "center",
            fontSize: 32,
          }}
          onChangeText={(text) => setPin(text)}
          value={pin}
        ></TextInput>
      </View> */}
        <Button
          onPress={() =>
            //pin == "8888" ? navigation.navigate("Main") : createTwoButtonAlert()
            setIsInputShown(false)
          }
          title="Login Mo ako"
        ></Button>
      </View>

      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isInputShown ? (
            <View
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <NumberKey number={1} />
                <NumberKey number={2} />
                <NumberKey number={3} />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <NumberKey number={4} />
                <NumberKey number={5} />
                <NumberKey number={6} />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <NumberKey number={7} />
                <NumberKey number={8} />
                <NumberKey number={9} />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <NumberKey number={"X"} />
                <NumberKey number={0} />
                <Pressable
                  style={{ width: 40, maxWidth: 40, alignItems: "center" }}
                >
                  <FeatherIcons
                    name="delete"
                    style={{ fontSize: 24, color: "white" }}
                  />
                </Pressable>
              </View>
            </View>
          ) : (
            <Pressable
              onPress={() => setIsInputShown(true)}
              style={({ pressed }) => {
                return {
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: pressed ? "#EAEAEA" : "white",
                  padding: 10,
                  borderRadius: 10,
                };
              }}
            >
              <MaterialIcons
                name="dialpad"
                size={40}
                color={Colors.balanceColor}
              />
              <Text
                style={{
                  color: Colors.balanceColor,
                  marginTop: 5,
                  fontSize: 10,
                }}
              >
                MPIN Login
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
