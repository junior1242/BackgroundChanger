import "../../../global.css";
import React, { useState } from "react";
import { View, Text, TextInput,  TouchableOpacity } from "react-native";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    console.log("Login attempt with email:", email, "and password:", password);
  };

  return (
    <>
      <View className="p-4 mt">
        <Text className="mb-2 font-semibold">Enter Your Email</Text>
        <TextInput
          className="border p-3 mb-3 rounded-md  placeholder:font-light"
          placeholder="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text className="mb-2 font-semibold">Enter your Password</Text>
        <TextInput
          className="border p-3 mb-3 rounded-md  placeholder:font-light"
          placeholder="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry
        />
        
        {/* <Button
          title="Login"
          onPress={() => {
            handleLogin();
          }}
        /> */}
        <TouchableOpacity onPress={handleLogin} className="bg-blue-500 p-3 rounded-full w-40 items-center mx-auto mt-4">
          <Text className="text-center
          text-white font-semibold text-lg">Login</Text>
  </TouchableOpacity>

        <Text className="mt-4 font-light text-center">
          Don&#39;t have an account? 
          <Text className="text-blue-500"> Sign Up</Text>
        </Text>
      </View>
    </>
  );
};

export default LoginForm;
