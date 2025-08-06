import { Redirect, Stack } from "expo-router";

const ProtectedLayout = () => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default ProtectedLayout;
