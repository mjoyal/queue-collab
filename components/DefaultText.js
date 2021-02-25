import React from "react";
import { Text, StyleSheet } from "react-native";


const DefaultText = ({type, ...props}) => {
  // make it so we don't need to put in
  console.log(type)
  return (
      <Text style={styles[type]}>{props.children}</Text>
  )
}; 

const styles = StyleSheet.create({
  default: {
    fontSize: 16
  }, 
  h1: {
    fontSize: 26, 
    fontWeight: '700'
  }, 
  h2: {
    fontSize: 22, 
    fontWeight: '700'
  }, 
  h3: {
    fontSize: 18, 
    fontWeight: '700'
  }

}); 

export default DefaultText; 