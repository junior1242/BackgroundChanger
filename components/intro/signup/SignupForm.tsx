import "../../../global.css";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const SignupForm:React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSignup = () => {
    if (!name || !email || !phone || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    
    console.log(
      "Signup attempt with name:",
      name,
      "email:",
      email,
      "phone:",
      phone,
      "and password:",
      password
    );
  };

  const handlePhoneChange = (text: string) => {
    if (
      text.length === 11 &&
        text.charAt(0) === "0" &&
        text.charAt(1) === "3"
    ) {
       return setPhone(text);
    }
    else {
      alert("Phone number must start with '03' and 11 digits long");
      setPhone(""); // Reset the phone input if invalid
      return;
    }
   
    // Optionally, you can show an error or ignore invalid input
  }

  return (
    <>
      <SafeAreaView className="flex-1">
            <ScrollView>
              <View className="p-4">
                <Text className="mb-2 font-semibold">Enter Your Name</Text>
                <TextInput
                  className="border p-3 mb-3 rounded-md  placeholder:font-light"
                  onChangeText={(text) => setName(text)}
                  keyboardType="default"
                  autoCapitalize="words"
                  placeholder="Name"
                  value={name}
                />
                <Text className="mb-2 font-semibold">Enter Your Email</Text>
                <TextInput
                  className="border p-3 mb-3 rounded-md  placeholder:font-light"
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <Text className="mb-2 font-semibold">Enter Your Phone</Text>
                <TextInput
                  className="border p-3 mb-3 rounded-md  placeholder:font-light"
                  placeholder="Phone"
                  value={phone}
                  keyboardType="number-pad"
                  autoCapitalize="none"
                  onChangeText={(text) => setPhone(text)}
                  onEndEditing={(e) => handlePhoneChange(e.nativeEvent.text)}
                  maxLength={11}
                />

                <Text className="mb-2 font-semibold">Enter Your Password</Text>
                <TextInput
                  className="border p-3 mb-3 rounded-md  placeholder:font-light"
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry
                />
                <Text className="mb-2 font-semibold">
                  Re-Write Your Password
                </Text>
                <TextInput
                  className="border p-3 mb-3 rounded-md  placeholder:font-light"
                  placeholder="Password"
                  value={confirmPassword}
                  onChangeText={(text) => setConfirmPassword(text)}
                  secureTextEntry
                />

                <TouchableOpacity
                  onPress={handleSignup}
                  className="bg-blue-500 p-3 rounded-full w-40 items-center mx-auto mt-4"
                >
                  <Text
                    className="text-center
                      text-white font-semibold text-lg"
                  >
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
    
      </SafeAreaView>
    </>
  );
};

export default SignupForm;