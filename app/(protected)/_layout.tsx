import { Stack } from "expo-router";

const ProtectedLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default ProtectedLayout;
