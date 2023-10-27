import {
    View,
    Text,
    Platform,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GoBack from "../components/GoBack";
import Profile from "../components/Profile";

export default function Syllabus() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    function mod(mdule, name, topic) {
        return (
            <View className="space-y-2 my-6">
                <View className="flex-row space-x-2 rounded-lg">
                    <Text className="font-semibold text-lg p-2 py-1 bg-slate-400 rounded-md">{mdule}</Text>
                </View>
                {name ? <View className="flex-row space-x-2 rounded-lg">
                    <Text className="font-semibold text-lg p-2 py-1 bg-slate-300 rounded-md">{name}</Text>
                </View> : <></>}
                <View className="flex-row flex-wrap">
                    {topic?.split(",").map(e => <Text key={e} className="text-base font-semibold p-1 px-3 m-2 bg-blue-200 rounded-2xl">{e}</Text>)}
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView className="bg-white" style={style.AndroidSafeArea}>
            <View className="flex-row items-center justify-between p-4">
                <GoBack />
                <Text className="text-2xl flex-1 text-center mx-3 py-1 bg-slate-100 rounded-lg">Syllabus</Text>
                <Profile />
            </View>

            <ScrollView className="h-auto ">
                <View className="m-3 space-y-3">
                    <View className="flex-row space-x-2">
                        <View className="bg-slate-200 justify-center space-x-2 items-center flex-row rounded-md flex-1 p-3">
                            <Text className="uppercase font-bold text-base">{"6TH"}</Text>
                        </View>
                        <View className="bg-slate-200 justify-center space-x-2 items-center flex-row rounded-md flex-1 p-3">
                            <Text className="uppercase font-bold text-base">{"CSE"}</Text>
                        </View>
                    </View>
                    <View className="bg-slate-200 justify-center space-x-2 items-center flex-row rounded-md p-3">
                        <Text className="capitalize font-bold text-base">{"TOTAL QUALITY MANAGEMENT"}</Text>
                    </View>

                    {mod("Module I", "Introdution", "Management Concept, Function or Process, Characteristics of Management,Total Quality Management Concept, Objective, Scope, Principles of TQM, Evolution of TQM, Difference of Quality Vs Total Quality Management.")}
                    {mod("Module II", "Components of Total quality Management", "Customer Supplier Relationship in TQM System, Managerial Role in TQM, Value, vision, Mission and goals in TQM, Practices for TQM: TQM and Human Resource Development, Need and Significance of TQM, Process of TQM")}
                    {mod("Module III", "Quality Management Systems", "Need for ISO 9000 and Other Quality Systems, ISO 9000:2000 Quality System – Elements, Implementation of Quality system Documentation, ISO 14000 – Concept, Requirements and Benefits")}
                    {mod("Module IV", "Benchmarking", "Introduction, Reasons to Benchmark, Benchmarking Process, Quality Function Deployment (QFD), Cost of Quality, QFD Process. Six- Sigma")}
                    {mod("Module V", "Quality Circle", "Purpose, Benefits, Problem in implementation of quality circles, Requirements of effective quality Circle.")}

                    <View className="space-y-2 my-6">
                        <View className="flex-row space-x-2 rounded-lg">
                            <Text className="font-semibold text-lg p-2 py-1 bg-lime-300 rounded-md">Text & Reference Books</Text>
                        </View>
                                          
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