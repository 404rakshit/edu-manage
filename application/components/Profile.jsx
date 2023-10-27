

import { TouchableOpacity } from "react-native";
import React from "react";
import { BellAlertIcon, UserCircleIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>{
      navigation.navigate("Notification")
    }}>
        <BellAlertIcon color={"black"} size={35} />
    </TouchableOpacity>
  );
}
