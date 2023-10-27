import {
  View,
  Text,
  Platform,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GoBack from "../components/GoBack";
import Profile from "../components/Profile";
import { Cog6ToothIcon, InboxIcon, UserGroupIcon, UserPlusIcon, UsersIcon } from "react-native-heroicons/outline";

export default function Community() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  function msg(user, lastMsg, time, img, members) {
    return (<TouchableOpacity onPress={() => {
      navigation.navigate("Chat", {
        name: user
      })
    }} touchSoundDisabled={false} className="flex-row space-x-2 p-2">
      {img ? <Image source={{ uri: img }} className="h-16 w-16 rounded-full" /> : <View className="h-16 w-16 rounded-full bg-slate-100"></View>}
      <View className="flex-row justify-between flex-1 p-2">
        <View className="">
          <View className="flex-row space-x-2">
            <Text className="font-bold text-base">{user}</Text>
            {members ? <Text className="text-xs font-medium p-1 bg-slate-200 rounded-md">{members} MEMBERS</Text> : null}
          </View>
          <Text className="text-sm">{lastMsg.substring(0, 36)}...</Text>
        </View>
        <Text className="text-sm font-medium">{time}</Text>
      </View>
    </TouchableOpacity>)
  }

  return (
    <SafeAreaView className="bg-white" style={style.AndroidSafeArea}>
      <View className="flex-row items-center justify-between p-4">
        <GoBack />
        <Text className="text-2xl flex-1 text-center mx-3 py-1 bg-slate-100 rounded-lg">Communities</Text>
        <Cog6ToothIcon color={"black"} size={35} />
      </View>

      <ScrollView>
        <View className="h-screen m-3 space-y-3">
          <View className="flex-row space-x-2">
            <TouchableOpacity onPress={() => {
              navigation.navigate("Chat", {
                name: "College Community"
              })
            }} className="bg-blue-900 rounded-md flex-1 p-3">
              <Text className="text-white font-semibold text-base">College Community</Text>
              <Text className="text-slate-300 font-medium">480 Members</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-blue-900 rounded-md flex-1 p-3">
              <Text className="text-white font-semibold text-base">Batch Community</Text>
              <Text className="text-slate-300 font-medium">120 Members</Text>
            </TouchableOpacity>

          </View>

          <View className="flex-row space-x-2">
            <TouchableOpacity className="bg-blue-900 rounded-md flex-1 p-3">
              <Text className="text-white font-semibold text-base">Branch Community</Text>
              <Text className="text-slate-300 font-medium">34 Members</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-blue-900 rounded-md flex-1 p-3">
              <Text className="text-white font-semibold text-base">Hostel Community</Text>
              <Text className="text-slate-300 font-medium">270 Members</Text>
            </TouchableOpacity>

          </View>

          {/* <View className="p-3 rounded-lg bg-blue-900"> */}
          {/* <Text className="font-semibold mx-auto text-white">More Communities</Text> */}
          {/* </View> */}

          {/* Communities */}
          <View className="flex-row justify-between items-start p-2">
            <View className="flex-row space-x-2 ">
              <UserGroupIcon color={"black"} size={35} />
              <Text className="font-semibold text-lg">More Communities</Text>
            </View>
            <TouchableOpacity>
              <UserPlusIcon color={"black"} size={35} />
            </TouchableOpacity>
          </View>

          <View className="space-y-2">
            {msg("Esports Org", "Venue: B-Block Time: 4PM", "12:00", "https://img.freepik.com/free-vector/detailed-esports-gaming-logo_79603-1792.jpg?w=2000", 62)}
            {msg("Annual Sports", "All students are requested to get assembled in the  playground", "8:00", "https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg", 234)}
            {msg("Project", "Finalizing the project and assembling the prototype", "15:30", "https://creativeeducator.tech4learning.com/2014/articles/images/pbl-pol-w-main.jpg", 6)}
          </View>

          {/* Inbox */}
          <View className="flex-row justify-between items-start p-2">
            <View className="flex-row space-x-2 ">
              <InboxIcon color={"black"} size={35} />
              <Text className="font-semibold text-lg">Inbox</Text>
            </View>
            <TouchableOpacity>
              <UsersIcon color={"black"} size={35} />
            </TouchableOpacity>
          </View>

          <View className="space-y-2">
            {msg("Aquib", "Hey Buddy!", "23:10", "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80")}
            {msg("Piyush", "Hello there, I got some info", "11:19", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU")}
            {msg("Rakesh", "Do you remember me?", "16:43", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72nARG6ueWpDbDXkXV137m7fVt2ALVshZwg&usqp=CAU")}
          </View>

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