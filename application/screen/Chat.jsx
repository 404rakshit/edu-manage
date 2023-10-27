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

export default function Chat() {
    const navigation = useNavigation();

    const {
        params: {
            name
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
                <Text className="text-2xl flex-1 text-center mx-3 py-1 bg-slate-100 rounded-lg">{name}</Text>
                <TouchableOpacity>
                    <EllipsisVerticalIcon color={"black"} size={35} />
                </TouchableOpacity>
            </View>

            <ScrollView className="h-[85vh]">
            <View className="m-3 space-y-3">
            </View>
            </ScrollView>

            <View className="m-3 space-y-3">
                <TextInput className="bg-slate-300 p-3 rounded-md" />
            </View>

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    AndroidSafeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});