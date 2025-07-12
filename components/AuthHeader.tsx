import "@/global.css";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LoginForm from "./intro/login/LoginForm";
import SignupForm from "./intro/signup/SignupForm";
const AuthHeader: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View className="border-b-2 border-gray-200 p-5 bg-white shadow-md rounded-lg">
      <View>
        <Image
          style={styles.logo}
          source={require("@/assets/images/trucksyLogo.png")} // Adjust the path as needed based on your folder structure
          alt="Logo"
        />
      </View>
      {/* <img src={logo} alt="Logo" className="w-24 h-24 rounded-full" /> */}
      {/* <Text className="text-2xl font-bold mt-3">Truck Booking</Text> */}

      <View className="flex-row justify-center py-5 bg-white">
        <TouchableOpacity
          onPress={() => setIsLogin(true)}
          className={`pb-2 border-b-2 rounded-l-full border-transparent w-40 h-10 ${
            isLogin ? "bg-blue-500 rounded-full" : "bg-gray-100"
          }`}
        >
          <Text
            className={`text-center mt-2 ${
              isLogin ? "text-white font-bold" : "text-black"
            }`}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsLogin(false)}
          className={`pb-2 border-b-2 rounded-r-full border-transparent w-40 h-10 ${
            !isLogin ? "bg-blue-500 rounded-full" : "bg-gray-100"
          }`}
        >
          <Text
            className={`text-center mt-2 ${
              !isLogin ? "text-white font-bold" : "text-black"
            }`}
          >
            Signup
          </Text>
        </TouchableOpacity>
      </View>

      {isLogin ? <LoginForm /> : <SignupForm />}
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    borderRadius: 50,
    overflow: "hidden",
    borderColor: "#000",
    backgroundColor: "#fff",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
