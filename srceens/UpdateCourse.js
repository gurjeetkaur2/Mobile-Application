import { StyleSheet, Text, View, TextInput,  } from "react-native";
import React, { useEffect, useState } from "react";

import AppButton from "../components/AppButton";

import { DatabaseConnection } from "../DataBase/Database";
import { useNavigation } from "@react-navigation/native";


const db = DatabaseConnection.getConnection();

const UpdateCourse = (props) => {
  
  const navigation = useNavigation()

  const [course_name, setcourse_name] = useState("");
  const [course_code, setcourse_code] = useState("");
  const [course_tutor, setcourse_tutor] = useState("");
  const [course_id, setcourse_id] = useState(props.route.params.course_id);

  useEffect(() => {
    setcourse_id(props.route.params.course_id);
    setcourse_name(props.route.params.course_name);
    setcourse_code(props.route.params.course_code);
    setcourse_tutor(props.route.params.course_tutor);
  }, []);

  const update_course = () => {
    
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE table_courses set course_name=?, course_code=?, course_tutor=? where course_id=?",
        [
          course_name,
          course_code,
          course_tutor,
          course_id
        ],
        (tx, results) => {
          navigation.navigate('Home')
        }
      );
    });
  };
  return (
    <View>
      <Text style={styles.heading}>Update Course Details</Text>

      <View style={styles.view}>
        <Text style={styles.text}>Course Name - {course_name}</Text>
        <Text style={styles.text}>Course Code - {course_code}</Text>
        <Text style={styles.text}>Course Tutor - {course_tutor}</Text>
        <Text style={styles.heading}>Please fill the following information again to update.</Text>
        <TextInput
          placeholder="Enter Course Name"
          value={course_name}
          onChangeText={(text) => setcourse_name(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Course Code"
          value={course_code}
          onChangeText={(text) => setcourse_code(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Tutor Name"
          value={course_tutor}
          onChangeText={(text) => setcourse_tutor(text)}
          style={styles.input}
        />
        <AppButton title="Update" onPress={update_course} />
      </View>
    </View>
  );
};

export default UpdateCourse;

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

 

