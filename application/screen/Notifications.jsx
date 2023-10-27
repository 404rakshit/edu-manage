import {
  View,
  Text,
  Platform,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AdjustmentsVerticalIcon, ChevronDownIcon, Cog6ToothIcon, ExclamationCircleIcon, ExclamationTriangleIcon } from "react-native-heroicons/outline";
import GoBack from "../components/GoBack";

export default function Notification() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  function notify(title, msg, time) {
    return (<TouchableOpacity className="flex-row  bg-slate-100 rounded-md p-3">
      <View className="bg-slate-200 justify-center items-center rounded-full h-16 w-16">
        <ExclamationTriangleIcon color={"black"} size={35}/>
      </View>
      <View className='flex px-2 py-1'>
          <Text className="text-base font-semibold">Notification Title</Text>
          <Text className="text-gray-600 font-medium">Tuesday</Text>
      </View>
    </TouchableOpacity>)
  }

  return (
    <SafeAreaView className="bg-white" style={style.AndroidSafeArea}>
      <View className="flex-row items-center justify-between p-4">
        <GoBack />
        <Text className="text-2xl flex-1 text-center mx-3 py-1 bg-slate-100 rounded-lg">Notifications</Text>
        <TouchableOpacity>
          <Cog6ToothIcon color={"black"} size={35} />
        </TouchableOpacity>
      </View>

      <View className="flex-row px-3 justify-between">
        <View className="flex-row p-1 space-x-2">
          <TouchableOpacity className="flex-row p-2 rounded-lg items-center space-x-1 bg-slate-200 ">
            <ExclamationCircleIcon size={20} color={"black"} />
            <Text className="font-semibold">Priority : High</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row p-2 rounded-lg items-center space-x-1 bg-slate-200 ">
            <Text className="font-semibold">Sort By</Text>
            <ChevronDownIcon size={20} color={"black"} />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row p-2 rounded-lg items-center space-x-1 bg-slate-200 ">
            <Text className="font-semibold">Filter</Text>
            <AdjustmentsVerticalIcon size={20} color={"black"} />
          </TouchableOpacity>
        </View>

      </View>

      <ScrollView>
        <View className="space-y-3 m-3">
          {notify()}
          {notify()}
          {notify()}
          {notify()}
          {notify()}
          {notify()}
          {notify()}
          {notify()}
          {notify()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});