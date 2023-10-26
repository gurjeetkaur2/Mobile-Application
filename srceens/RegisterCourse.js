import { StyleSheet, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'

import AppButton from '../components/AppButton'

import { DatabaseConnection } from '../DataBase/Database'


const db = DatabaseConnection.getConnection();

const RegisterCourse = ({navigation}) => {
 
    const [course_name, setcourse_name] = useState('')
    const [course_code, setcourse_code] = useState('')
    const [course_tutor, setcourse_tutor] = useState('')
    
    const Register_Course = () => {
      console.log(course_name, course_code, course_tutor) 
  
      db.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO table_courses(course_name, course_code, course_tutor)VALUES(?,?,?)',
          [course_name, course_code, course_tutor],
          (tx, result) => {
            console.log('Course Added Successfully')
            navigation.navigate('Home')
          }
        )
        
      })
    }
  
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.view}>
        <Text style={styles.heading}>Please fill following information to register course</Text>
        <TextInput
          placeholder='Enter course Name'
          value={course_name}
          onChangeText={(course_name) => setcourse_name(course_name)}
          style={styles.input}
        />
        <TextInput
          placeholder='Enter course code'
          value={course_code}
          onChangeText={(course_code) => setcourse_code(course_code)}
          style={styles.input}
        />
        <TextInput
          placeholder='enter tutor for course'
          value={course_tutor}
          onChangeText={(course_tutor) => setcourse_tutor(course_tutor)}
          style={styles.input}
        />
        
        <AppButton title='Register Course' onPress={Register_Course}/>
        
      </KeyboardAvoidingView>
    )
  }


export default RegisterCourse

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