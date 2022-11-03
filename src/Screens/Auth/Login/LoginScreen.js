import {
  View,
  Text,
  Pressable,
  Alert,
  StatusBar,
  Modal,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import Colors from "../../../../Components/Colors";
import FAIcons from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FeatherIcons from "react-native-vector-icons/Feather";
import { useFonts } from "expo-font";
import { hideAsync } from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation, route }) => {
  const [isInputShown, setIsInputShown] = useState(false);
  const [pin, setPin] = useState([]);
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [wrongTries, setWrongTries] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (route.params?.newRegister) {
      navigation.setParams({ newRegister: false });
      navigation.navigate("Main", { userInfo: route.params.userInfo });
    }
  }, []);

  const createTwoButtonAlert = () =>
    Alert.alert("WRONG PIN", "PIN entered is incorrect.", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("USER_INFO");
      const data = value != null ? await JSON.parse(value) : null;
      if (data !== null) {
        setUser(data);
      } else {
        console.log("wala laman lods");
        setUser(null);
      }
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  useEffect(() => {
    getData();
    setPin([]);
    setIsInputShown(false);
    setIsLoading(false);
  }, [isFocused]);

  const handleInput = (number) => {
    if (pin.length !== 4) {
      setPin((arr) => [...arr, number]);
    }
  };

  useEffect(() => {
    console.log(pin.join(""));
    console.log(user?.MPIN);
    if (pin.length === 4 && pin.join("") == user?.MPIN) {
      //Alert.alert("Logging In", "Loading...");
      setModalVisible(true);
      setIsLoading(true);
      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate("Main");
      }, 2000);
    } else if (pin.length === 4 && pin.join("") !== user?.MPIN) {
      Alert.alert("WRONG PIN", "PIN entered is incorrect.", [
        { text: "OK", onPress: () => setPin([]) },
      ]);
      setWrongTries((state) => state + 1);
    }
  }, [pin]);

  useEffect(() => {
    if (wrongTries == 3) {
      Alert.alert("Entered Wrong Pin 3 Times. Reset Your Pin.");
      setWrongTries(0);
      setPin([]);
    }
  }, [wrongTries]);

  const [fontsLoaded] = useFonts({
    "DM-Sans": require("../../../../assets/fonts/DMSans-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const NumberKey = ({ number, onPress }) => {
    return (
      <Pressable
        style={{ width: 40, alignItems: "center" }}
        onPress={() => (onPress ? onPress() : handleInput(number))}
        disabled={isLoading}
      >
        <Text style={{ fontSize: 24, color: "white", fontFamily: "DM-Sans" }}>
          {number}
        </Text>
      </Pressable>
    );
  };

  const LoginOrChangeAccountButton = () => {
    if (user) {
      return (
        <Pressable
          android_ripple={{ color: Colors.balanceColor }}
          onPress={() => console.log("change account")}
          style={{
            backgroundColor: Colors.darkBlue,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
            fontFamily: "DM-Sans",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>{user?.mobileNumber}</Text>
          <Text style={{ fontFamily: "DM-Sans", color: "white", fontSize: 10 }}>
            Change Account
          </Text>
        </Pressable>
      );
    } else {
      return (
        <Pressable
          android_ripple={{ color: Colors.balanceColor }}
          onPress={() => console.log("change account")}
          style={{
            backgroundColor: Colors.darkBlue,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
            fontFamily: "DM-Sans",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "DM-Sans", color: "white", fontSize: 18 }}>
            Login
          </Text>
        </Pressable>
      );
    }
  };

  return (
    <View
      style={{ paddingTop: 40, backgroundColor: Colors.balanceColor, flex: 1 }}
    >
      {/* <StatusBar backgroundColor={"transparent"} translucent /> */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{ fontSize: 18, fontFamily: "DM-Sans", marginBottom: 20 }}
            >
              Signing In...
            </Text>
            <ActivityIndicator color={Colors.balanceColor} size={50} />
          </View>
        </View>
      </Modal>
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 40, color: "white", fontFamily: "DM-Sans" }}>
            GCASH
          </Text>
        </View>

        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 15,
              color: "white",
              fontFamily: "DM-Sans",
            }}
          >
            Good Day!
          </Text>

          {<LoginOrChangeAccountButton />}

          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{ marginTop: 10 }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "DM-Sans",
                color: "white",
                textDecorationLine: "underline",
              }}
            >
              Don't have an account?
            </Text>
          </Pressable>
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
                fontFamily: "DM-Sans",
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
                <NumberKey
                  number={"X"}
                  onPress={() => {
                    setIsInputShown(false);
                    setPin([]);
                  }}
                />
                <NumberKey number={0} />
                <Pressable
                  style={{ width: 40, maxWidth: 40, alignItems: "center" }}
                  onPress={() =>
                    setPin((state) => {
                      let arr = state;
                      arr.pop();
                      return [...arr];
                    })
                  }
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
              disabled={!user}
              onPress={() => setIsInputShown(true)}
              style={({ pressed }) => {
                return {
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: pressed ? "#EAEAEA" : "white",
                  padding: 10,
                  borderRadius: 10,
                  display: user ? "flex" : "none",
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
                  fontFamily: "DM-Sans",
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, .7)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default LoginScreen;
