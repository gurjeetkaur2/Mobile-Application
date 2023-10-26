import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./srceens/HomeScreen";
import LogIn from "./srceens/LogInScreen";
import Register from "./srceens/Register";
import ViewStudent from "./srceens/ViewStudent";
import DeleteData from "./srceens/DeleteData";
import Students from "./srceens/Students";
import Update from "./srceens/Update";
import Logout from './srceens/LogOut'
import Courses from "./srceens/Courses";
import RegisterCourse from "./srceens/RegisterCourse";
import ViewCourse from "./srceens/ViewCourse";
import UpdateCourse from "./srceens/UpdateCourse";
import DeleteCourse from "./srceens/DeleteCourse";
import DrawerNav from "./DrawerNav";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen name="Home" component={DrawerNav}
        options= {{headerShown: false}}
        />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="View" component={ViewStudent} />
        <Stack.Screen name="Delete" component={DeleteData} />
        <Stack.Screen name="Update" component={Update} />
        <Stack.Screen name="RegisterCourse" component={RegisterCourse} />
        <Stack.Screen name="ViewCourse" component={ViewCourse} />
        <Stack.Screen name="UpdateCourse" component={UpdateCourse}/>
        <Stack.Screen name="DeleteCourse" component={DeleteCourse} />
        <Stack.Screen name="Logout" component={Logout}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
