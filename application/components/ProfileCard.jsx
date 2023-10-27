import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronRightIcon } from "react-native-heroicons/outline";

export default function ProfileCard({ name, uri, div, email, phone, des, qua, linked, youtube, subject, view }) {
    const navigation = useNavigation();
    const state = view

    return (state ?
        (<TouchableOpacity
            onPress={() => {
                navigation.navigate("FaculityDetail", {
                    name, 
                    uri, 
                    div, 
                    email, 
                    phone, 
                    des, 
                    qua, 
                    linked, 
                    youtube, 
                    subject,
                })
            }}
            className="relative flex-row mb-2 bg-slate-100 rounded-md p-2"
        >
            {uri ? (<Image source={{
                uri
            }} className='h-20 w-20 rounded-lg' />) : (<View className="bg-slate-300 h-20 w-20 rounded-lg"></View>)}
            <View className="p-3 text-start">
                <Text className="font-semibold p-1 capitalize text-base">
                    {name}
                </Text>
                <Text className="uppercase p-1 w-40 bg-slate-300 text-center rounded-lg text-xs">
                    {div}
                </Text>
            </View>

            <View className="absolute right-2 top-2 rounded-md p-2 py-8 bg-slate-300">
                <ChevronRightIcon size={20} color={"black"} />
            </View>
        </TouchableOpacity>)
        : (<TouchableOpacity
            onPress={() => {
                navigation.navigate("FaculityDetail", {
                    name, 
                    uri, 
                    div, 
                    email, 
                    phone, 
                    des, 
                    qua, 
                    linked, 
                    youtube, 
                    subject,
                })
            }}
            className="relative justify-center items-center mb-2 w-[32%] min-h-[200px] bg-slate-100 rounded-md py-2"
        >
            {uri ? (<Image source={{
                uri
            }} className='h-32 w-32 rounded-full' />) : (<View className="bg-slate-300 h-32 w-32 rounded-full"></View>)}
            <Text className="font-semibold p-1 capitalize text-center text-xs">
                {name}
            </Text>
            <Text className="uppercase p-1 bg-slate-300 w-[90%] text-center rounded-lg text-[11px]">
                {div}
            </Text>
        </TouchableOpacity>)

    );
}
