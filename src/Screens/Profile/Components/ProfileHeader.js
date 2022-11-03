import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../../../Components/Colors";
import FAIcons from "react-native-vector-icons/FontAwesome5";

const ProfileHeader = () => {
  return (
    <View
      style={{
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        paddingVertical: 20,
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
          }}
        >
          <View>
            <Image
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginRight: 10,
              }}
              source={{ uri: "https://simgbb.com/avatar/Cp30RhbJGybr.jpg" }}
            />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 24,
                color: Colors.profileText,
                fontFamily: "DM-Sans",
              }}
            >
              Niyoh Edwyn A. Villanueva
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: Colors.profileText,
                fontFamily: "DM-Sans",
              }}
            >
              09959223380
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Pressable
            style={{
              borderRadius: 20,
              borderColor: Colors.profileText,
              borderWidth: 2,
              //width: 140,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 5,
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: Colors.profileText,
                fontFamily: "DM-Sans",
              }}
            >
              View Benefits
            </Text>
          </Pressable>

          {/* <Pressable
            style={{
              borderRadius: 20,
              borderColor: Colors.profileText,
              borderWidth: 2,
              //width: 140,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 5,
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: Colors.profileText,
                fontFamily: "DM-Sans",
              }}
            >
              Logout
            </Text>
          </Pressable> */}
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
