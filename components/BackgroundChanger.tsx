import '../global.css';
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const BackgroundChanger = () => {
    const [color, setColor] = useState("#d5d8dc");
    return (
      <>
        <View className="w-full h-full" style={{ backgroundColor: color }}>
          <View className="mt-10 w-full h-full">
            <TouchableOpacity
              className="border rounded-full border-solid p-4 bg-red-500 w-28 h-14  mb-4"
              onPress={() => setColor("red")}
            >
              <Text className="text-white text-center font-bold">Red</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setColor("grey")}
              className="border rounded-full border-solid p-4 bg-gray-600 w-28 h-14  mb-4"
            >
              <Text className="text-white text-center font-bold">Gray</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setColor("green")}
              className="border rounded-full border-solid p-4 bg-green-600  w-28 h-14  mb-4"
            >
              <Text className="text-white text-center font-bold">Green</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("white")}
              className="border rounded-full border-solid p-4 bg-white  w-28 h-14  mb-4"
            >
              <Text className="text-black text-center font-bold">White</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setColor("yellow")}
              className="border rounded-full border-solid p-4 bg-yellow-300  w-28 h-14  mb-4"
            >
              <Text className="text-white text-center font-bold">Yellow</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setColor("purple")}
              className="border rounded-full border-solid p-4 bg-purple-800  w-28 h-14  mb-4"
            >
              <Text className="text-white text-center font-bold">Purple</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("pink")}
              className="border rounded-full border-solid p-4 bg-pink-400  w-28 h-14  mb-4"
            >
              <Text className="text-white text-center font-bold">Pink</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setColor("#d5d8dc")}
              className="border rounded-full border-solid p-4 bg-white  w-28 h-14  mb-4"
            >
              <Text className="text-black text-center font-bold">Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
};

export default BackgroundChanger;
