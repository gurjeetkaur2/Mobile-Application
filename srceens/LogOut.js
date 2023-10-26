import React from 'react'
import { StyleSheet } from 'react-native'
import {auth} from '../firebase'

const LogOut = ({ navigation }) => {
  auth
    .signOut()
    .then(() => {
      navigation.replace("LogIn")
    })
    .catch(error => alert(error.message))
  
  return 

}
export default LogOut

const styles = StyleSheet.create({})