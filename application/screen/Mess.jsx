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
    Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GoBack from "../components/GoBack";
import { EllipsisVerticalIcon } from "react-native-heroicons/outline";

export default function Mess() {
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

    return (
        <SafeAreaView className="bg-white" style={style.AndroidSafeArea}>
            <View className="flex-row items-center justify-between p-4">
                <GoBack />
                <Text className="text-2xl flex-1 text-center mx-3 py-1 bg-slate-100 rounded-lg">Mess</Text>
                <TouchableOpacity>
                    <EllipsisVerticalIcon color={"black"} size={35} />
                </TouchableOpacity>
            </View>

            <ScrollView className="h-screen">
                <View className="m-3 space-y-3">
                    <Image source={{ uri: "https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food.jpg" }} className="rounded-lg h-60 bg-slate-300" />
                    <TouchableOpacity className="bg-blue-900 rounded-md py-2">
                        <Text className="text-lg text-white mx-auto font-semibold">Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-green-900 rounded-md py-2">
                        <Text className="text-lg text-white mx-auto font-semibold">Review</Text>
                    </TouchableOpacity>
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