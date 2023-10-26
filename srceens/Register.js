import { StyleSheet, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'

import AppButton from '../components/AppButton'

import { DatabaseConnection } from '../DataBase/Database'


const db = DatabaseConnection.getConnection();

const Register = ({ navigation }) => {

  const [student_firstname, setstudent_firstname] = useState('')
  const [student_lastname, setstudent_lastname] = useState('')
  const [student_address, setstudent_address] = useState('')
  const [student_email, setstudent_email] = useState('')
  
  const Register_student = () => {
    console.log(student_firstname,student_lastname,student_address, student_email, )

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_student(student_firstname, student_lastname, student_address, student_email)VALUES(?,?,?,?)',
        [student_firstname, student_lastname, student_address, student_email],
        (tx, result) => {
          console.log('Student Register Successfully')
          navigation.navigate('Home')
        }
      )
      
    })
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.view}>
      <Text style={styles.heading}>Please fill following information to register student</Text>
      <TextInput
        placeholder='Enter first Name'
        value={student_firstname}
        onChangeText={(student_firstname) => setstudent_firstname(student_firstname)}
        style={styles.input}
      />
      <TextInput
        placeholder='Enter last Name'
        value={student_lastname}
        onChangeText={(student_lastname) => setstudent_lastname(student_lastname)}
        style={styles.input}
      />
      <TextInput
        placeholder='Enter address'
        value={student_address}
        onChangeText={(student_address) => setstudent_address(student_address)}
        style={styles.input}
      />
      <TextInput
        placeholder='Enter Email Id'
        value={student_email}
        onChangeText={(student_email) => setstudent_email(student_email)}
        style={styles.input}
      />
      <AppButton title='Register Student' onPress={Register_student}/>
      
    </KeyboardAvoidingView>
  )
}

export default Register

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
    
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 7,
},
})