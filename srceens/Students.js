import React, { useEffect } from "react";
import { KeyboardAvoidingView, Text, StyleSheet } from "react-native";

import AppButton from "../components/AppButton";

import { DatabaseConnection } from "../DataBase/Database";

const db = DatabaseConnection.getConnection();

const Students = ({ navigation }) => {
  useEffect(() => {
    db.transaction(function (tx) {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS table_student(student_id INTEGER PRIMARY KEY AUTOINCREMENT, student_firstname VARCHAR(25), student_lastname VARCHAR(25), student_address VARCHAR(250), student_email VARCHAR(50))",
        [],
        (tx, results) => {
          console.log("Table Created Successfully");
        }
      );
    });
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.text}>Welcome to VISION Official Admin Account.</Text>

      <AppButton title="Register" onPress={() => navigation.navigate("Register")}/>
      <AppButton title="View" onPress={() => navigation.navigate("View")} />
      <AppButton title="Delete" onPress={() => navigation.navigate("Delete")} />
    </KeyboardAvoidingView>
  );
};

export default Students;

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
