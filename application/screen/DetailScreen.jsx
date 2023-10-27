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
  Linking,
  Image,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { EnvelopeIcon, LockClosedIcon, KeyIcon, Cog6ToothIcon, UserIcon, IdentificationIcon, BuildingLibraryIcon, PhoneIcon, PencilIcon, ChartBarIcon, GlobeEuropeAfricaIcon, ArrowLeftOnRectangleIcon } from "react-native-heroicons/outline";
import GoBack from "../components/GoBack";
import { useAsyncStorage } from "@react-native-async-storage/async-storage"

export default function DetailScreen() {
  const { getItem, setItem } = useAsyncStorage('@user');

  const readItemFromStorage = async () => {
    const item = await getItem();
    const items = JSON.parse(item)
    setName(items?.name)
    setRoll(items?.roll)
    setEmail(items?.email)
    setPhone(items?.phone)
    setBranch(items?.branch)
    setSem(items?.sem)
    setImage("https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg")
    setChange(items ? false : true)
  };

  const writeItemToStorage = async newValue => {
    await setItem(JSON.stringify(newValue));
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  const navigation = useNavigation();

  const [show, setShow] = useState(true);
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);
  const [error, setError] = useState(null);

  const [change, setChange] = useState(true)
  const [name, setName] = useState(null);
  const [roll, setRoll] = useState(null);
  const [branch, setBranch] = useState(null);
  const [sem, setSem] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [image, setImage] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white" style={style.AndroidSafeArea}>
      {change ? "" : <View className="flex-row items-center justify-between p-4">
        <GoBack />
        <Text className="text-2xl flex-1 mx-3 py-1 text-center rounded-lg bg-slate-100">Profile</Text>
        <TouchableOpacity>
          <Cog6ToothIcon color={"black"} size={35} />
        </TouchableOpacity>
      </View>}

      <ScrollView>
        {change ?

          (<View className="h-screen justify-center items-center">
            <View className="space-y-3">
              <View className="flex-row items-center space-x-2">
                <EnvelopeIcon color={"black"} size={24} />
                <Text className="text-xl font-semibold">Email</Text>
              </View>
              <TextInput
                className="bg-slate-200 p-3 w-80 rounded"
                placeholder="Enter Your Email"
                textContentType="emailAddress"
                keyboardType="email-address"
                onChangeText={setUser}
              />
              <View className="flex-row items-center space-x-2">
                <LockClosedIcon color={"black"} size={24} />
                <Text className="text-xl font-semibold">Password</Text>
              </View>
              <TextInput
                className="bg-slate-200 p-3 w-80 rounded"
                placeholder="Enter Your Password"
                secureTextEntry={true}
                textContentType="password"
                keyboardType="default"
                onChangeText={setPass}
              />

              <View className="flex-row space-x-2">
                <Text>Not Registered?</Text>
                <TouchableOpacity onPress={() => {
                  Linking.openURL("https://edu-manage-theta.vercel.app/")
                }}><Text className="text-blue-600 ">SignUp</Text></TouchableOpacity>
              </View>

              <TouchableOpacity onPress={async () => {
                if (!user) return null
                if (!pass) return null
                setShow(false)
                // console.log("HEllo wolrd");
                await fetch('https://main-bvxea6i-gcnlycbi4rt3m.eu-5.platformsh.site/user/login', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    email: user,
                    password: pass,
                  }),
                }).then(res => res.json()).then(res => {
                  setError(null)
                  if (res.message) return (setError(res.message, setShow(true)))
                  // console.log(res);
                  setChange(false)
                  setName(res.name)
                  setRoll(res.roll)
                  setEmail(res.email)
                  setPhone(res.phone)
                  setBranch(res.branch)
                  setSem(res.sem)
                  setImage(res.image)
                  writeItemToStorage(res)
                });
              }} className={`${show ? 'opacity-100' : 'opacity-20'} bg-black p-3 rounded-md flex-row space-x-2 items-center justify-center`}>
                <KeyIcon color={"white"} size={30} />
                <Text className="text-white  font-semibold uppercase">Login</Text>
              </TouchableOpacity>

              {error ? <Text className="absolute -bottom-10 text-red-600 font-semibold text-center">{error}</Text> : <></>}

            </View>
            <View className="h-60"></View>
          </View>) :

          (<View className="h-[90vh] m-5 space-y-3">
            <View className="flex-row p-1 space-x-2 items-center justify-evenly">
              {/* {image ? <Image source={{
                uri: image
              }} className='h-40 w-40 rounded-full' />
                : <View className='h-40 w-40 rounded-full bg-slate-100'></View>} */}
              <Image source={{
                uri: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
              }} className='h-40 w-40 rounded-full' />
              <View className="space-y-2 flex-1 p-5">
                {/* Roll */}
                <View className="flex-row space-x-2 items-start">
                  <IdentificationIcon color={"black"} size={24} strokeWidth={2} />
                  {roll ? <Text className=" font-medium">{roll}</Text> : <View className="rounded-md w-32 h-6 bg-slate-100"></View>}
                </View>

                {/* Name */}
                <View className="flex-row space-x-2 items-start">
                  <UserIcon color={"black"} size={24} strokeWidth={2} />
                  {name ? <Text className=" font-medium">{name}</Text> : <View className="rounded-md w-52 h-6 bg-slate-100"></View>}
                </View>

                {/* Branch */}
                <View className="flex-row space-x-2 items-start">
                  <BuildingLibraryIcon color={"black"} size={24} strokeWidth={2} />
                  {branch ? <Text className=" font-medium">{branch} {sem}</Text> : <View className="rounded-md w-32 h-6 bg-slate-100"></View>}
                </View>

                {/* Phone */}
                <View className="flex-row space-x-2 items-start">
                  <PhoneIcon color={"black"} size={24} strokeWidth={2} />
                  {phone ? <Text className=" font-medium">{phone}</Text> : <View className="rounded-md w-32 h-6 bg-slate-100"></View>}
                </View>

                {/* Email */}
                <View className="flex-row space-x-2 items-start">
                  <EnvelopeIcon color={"black"} size={24} strokeWidth={2} />
                  {email ? <Text className=" font-medium">{email}</Text> : <View className="rounded-md w-52 h-6 bg-slate-100"></View>}
                </View>

              </View>
            </View>
            <TouchableOpacity className="bg-lime-700 flex-row justify-center items-center space-x-2 rounded-md p-2">
              <PencilIcon color={"white"} size={24} strokeWidth={2} />
              <Text className="text-lg text-white font-semibold">Edit Profile</Text>
            </TouchableOpacity>
            <View className="space-y-2">

              <View className="flex-row space-x-2">
                <View className="bg-slate-200 justify-center space-x-2 items-start flex-row rounded-md flex-1 p-3">
                  <ChartBarIcon color={"black"} strokeWidth={2} />
                  <Text className="uppercase font-bold text-base">8.91</Text>
                </View>
                <View className="bg-slate-200 justify-center space-x-2 items-start flex-row rounded-md flex-1 p-3">
                  <GlobeEuropeAfricaIcon color={"black"} strokeWidth={1.5} />
                  <Text className="uppercase font-bold text-base">16</Text>
                </View>
              </View>

            </View>

            <View className="p-3 rounded-lg w-20 bg-red-500">
              <Text className="font-semibold mx-auto text-white">About</Text>
            </View>
            <View className="bg-slate-200 justify-center rounded-md p-3">
              {/* <GlobeEuropeAfricaIcon color={"black"} strokeWidth={1.5} /> */}
              <Text className="text-center font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto exercitationem minus, vitae labore accusamus in illo illum.</Text>
            </View>

            <View className="p-3 rounded-lg w-20 bg-amber-500">
              <Text className="font-semibold mx-auto text-white">Skills</Text>
            </View>

            <View className="flex-row flex-wrap space-x-2">
              <Text className="font-semibold p-1 px-3 my-2 bg-blue-200 rounded-md">AutoCAD</Text>
              <Text className="font-semibold p-1 px-3 my-2 bg-blue-200 rounded-md">CNC</Text>
              <Text className="font-semibold p-1 px-3 my-2 bg-blue-200 rounded-md">HTML</Text>
              <Text className="font-semibold p-1 px-3 my-2 bg-blue-200 rounded-md">CSS</Text>
              <Text className="font-semibold p-1 px-3 my-2 bg-blue-200 rounded-md">JavaScript</Text>
            </View>

            <View className="p-3 rounded-lg w-28 bg-blue-500">
              <Text className="font-semibold mx-auto text-white">Interests</Text>
            </View>
            <View className="flex-row flex-wrap space-x-2">
              <Text className="font-semibold p-1 px-3 my-2 bg-blue-200 rounded-md">IoT</Text>
              <Text className="font-semibold p-1 px-3 my-2 bg-blue-200 rounded-md">Arduino</Text>
              <Text className="font-semibold p-1 px-3 my-2 bg-blue-200 rounded-md">Gaming</Text>
            </View>

            <TouchableOpacity onPress={() => {
              writeItemToStorage(null)
              setChange(true)
              setShow(true)
              setUser(null)
              setPass(null)
            }} className="bg-stone-800 mb-auto flex-row justify-center items-center space-x-2 rounded-md p-2">
              <ArrowLeftOnRectangleIcon color={"white"} size={24} strokeWidth={2} />
              <Text className="text-lg text-white font-semibold">Logout</Text>
            </TouchableOpacity>

          </View>)}

      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});