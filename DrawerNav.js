import "react-native-gesture-handler";

import { StyleSheet,  } from "react-native";
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Students from "./srceens/Students";
import LogOut from "../MobileApp/srceens/LogOut";
import Courses from "./srceens/Courses";

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Students" component={Students} />
      <Drawer.Screen name="Courses" component={Courses} />
      <Drawer.Screen name="Logout" component={LogOut} />
    </Drawer.Navigator>
    
  );
};

export default DrawerNav;

const styles = StyleSheet.create({});
