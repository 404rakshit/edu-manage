import { TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

export default function GoBack() {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => {
        navigation.goBack()
    }}>
        <ArrowLeftIcon color={"black"} size={27} />
    </TouchableOpacity>
  );
}
