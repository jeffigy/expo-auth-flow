import authStore from "@/store/useAuth";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const HomeScreen = () => {
  const router = useRouter();
  const { clearCredentials, authUser } = authStore();

  const handleLogout = () => {
    clearCredentials();
    router.replace("/login");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{authUser}</Text>
      <Pressable
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: "grey",
          borderRadius: 5,
        }}
        onPress={handleLogout}
      >
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
