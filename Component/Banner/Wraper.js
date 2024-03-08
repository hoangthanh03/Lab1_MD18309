import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Wraper = ({tilte,children,backgroundColor}) => {
  return (
    <View style={{backgroundColor}}>
      <View style={styles.container}>
      <Text style={styles.text}>{tilte}</Text>
      </View>
      {children}
    </View>
  )
}

export default Wraper

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center"

    
  },
  text:{
    color:"black",
    alignItems:"center",
    justifyContent:"center",
    fontSize:17,
    fontWeight:"bold"
  }

})