import {StyleSheet, Text, View, FlatList, ScrollView,Pressable} from "react-native";
import React, { useState, useEffect } from "react";
import { DatabaseConnection } from "../DataBase/Database";

const db = DatabaseConnection.getConnection();

const ViewStudent = ({ navigation }) => {
  const [FlatListItems, setFlatListItems] = useState([]);
  useEffect(() => {
    db.transaction(function (tx) {
      tx.executeSql(
        "SELECT * FROM table_student",
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; i++) {
            temp.push(results.rows.item(i));
          }
          setFlatListItems(temp);
        }
      );
    });
  }, []);

  const listViewItems = (item) => {
    return (
      <ScrollView>
        <View style={styles.view}>
          <Text style={styles.text}>student id:{item.student_id}</Text>
          <Text style={styles.text}>student first name:{item.student_firstname}</Text>
          <Text style={styles.text}>student last name:{item.student_lastname}</Text>
          <Text style={styles.text}>student last name:{item.student_lastname}</Text>
          <Text style={styles.text}>student address:{item.student_address}</Text>
          <Text style={styles.text}>student last name:{item.student_email}</Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <View>
      {/* <Text style={styles.heading}>View The List Here of All Our Students</Text> */}
      <FlatList
        data={FlatListItems}
        keyExtractor={(item, index) => index.toString()}
        // renderItem={({item})=>listViewItems(item)}
        renderItem={({ item }) => (
          <View style={styles.view}>
            <Text style={styles.text}>student id - {item.student_id}</Text>
            <Text style={styles.text}>student first name - {item.student_firstname}</Text>
            <Text style={styles.text}>student last name - {item.student_lastname}</Text>
            <Text style={styles.text}>student address - {item.student_address}</Text>
            <Text style={styles.text}>student last name - {item.student_email}</Text>
            <Text style={styles.textClick} onPress={() => navigation.navigate("Update", (item = item))}>
              {" "}
              press here to update info
            </Text>
          </View>
        )}
      />
    </View>
  );
};
export default ViewStudent;

const styles = StyleSheet.create({
  heading: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#000033",
      padding: 15,
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
  textClick: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    textAlign:'center'
    
  }
});
