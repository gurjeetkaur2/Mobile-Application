import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState} from 'react'
import AppButton from '../components/AppButton'
import { DatabaseConnection } from '../DataBase/Database'

const db = DatabaseConnection.getConnection();


const DeleteData = ({navigation}) => {

  const [student_id, setStudent_id] = useState('')

  const delete_student = () => {
    db.transaction(function (tx) {
      tx.executeSql(
        'DELETE FROM table_student where student_id=?',
        [student_id],
        (tx, results) => {
          console.log('Student data deleted successfully')
          navigation.navigate('Home')
        }
      )
    })
  }
  return (
    <View style={styles.view}>
      <Text style={styles.heading}>Delete student data from database</Text>
      <TextInput
        placeholder='enter student id'
        value={student_id}
        onChangeText={(student_id)=>setStudent_id(student_id)}
        style={styles.input}
      />

      <AppButton
        title='Delete Student'
        onPress={delete_student}/>
    </View>
  )
}

export default DeleteData

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