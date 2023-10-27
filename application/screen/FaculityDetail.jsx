import {
    View,
    Text,
    Platform,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    Linking,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Profile from "../components/Profile";
import GoBack from "../components/GoBack";
import { AcademicCapIcon, BookOpenIcon, EnvelopeIcon, PhoneIcon, SparklesIcon } from "react-native-heroicons/outline";
// import sanityClient, { urlFor } from "../sanity"

export default function FaculityDetail() {
    const navigation = useNavigation();

    const {
        params: {
            name,
            uri,
            div,
            email,
            phone,
            des,
            qua,
            linked,
            youtube,
            subject
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
                <Text className="text-2xl px-20 flex-1 text-center mx-3 py-1 bg-slate-100 rounded-lg">Details</Text>
                <Profile />
            </View>

            <ScrollView className="space-y-2 text-black text-2xl p-3 min-h-screen">
                <View className="flex-row p-2 rounded-md">
                    <Image source={{ uri }} className='h-40 w-40 rounded-lg' />
                    <View className="flex-1 space-y-2 justify-end px-3">
                        <Text className="font-bold text-xl">{name}</Text>
                        <Text style={{width: 150}} className="font-semibold text-xs p-1 bg-slate-200 rounded-md">{des}</Text>
                        <TouchableOpacity className="flex-row items-center justify-center rounded-md p-1 bg-lime-700">
                            <SparklesIcon color={"white"} />
                            <Text className="text-center uppercase text-lg font-bold text-white">Remarks</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text className="p-2 rounded-md bg-slate-200 text-center text-base font-semibold">Department : {div}</Text>

                <View className="space-y-2 py-3">
                    <View className="flex-row items-center p-2">
                        <TouchableOpacity onPress={() => {
                            Linking.openURL(`mailto:${email}`)
                        }} className="flex-1 items-center p-2 bg-slate-300 w-20 rounded-lg">
                            <EnvelopeIcon color={"black"} strokeWidth={2} size={30}/>
                        </TouchableOpacity>
                        <Text className="flex-[4] mx-10 text-base font-semibold">{email || "---"}</Text>
                    </View>

                    <View className="flex-row items-center p-2 ">
                        <TouchableOpacity onPress={() => {
                            Linking.openURL(`tel:${phone}`)
                        }} className="flex-1 items-center p-2 bg-slate-300 w-20 rounded-lg">
                            <PhoneIcon color={"black"} strokeWidth={2} size={30} />
                        </TouchableOpacity>
                        <Text className="flex-[4] mx-10 text-base font-semibold">{phone || "---"}</Text>
                    </View>

                    {qua ? (<View className="flex-row items-center p-2 ">
                        <TouchableOpacity className="flex-1 items-center p-2 bg-slate-300 w-20 rounded-lg">
                            <AcademicCapIcon color={"black"} strokeWidth={2} size={30} />
                        </TouchableOpacity>
                        <Text className="flex-[4] mx-10 text-base font-semibold">{qua || "---"}</Text>
                    </View>) : (<View className="hidden"></View>)}
                    

                    {linked ? (<View className="flex-row items-center p-2 ">
                        <TouchableOpacity onPress={() => {
                            if (linked) Linking.openURL(linked)
                        }} className="relative flex-1 items-center p-2 overflow-hidden bg-slate-300 w-20 h-11 rounded-lg">
                            <Image className="absolute -left-15 -top-6 h-24 w-24" source={require('../assets/linkedin.png')} />
                        </TouchableOpacity>
                        <Text className="flex-[4] mx-10 text-base font-semibold">{linked?.split("/")[4]}</Text>
                    </View>) : (<View className="hidden"></View>)}

                    {youtube ? (<View className="flex-row items-center p-2 ">
                        <TouchableOpacity onPress={() => {
                            if (youtube) Linking.openURL(youtube)
                        }} className="relative flex-1 items-center p-2 overflow-hidden bg-slate-300 w-20 h-11 rounded-lg">
                            <Image className="absolute -left-15 -top-[26px] h-24 w-24" source={require('../assets/youtube.png')} />
                        </TouchableOpacity>
                        <Text className="flex-[4] mx-10 text-base font-semibold">@{youtube?.split("@")[1]}</Text>
                    </View>) : (<View className="hidden"></View>)}

                    <View className="flex-row items-start p-2 ">
                        <TouchableOpacity className="relative flex-1 items-center p-2 overflow-hidden bg-slate-300 w-20 h-11 rounded-lg">
                            <BookOpenIcon color={"black"} strokeWidth={2} size={30} />
                        </TouchableOpacity>
                        <View className="flex-[4] flex-row flex-wrap mx-10">
                            {subject?.map(e => {
                                return (<Text key={e} className="text-base font-semibold p-1 px-3 m-2 bg-blue-200 rounded-2xl">{e}</Text>)
                            }) || <Text>---</Text>}
                        </View>
                    </View>

                </View>
                            <View className="h-40"></View>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    AndroidSafeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});