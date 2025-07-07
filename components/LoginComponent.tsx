import { View, Text, TouchableOpacity } from "react-native";
import '../global.css'
import React from "react";
import { useRouter } from "expo-router";


const LoginComponent = () => {
    const router = useRouter();
  return (
    <>
      <View className="w-full h-full flex-1 items-center">
        <View className="w-auto h-auto flex flex-row">
          <TouchableOpacity className="border border-transparent rounded-l-full bg-blue-500 w-40 h-10">
            <Text className="text-white text-center mt-2">Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="border border-transparent rounded-r-full bg-gray-500 text-white w-40 h-10 hover:bg-yellow-300"
            onPress={() => {
                  router.push("/signup");
                // alert(`this is hello world`)
            }}
          >
            <Text className="text-white text-center mt-2">Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LoginComponent;
