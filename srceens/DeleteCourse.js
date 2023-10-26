import { StyleSheet, TextInput, Text, View } from 'react-native'
import React, { useState} from 'react'
import AppButton from '../components/AppButton'
import { DatabaseConnection } from '../DataBase/Database'

const db = DatabaseConnection.getConnection();

const DeleteCourse = () => {
  const [course_id, setcourse_id] = useState('')

  const delete_course = () => {
    db.transaction(function (tx) {
      tx.executeSql(
        'DELETE FROM table_courses where course_id=?',
        [course_id],
        (tx, results) => {
          console.log('Course data deleted successfully')
          navigation.navigate('Home')
        }
      )
    })
  }
  return (
    <View style={styles.view}>
      <Text style={styles.heading}>Delete student data from database</Text>
      <TextInput
        placeholder='enter Course id'
        value={course_id}
        onChangeText={(course_id)=>setcourse_id(course_id)}
        style={styles.input}
      />

      <AppButton
        title='Delete Course'
        onPress={delete_course}/>
    </View>
  )
}

export default DeleteCourse

const styles = StyleSheet.create({
  heading: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000033",
    padding: 10,
    margin: 8,
},
  view: {
    borderWidth: 3,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 7,
    padding: 10,
    backgroundColor: "white",
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height:55,
    
    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 7,

},
})