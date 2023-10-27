import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Cards({ title, nav }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        if (nav) navigation.navigate(nav);
      }}
      className="justify-center flex-1 h-14 bg-blue-900 rounded-md mx-0.5"
    >
      <Text className="font-bold text-white uppercase text-center text-[11px]">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
