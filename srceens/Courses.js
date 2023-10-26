import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import AppButton from "../components/AppButton";

import { DatabaseConnection } from "../DataBase/Database";

const db = DatabaseConnection.getConnection();

const Courses = ({ navigation }) => {
  useEffect(() => {
    db.transaction(function (tx) {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS table_courses(course_id INTEGER PRIMARY KEY AUTOINCREMENT, course_name VARCHAR(25), course_code VARCHAR(25), course_tutor VARCHAR(35))",
        [],
        (tx, results) => {
          console.log("Table Created Successfully");
        }
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to VISION Official Admin Account.</Text>
      <Text style={styles.text}>please register or view course info here</Text>

      <AppButton title="Register Course" onPress={() => navigation.navigate("RegisterCourse")}/> 
      <AppButton title="View Course" onPress={() => navigation.navigate("ViewCourse")} />
      <AppButton title="Delete Course" onPress={() => navigation.navigate("DeleteCourse")} />
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000033",
    padding: 15,
    margin: 4,
  },
});
