// import "../global.css";
// import React from "react";
// // import { Text, TouchableOpacity, View } from 'react-native';
// // import Signup from '@/components/Signup';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import BackgroundChanger from '@nger'
// import AuthHeader from "@/components/AuthHeader";
// import { View, Text, TextInput, TouchableOpacity } from "react-native";
// // import LoginComponent from '@/components/LoginComponent';

// const index = () => {
//   return (
//     <>
//       <AuthHeader />
//       <View className="flex-1 justify-center items-center w-full h-full">
//         <View className="mt-4 flex-1  h-auto ">
//           <View className="border gap-6 p-16">
//             <Text className="font-semibold text-center text-xl">LOGIN</Text>
//             <TextInput
//               className="border rounded-xl  border-black h-8 p-4"
//               placeholder="Enter your Username"
//               keyboardType="email-address"
//             />
//             <TextInput
//               className="border rounded-xl  border-black h-8 p-4"
//               placeholder="Enter your Password"
//             />
//             <TouchableOpacity className="border rounded-full bg-gray-600 h-12">
//               <Text className="text-white text-center">Login</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </>
//   );
// };

// export default index;



import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row justify-center pt-10">
        <TouchableOpacity
          onPress={() => setIsLogin(true)}
          className={`mx-4 pb-2 border-b-2 ${isLogin ? "border-blue-500" : "border-transparent"}`}
        >
          <Text
            className={`text-base ${isLogin ? "text-blue-600 font-bold" : "text-gray-500"}`}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsLogin(false)}
          className={`mx-4 pb-2 border-b-2 ${!isLogin ? "border-blue-500" : "border-transparent"}`}
        >
          <Text
            className={`text-base ${!isLogin ? "text-blue-600 font-bold" : "text-gray-500"}`}
          >
            Signup
          </Text>
        </TouchableOpacity>
      </View>

      {/* Render either Login or Signup */}
      {isLogin ? <LoginForm /> : <SignupForm />}
    </View>
  );
}