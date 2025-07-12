// import { View, Text } from 'react-native'
import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack
      // screenOptions={{
      //   headerStyle: {
      //     backgroundColor: "#117a65",
      //   },
      //   headerTintColor: "#fff",
      //   headerTitle: "Background Chager",
      //   headerTitleAlign: "center",
      //   headerTitleStyle: {
      //     fontWeight: "bold",
      //   },
      // }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default _layout;
