import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";



function AppButton({ title, onPress, }) {
  return (
    <TouchableOpacity
      style={[styles.button ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    backgroundColor: '#3b71f3',
    width: '100%',
    padding: 15,
    marginVertical: 5,
        
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    color:'white',
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
