import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../../../Components/Colors";
import axios from "axios";
import { StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    mobileNumber: "09959223380",
    firstName: "qwe",
    lastName: "qwe",
    MPIN: "1234",
  });

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("USER_INFO", jsonValue);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const registerUser = async () => {
    const { firstName, lastName, MPIN, mobileNumber } = userInfo;
    try {
      if (
        firstName &&
        lastName &&
        MPIN.length == 4 &&
        mobileNumber.length == 11
      ) {
        const response = await axios.post(
          "https://gcash-app-niyoh-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
          {
            ...userInfo,
            balance: 0,
          }
        );
        console.log(response.data);
        let userInfoCopy = { ...userInfo, balance: 0 };
        setUserInfo({
          mobileNumber: "",
          firstName: "",
          lastName: "",
          MPIN: "",
        });
        storeData(userInfoCopy);

        navigation.replace("Login", {
          newRegister: true,
          userInfo: userInfoCopy,
        });
      } else {
        throw new Error("May mali lods");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.balanceColor }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingTop: 20,
          }}
        >
          <View style={{ marginVertical: 20 }}>
            <Text style={{ fontSize: 16, color: "white" }}>Mobile Number</Text>
            <TextInput
              maxLength={11}
              keyboardType="number-pad"
              value={userInfo.mobileNumber}
              style={{
                borderColor: "white",
                borderWidth: 2,
                paddingVertical: 3,
                backgroundColor: "white",
                paddingHorizontal: 10,
              }}
              onChangeText={(text) =>
                setUserInfo((state) => {
                  return { ...state, mobileNumber: text };
                })
              }
            />
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text style={{ fontSize: 16, color: "white" }}>First Name</Text>
            <TextInput
              value={userInfo.firstName}
              style={{
                borderColor: "white",
                borderWidth: 2,
                paddingVertical: 3,
                backgroundColor: "white",
                paddingHorizontal: 10,
              }}
              onChangeText={(text) =>
                setUserInfo((state) => {
                  return { ...state, firstName: text };
                })
              }
            />
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text style={{ fontSize: 16, color: "white" }}>Last Name</Text>
            <TextInput
              value={userInfo.lastName}
              style={{
                borderColor: "white",
                borderWidth: 2,
                paddingVertical: 3,
                backgroundColor: "white",
                paddingHorizontal: 10,
              }}
              onChangeText={(text) =>
                setUserInfo((state) => {
                  return { ...state, lastName: text };
                })
              }
            />
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text style={{ fontSize: 16, color: "white" }}>MPIN</Text>
            <TextInput
              maxLength={4}
              keyboardType="decimal-pad"
              value={userInfo.MPIN}
              secureTextEntry
              style={{
                borderColor: "white",
                borderWidth: 2,
                paddingVertical: 3,
                backgroundColor: "white",
                paddingHorizontal: 10,
              }}
              onChangeText={(text) =>
                setUserInfo((state) => {
                  return { ...state, MPIN: text };
                })
              }
            />
          </View>
          <Button title="Register" onPress={() => registerUser()} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({});
