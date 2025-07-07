import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = () => {
  const [text, setText] = useState("hello");
  const [password, setPassword] = useState("");

  return (
    <>
      <View className="flex-1 justify-center items-center w-full h-full">
        <View className="mt-4 flex-1  h-auto ">
          <View className="border gap-6 p-16">
            <Text className="font-semibold text-center text-xl">LOGIN</Text>
            <TextInput
              className="border rounded-xl  border-black h-8 p-4"
              placeholder="Enter your Username"
              keyboardType="email-address"
              onChangeText={setText}
            />
            <TextInput
              className="border rounded-xl  border-black h-8 p-4"
              placeholder="Enter your Password"
              onChangeText={setPassword}
            />
            <TouchableOpacity className="border rounded-full bg-gray-600 h-12">
              <Text
                className="text-white text-center"
                onPress={() =>
                  //   console.log(
                  //     `the user ${text} with the password ${password}is trying to Login`
                  //   )
                  alert(`UserName : ${text}\nPassword: ${password}
                        `)
                }
              >
                Login
              </Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;
