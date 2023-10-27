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
import { UserCircleIcon, ArrowLeftIcon, CalendarDaysIcon, CalendarIcon, AdjustmentsVerticalIcon, ChevronDownIcon } from "react-native-heroicons/outline";
import GoBack from "../components/GoBack";
import Profile from "../components/Profile";
import { urlFor } from "../sanity";

export default function NoticeBoard() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  function notices(title, issedby, date, img ) {
    return(<View className="flex-row rounded-lg space-y-2 justify-between bg-slate-100 p-3">
    <View className="space-y-3">
      <Text className="font-medium text-lg capitalize w-80">{title}</Text>
      <View className="space-x-2 flex-row">
        {img ? <Image source={{uri: img}} className="h-6 w-6 rounded-full" /> : <View className="rounded-full h-6 w-6 bg-slate-300"></View> }
        <Text className="font-semibold text-slate-600">{issedby}</Text>
      </View>
    </View>

    <View className="justify-between items-center">
      <View className="space-x-2 flex-row">
        <CalendarIcon color={"gray"} size={20} />
        <Text className="font-semibold text-slate-600">{date}</Text>
      </View>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("Notices",{title, issedby, date, img})
      }} className="p-2 rounded-lg bg-slate-300">
        <Text className="font-medium text-xs uppercase">Read More</Text>
      </TouchableOpacity>
    </View>
  </View>)
    
  }

  return (
    <SafeAreaView className="bg-white" style={style.AndroidSafeArea}>
      <View className="flex-row items-center justify-between p-4">
        <GoBack />
        <Text className="text-2xl flex-1 text-center mx-3 py-1 bg-slate-100 rounded-lg">NoticeBoard</Text>
        <Profile />
      </View>

      <View className="flex-row px-3 justify-between">
        <View className="flex-row p-1 space-x-2">
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

      <ScrollView className="p-1 mt-2">
        <View className="h-screen space-y-2 mx-3">

          {notices("Declaration of Mid semester examination","Rajendra Mahto","29 May","https://cdn.sanity.io/images/0f69pfwz/production/362fa4a9e176cd7f8cf6469b1dfcbb330ac70b78-150x150.png?w=2000&fit=max&auto=format")}
          {notices("Announcment for Sport Day Function","Rajendra Mahto","10 May","https://cdn.sanity.io/images/0f69pfwz/production/362fa4a9e176cd7f8cf6469b1dfcbb330ac70b78-150x150.png?w=2000&fit=max&auto=format")}
          {notices("Declaration of Winner for Tech Feast","Ramnish Sinha","24 Mar","https://cdn.sanity.io/images/0f69pfwz/production/6631957784aeae606e2322c1c3970505a07367a6-132x128.png?w=2000&fit=max&auto=format")}
          {notices("Presentation of respective projects","Ramnish Sinha","8 May","https://cdn.sanity.io/images/0f69pfwz/production/6631957784aeae606e2322c1c3970505a07367a6-132x128.png?w=2000&fit=max&auto=format")}
          {notices("Registartion for Short Semester","Rajendra Mahto","15 May","https://cdn.sanity.io/images/0f69pfwz/production/362fa4a9e176cd7f8cf6469b1dfcbb330ac70b78-150x150.png?w=2000&fit=max&auto=format")}
          
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