import React from "react";
import "../global.css";
import AuthHeader from "@/components/AuthHeader";
import { View } from "react-native";
const index: React.FC = () => {
  return (
    <>
      <View className="flex-1 items-center justify-center mt-10">
        <AuthHeader />
      </View>
    </>
  );
};

export default index;
