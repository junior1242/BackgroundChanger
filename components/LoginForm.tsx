import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const LoginForm = () => {
  return (
    <View className="p-4">
      <Text className="text-xl mb-4">Login</Text>
      <TextInput className="border p-2 mb-3" placeholder="Email" />
      <TextInput
        className="border p-2 mb-3"
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Login" onPress={() => {}} />
    </View>
  );
};

export default LoginForm;
