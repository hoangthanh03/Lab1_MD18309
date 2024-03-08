import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    head:{
        width:100,
        height:70,
        alignItems:'center',
        backgroundColor:"pink"
    }
})