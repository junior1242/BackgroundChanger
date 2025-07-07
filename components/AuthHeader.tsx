import { usePathname, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const AuthHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isLogin = pathname === "/";
  const isSignup = pathname === "/signup";

  return (
    <View className="flex-row justify-center py-5 bg-white">
      <TouchableOpacity
        onPress={() => router.push("/")}
        className={`pb-2 border-b-2 rounded-l-full border-transparent w-40 h-10  ${isLogin ? "bg-blue-500 border-transparent rounded-full" : "bg-gray-100"}`}
      >
        <Text
          className={`text-center mt-2 text-black ${isLogin ? "text-white font-bold" : "text-black"}`}
        >
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/signup")}
        className={`pb-2 border-b-2 rounded-r-full border-transparent w-40 h-10 ${isSignup ?` bg-blue-500 border-transparent rounded-full`:`bg-gray-100`}`}
      >
        <Text
          className={`text-center mt-2 text-black ${isSignup ? "text-white font-bold" : "text-black"}`}
        >
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthHeader;
