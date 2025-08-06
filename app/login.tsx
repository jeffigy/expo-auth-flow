import authStore from "@/store/useAuth";
import { Link, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const router = useRouter();
  const { setCredentials, authUser } = authStore();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";

  const handleLogin = () => {
    setCredentials(token);
    router.replace("/(protected)/(tabs)");
  };

  useEffect(() => {
    console.log(authUser);
  }, [authUser]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: "grey",
          borderRadius: 5,
        }}
        onPress={handleLogin}
      >
        <Text>Login</Text>
      </Pressable>

      <Link href={"/(protected)/(tabs)"}>
        <Text>Go to dashboard</Text>
      </Link>
    </SafeAreaView>
  );
};

export default LoginScreen;
