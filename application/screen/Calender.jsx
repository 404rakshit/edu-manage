import {
    View,
    Text,
    Platform,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GoBack from "../components/GoBack";
import { CalendarDaysIcon, EllipsisVerticalIcon } from "react-native-heroicons/outline";

export default function Calender() {
    const navigation = useNavigation();

    // const {
    //     params: {
    //         name
    //     },
    // } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    function days(day, holiday){
            return(<Text className={`${holiday ? "bg-lime-300" : "bg-slate-300"} text-center p-3 rounded-full h-12 w-12 m-5 font-semibold`}>{day}</Text>)
    }

    return (
        <SafeAreaView className="bg-white" style={style.AndroidSafeArea}>
            <View className="flex-row items-center justify-between p-4">
                <GoBack />
                <Text className="text-2xl flex-1 text-center mx-3 py-1 bg-slate-100 rounded-lg">Calender</Text>
                <TouchableOpacity>
                    <EllipsisVerticalIcon color={"black"} size={35} />
                </TouchableOpacity>
            </View>

            <ScrollView className="h-screen">
                <View className="m-3 space-y-3">
                    <View className="flex-row space-x-2 p-3 bg-slate-200 rounded-lg h-60">
                        <View>
                        <CalendarDaysIcon color={"black"} size={200} strokeWidth={0.7} />
                        <Text className="font-semibold text-center text-lg -translate-y-3">MAY 2023</Text>
                        </View>
                        <View className="flex-1 justify-center p-3">
                            <TouchableOpacity className="bg-purple-900 rounded-md p-2">
                                <Text className="text-lg text-white mx-auto font-semibold">Enquiry</Text>
                            </TouchableOpacity>
                            <View className="flex-row space-x-2 translate-y-5">
                                <View className="bg-lime-300 h-6 w-6 rounded-full border-2"></View>
                                <Text className="font-semibold text-center ">Holiday</Text>
                            </View>
                            
                        </View>
                    </View>
                    <View className="py-1 flex-row space-x-2">
                        <TouchableOpacity className="flex-1 bg-blue-900 rounded-md p-2">
                            <Text className="text-lg text-white mx-auto font-semibold">Holiday</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-1 bg-green-900 rounded-md p-2">
                            <Text className="text-lg text-white mx-auto font-semibold">Academic</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row justify-center flex-wrap p-2">
                        {days(1)}
                        {days(2)}
                        {days(3)}
                        {days(4)}
                        {days(5,true)}
                        {days(6)}
                        {days(7)}
                        {days(8)}
                        {days(9)}
                        {days(10)}
                        {days(11)}
                        {days(12)}
                        {days(13)}
                        {days(14)}
                        {days(15)}
                        {days(16)}
                        {days(17,true)}
                        {days(18)}
                        {days(19)}
                        {days(20)}
                        {days(21)}
                        {days(22)}
                        {days(23)}
                        {days(24)}
                        {days(25,true)}
                        {days(26)}
                        {days(27)}
                        {days(28)}
                        {days(29)}
                        {days(30)}
                        {days(31)}
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