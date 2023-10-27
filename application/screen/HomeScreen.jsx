import {
  View,
  Text,
  Platform,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowTopRightOnSquareIcon, TableCellsIcon, UserCircleIcon, UserGroupIcon } from "react-native-heroicons/outline";
import Cards from "../components/Cards";
import Profile from "../components/Profile";

export default function HomeScreen() {
  const navigation = useNavigation();
  const newDate = Date().split(" ");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  function notice(date, title) {
    return (<TouchableOpacity onPress={()=>{
      navigation.navigate("Notices",{title, issedby: "Rajendra Mahto", date, img: "https://cdn.sanity.io/images/0f69pfwz/production/362fa4a9e176cd7f8cf6469b1dfcbb330ac70b78-150x150.png?w=2000&fit=max&auto=format"})
    }} className="overflow-hidden flex-row w-full h-14">
      <View className=" bg-slate-300 text-center h-full w-20 rounded-lg">
        <Text className="font-semibold text-black m-auto">{date}</Text>
      </View>
      <View className="bg-slate-200 rounded-lg flex-1 mx-1">
        <Text className="py-1 px-2 my-auto ml-3 font-semibold text-black flex-wrap capitalize">{title}</Text>
      </View>
    </TouchableOpacity>)
  }

  return (
    <SafeAreaView className="bg-white" style={style.AndroidSafeArea}>
      <View className="flex-row items-center justify-between p-4">
        <TouchableOpacity onPress={() => {
          navigation.navigate("Detail");
        }}>
          <UserCircleIcon color={"black"} size={35} />
        </TouchableOpacity>
        <Text className="text-2xl flex-1 text-center mx-3 py-1 bg-slate-100 rounded-lg">Polytechnic</Text>
        <Profile />
      </View>

      <ScrollView className="mx-3 space-y-2">

        <View className="flex-row gap-2 p-4 justify-between items-center">

          <View className="flex-row gap-2">
            <Text className="text-7xl font-light">{newDate[2]}</Text>
            <View className="justify-center">
              <Text className="font-semibold uppercase">{newDate[1]}</Text>
              <Text className="font-semibold">{newDate[3]}</Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => {
            navigation.navigate("Attendance")
          }} className="flex-row items-center space-x-1 bg-indigo-700 p-3 rounded-xl">
            <TableCellsIcon color={"white"} />
            <Text className="text-white font-bold">Attendance Sheet</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={()=>{
          navigation.navigate("Community")
        }} className="flex-row items-center justify-center space-x-1 bg-lime-700 p-3 rounded-md">
          <UserGroupIcon color={"white"} />
          <Text className="text-white font-bold">Joined Communities</Text>
        </TouchableOpacity>

        <View className="space-y-1">
          <View className="flex-row">
            <Cards title="Mess" nav={"Mess"}/>
            <Cards title="Events" nav={"Events"} />
            <Cards title="Routines" />
          </View>

          <View className="flex-row">
            <Cards title="Syllabus" nav={"Syllabus"}/>
            <Cards title="Faculity Members" nav={"Faculity"}/>
            <Cards title="Calender" nav={"Calender"}/>
          </View>

        </View>

        <View className="mx-0.5 my-1">
          <View className="bg-stone-800 relative rounded-md h-10 flex-row justify-center items-center">
            <Text className="font-bold uppercase text-slate-200">NOTICEBOARD</Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate("Notice")
            }} className="absolute right-2">
              <ArrowTopRightOnSquareIcon color={"white"} size={28} />
            </TouchableOpacity>
          </View>
          <ScrollView className="rounded-b-md flex space-y-2 flex-col py-3 px-1 min-h-[250px]">

            {notice("27 Feb", "Unifesto")}
            {notice("15 Feb", "Declaration of Mid semester examination")}
            {notice("02 Feb", "Announcment for Sport Day Function")}
            {notice("30 Jan", "Declaration of first quiz")}
            {/* {notice("15 Jan", "New mess routine")} */}
            {/* {notice("12 Jan", "Commencement of first class")} */}
            {notice("01 Jan", "4th & 6th Semester Registration Opens")}
            <View className="h-2"></View>
          </ScrollView>
        </View>

        <View className="mx-0.5 py-2">
          <View className="bg-stone-800 relative rounded-md h-10 flex-row justify-center items-center">
            <Text className="font-bold uppercase text-slate-200">EVENTS</Text>
            <TouchableOpacity className="absolute right-2">
              <ArrowTopRightOnSquareIcon color={"white"} size={28} />
            </TouchableOpacity>
          </View>
          <View className="rounded-b-md flex flex-row justify-evenly space-x-2 p-2">
            <TouchableOpacity className=" bg-slate-300 rounded-md w-[48%] h-32">
              <Text className="text-base font-bold m-auto">Esports</Text>
            </TouchableOpacity>
            <TouchableOpacity className=" bg-slate-300 rounded-md w-[48%] h-32">
              <Text className="text-base font-bold m-auto">UniFesto</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="h-20"></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
