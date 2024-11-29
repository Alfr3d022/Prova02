import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" 
        options={{
        headerShown: false,
        navigationBarColor: "#282828",
        statusBarBackgroundColor: "#4D4D4D"
      }}/>
    </Stack>
  )
}
