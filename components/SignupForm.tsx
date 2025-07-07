import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const SignupForm = () => {
  return (
    <View className="p-4">
      <Text className="text-xl mb-4">Signup</Text>
      <TextInput className="border p-2 mb-3" placeholder="Name" />
      <TextInput className="border p-2 mb-3" placeholder="Email" />
      <TextInput
        className="border p-2 mb-3"
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Sign Up" onPress={() => {}} />
    </View>
  );
};

export default SignupForm;
