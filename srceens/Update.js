import { StyleSheet, Text, View, TextInput,  } from "react-native";
import React, { useEffect, useState } from "react";

import AppButton from "../components/AppButton";

import { DatabaseConnection } from "../DataBase/Database";
import { useNavigation } from "@react-navigation/native";

const db = DatabaseConnection.getConnection();

const Update = (props) => {
  const navigation = useNavigation()
  const [student_firstname, setstudent_firstname] = useState("");
  const [student_lastname, setstudent_lastname] = useState("");
  const [student_address, setstudent_address] = useState("");
  const [student_email, setstudent_email] = useState("");
  const [student_id, setstudent_id] = useState(props.route.params.student_id);

  useEffect(() => {
    setstudent_id(props.route.params.student_id);
    setstudent_firstname(props.route.params.student_firstname);
    setstudent_lastname(props.route.params.student_lastname);
    setstudent_address(props.route.params.student_address);
    setstudent_email(props.route.params.student_email);
  }, []);

  const update_student = () => {

    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE table_student set student_firstname=?, student_lastname=?, student_address=?, student_email=? where student_id=?",
        [
          student_firstname,
          student_lastname,
          student_address,
          student_email,
          student_id,
        ],
        (tx, results) => {
          console.log("Results", results.rowsAffected)
          
          navigation.navigate('Home')
        }
      );
    });
  };

  return (
    <View>
      <Text style={styles.heading}>Update</Text>

      <View style={styles.view}>
        <Text style={styles.text}>student first name - {student_firstname}</Text>
        <Text style={styles.text}>student last name - {student_lastname}</Text>
        <Text style={styles.text}>student address - {student_address}</Text>
        <Text style={styles.text}>student last name - {student_email}</Text>
        <Text style={styles.heading}>Please fill the following information again to update.</Text>
        <TextInput
          placeholder="Enter first Name"
          value={student_firstname}
          onChangeText={(text) => setstudent_firstname(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter last Name"
          value={student_lastname}
          onChangeText={(text) => setstudent_lastname(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter address"
          value={student_address}
          onChangeText={(text) => setstudent_address(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Email Id"
          value={student_email}
          onChangeText={(text) => setstudent_email(text)}
          style={styles.input}
        />
        <AppButton title="Update" onPress={update_student} />
      </View>
    </View>
  );
};

export default Update;

const styles = StyleSheet.create({
  heading: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000033",
    padding: 10,
    margin: 4,
},
  view: {
    borderWidth: 3,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 7,
    padding: 10,
    backgroundColor: "white",
  },
  text: {
    fontSize: 15,
    color: "#003333",
    fontWeight:"bold"
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height:55,
    
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 7,
},
});
