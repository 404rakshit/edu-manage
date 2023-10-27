import {
    View,
    Text,
    Platform,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Profile from "../components/Profile";
import GoBack from "../components/GoBack";
import { AdjustmentsVerticalIcon, ChevronDownIcon, QueueListIcon, Squares2X2Icon } from "react-native-heroicons/outline";
import ProfileCard from "../components/ProfileCard";
import sanityClient, { urlFor } from "../sanity"
import { useAsyncStorage } from "@react-native-async-storage/async-storage"

export default function Faculity() {
    // const [value, setValue] = useState('value');
    const { getItem, setItem } = useAsyncStorage('@view');

    const readItemFromStorage = async () => {
        const item = await getItem();
        setState(JSON.parse(item) || [null, true]);
    };

    const writeItemToStorage = async newValue => {
        await setItem(JSON.stringify(newValue));
        setState(newValue);
    };

    useEffect(() => {
        readItemFromStorage();
    }, []);

    const navigation = useNavigation();

    const [faculity, setFaculity] = useState([]);
    const [state, setState] = useState([null, true])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == 'faculity'] | order(id asc)`
        )
            .then((data) => {
                setFaculity(data);
            });
    }, [])

    return (
        <SafeAreaView className="bg-white" style={style.AndroidSafeArea}>
            <View className="flex-row items-center justify-between p-4">
                <GoBack />
                <Text className="text-2xl flex-1 text-center mx-3 py-1 bg-slate-100 rounded-lg">Faculity Members</Text>
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
                <TouchableOpacity onPress={() => {
                    state[0] ? writeItemToStorage([null, true])  : writeItemToStorage(['flex-row flex-wrap', false])
                    setFaculity([])
                    sanityClient.fetch(
                        `*[_type == 'faculity'] | order(id asc)`
                    )
                        .then((data) => {
                            setFaculity(data);
                        });
                }}>
                    {state[1] ? (<Squares2X2Icon size={35} color={"black"} />) : (<QueueListIcon size={35} color={"black"} />)}
                </TouchableOpacity>

            </View>
            {/* flex-row flex-wrap */}
            <ScrollView className="p-3">
                <View id="tray" className={`${state[0]} justify-between space-x-4 pb-40`}>
                    {faculity[0] ? (faculity.map(e => {
                        const img = urlFor(e.image).url()
                        return (
                            <ProfileCard
                                key={e.id}
                                name={e.name}
                                uri={img}
                                div={e.branch}
                                email={e.email}
                                phone={e.phone}
                                des={e.designation}
                                qua={e.qualifications}
                                linked={e.linkedin}
                                youtube={e.youtube}
                                subject={e.subject}
                                view={state[1]}
                            />
                        )
                    })) : <>
                        <ProfileCard view={state[1]} />
                        <ProfileCard view={state[1]} />
                        <ProfileCard view={state[1]} />
                        <ProfileCard view={state[1]} />
                        <ProfileCard view={state[1]} />
                        <ProfileCard view={state[1]} />
                        <ProfileCard view={state[1]} />
                        <ProfileCard view={state[1]} />
                        <ProfileCard view={state[1]} />
                    </>}
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