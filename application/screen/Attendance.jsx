import {
  View,
  Text,
  Platform,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Profile from "../components/Profile";
import GoBack from "../components/GoBack";
import { AcademicCapIcon, Battery0Icon, CalendarDaysIcon, ComputerDesktopIcon, IdentificationIcon } from "react-native-heroicons/outline";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export default function Attendance() {
  const { getItem, setItem } = useAsyncStorage('@user');

  const readItemFromStorage = async () => {
    const item = await getItem();
    const items = JSON.parse(item)
    setRoll(items?.roll)
    setBranch(items?.branch)
    setSem(items?.sem)
  };

  const writeItemToStorage = async newValue => {
    await setItem(JSON.stringify(newValue));
  };

  const [roll, setRoll] = useState(null);
  const [branch, setBranch] = useState(null);
  const [sem, setSem] = useState(null);

  useEffect(() => {
    readItemFromStorage();
  }, []);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  function stats(code, sub, per) {
    let color = "red";
    if (per >= 90) color = "lime"
    if (per >= 75 && per < 89) color = "yellow"
    if (per < 65) color = "black"

    return (<View className="flex-row items-start justify-between px-5 py-4 rounded-md bg-slate-200">
      <View className="flex-row items-start space-x-3">
        {/* <DocumentTextIcon color={"black"} size={30} /> */}
        <View className="space-y-2">
          <Text className="text-xs text-center uppercase p-1 font-bold rounded-lg bg-slate-300 w-24">{code}</Text>
          <Text className="text-base capitalize font-semibold w-80">{sub}</Text>
        </View>
      </View>

      <View className="flex-col space-y-2">
        <View className="flex-row items-center space-x-1">
          <Text className="font-bold text-base">{per}%</Text>
          <View className="">
            <Battery0Icon color={"black"} fill={color} fillOpacity={0.5} size={30} />
          </View>
        </View>
        <TouchableOpacity className="bg-slate-300 p-1 rounded-sm items-center">
          <Text className="text-sm font-bold uppercase">More</Text>
        </TouchableOpacity>
      </View>
    </View>)
  }

  return (
    <SafeAreaView className="bg-white" style={style.AndroidSafeArea}>
      <View className="flex-row items-center justify-between p-4">
        <GoBack />
        <Text className="text-2xl flex-1 mx-3 py-1 text-center rounded-lg bg-slate-100">Attendance Sheet</Text>
        <Profile />
      </View>

      <View className="mx-3 space-y-3">

      </View>

      <ScrollView className="h-screen m-3 space-y-3">

        <View className="space-y-2">

          <View className="flex-row space-x-2">
            <View className="bg-slate-200 justify-center space-x-2 items-center flex-row rounded-md flex-1 p-3">
              <IdentificationIcon color={"black"} strokeWidth={1.5} />
              <Text className="uppercase font-bold text-base">{roll || "---"}</Text>
            </View>
            <View className="bg-slate-200 justify-center space-x-2 items-center flex-row rounded-md flex-1 p-3">
              <ComputerDesktopIcon color={"black"} strokeWidth={1.5} />
              <Text className="uppercase font-bold text-base">{branch || "---"}</Text>
            </View>
          </View>

          <View className="flex-row space-x-2">
            <View className="bg-slate-200 justify-center space-x-2 items-center flex-row rounded-md flex-1 p-3">
              <CalendarDaysIcon color={"black"} strokeWidth={1.5} />
              <Text className="uppercase font-bold text-base">2020</Text>
            </View>
            <View className="bg-slate-200 justify-center space-x-2 items-center flex-row rounded-md flex-1 p-3">
              <AcademicCapIcon color={"black"} strokeWidth={1.5} />
              <Text className="uppercase font-bold text-base">{sem || "---"}</Text>
            </View>
          </View>

        </View>

        <View className="flex-row space-x-2">
          <TouchableOpacity className="flex-1 bg-blue-900 rounded-md p-2">
            <Text className="text-lg text-white mx-auto font-semibold">Response Attendance</Text>
          </TouchableOpacity>
        </View>

        {/* Theory */}
        <View className="p-2 py-1 rounded-full w-20 bg-gray-500">
          <Text className="font-semibold mx-auto text-white">Theory</Text>
        </View>
        <View className="space-y-2">

          {stats("DTM 6001", "TOTAL QUALITY MANAGEMENT", 75)}
          {stats("DCS 6001", "ADVANCE JAVA PROGRAMMING", 56)}
          {stats("Dcs 6003", "COMPUTER Hardware", 97)}
          {stats("DCS 6005", "Cyber Security", 72)}
          {stats("DCS 6017", "INTERNET OF THINGS(ELECTIVE)", 100)}

        </View>

        {/* Lab */}
        <View className="p-2 py-1 rounded-full w-20 bg-gray-500">
          <Text className="font-semibold mx-auto text-white">Lab</Text>
        </View>
        <View className="space-y-2">

          {stats("DCS 6002", "Java Programming Lab – 2", 79)}
          {stats("Dcs 6004", "Computer Hardware Lab", 97)}
          {stats("Dcs 6008", "Software Testing Lab", 43)}

        </View>
        <View className="h-24"></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});