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
import { useNavigation, useRoute } from "@react-navigation/native";
import GoBack from "../components/GoBack";
import { EllipsisVerticalIcon } from "react-native-heroicons/outline";
import { Image } from "react-native";

export default function Notice() {
    const navigation = useNavigation();

    const {
        params: {
            title, issedby, date, img
        },
    } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="bg-white" style={style.AndroidSafeArea}>
            <View className="flex-row items-center justify-between p-4">
                <GoBack />
                <Text className="text-2xl flex-1 text-center mx-3 py-1 bg-slate-100 rounded-lg">Notice</Text>
                <TouchableOpacity>
                    <EllipsisVerticalIcon color={"black"} size={35} />
                </TouchableOpacity>
            </View>

            <ScrollView className="h-screen">
                <View className="m-3 space-y-3">
                    <View className="flex-row items-center space-x-2 py-2">
                        <Image source={{uri: img}} className="bg-slate-200 h-28 w-28 rounded-full"/>
                        {/* <View ></View> */}
                        <View className="space-y-2">
                            <Text className="text-lg font-semibold w-10/12">{title}</Text>
                            <View className="flex-row space-x-2 items-center">
                                <Text className="text-gray-500 font-semibold bg-slate-200 py-1 px-2 rounded-lg">{date}</Text>
                                <Text className="text-gray-500 font-semibold">{issedby}</Text>
                            </View>

                        </View>
                    </View>
                <View className="bg-slate-200 h-40 rounded-lg"></View>
                <View className="bg-slate-200 h-40 rounded-lg"></View>
                <View className="bg-slate-200 h-40 rounded-lg"></View>
                <View className="bg-slate-200 h-40 rounded-lg"></View>
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