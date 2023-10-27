import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import DetailScreen from "./screen/DetailScreen";
import NoticeBoard from "./screen/Noticeboard";
import Faculity from "./screen/Faculity";
import FaculityDetail from "./screen/FaculityDetail";
import Attendance from "./screen/Attendance";
import Notification from "./screen/Notifications";
import Community from "./screen/Community";
import Chat from "./screen/Chat";
import Syllabus from "./screen/Syllabus";
import Mess from "./screen/Mess";
import Calender from "./screen/Calender";
import Notice from "./screen/Notice";
import Events from "./screen/Events";
// import { HomeScreen, DetailScreen, NoticeBoard, Faculity, FaculityDetail, Attendance } from "./screen"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Notice" component={NoticeBoard} />
        <Stack.Screen name="Faculity" component={Faculity} />
        <Stack.Screen name="FaculityDetail" component={FaculityDetail} />
        <Stack.Screen name="Attendance" component={Attendance} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Mess" component={Mess} />
        <Stack.Screen name="Calender" component={Calender} />
        <Stack.Screen name="Syllabus" component={Syllabus} />
        <Stack.Screen name="Notices" component={Notice} />
        <Stack.Screen name="Events" component={Events} />
      </Stack.Navigator>
      {/* <View className="flex-row justify-evenly my-2">
        <HomeModernIcon color={"black"} size={35} />
        <TouchableOpacity>
          <BellAlertIcon color={"black"} size={35} />
        </TouchableOpacity>
      </View> */}
    </NavigationContainer>
  );
}
