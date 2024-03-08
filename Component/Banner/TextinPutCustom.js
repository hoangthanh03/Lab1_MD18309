import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TextinPutCustom = (props) => {
  return (
    <TextInput
    {...props}
    style = {[props.style,styles.input]}
    placeholderTextColor={props.placeholderTextColor || "gray"}
    />
  )
}

export default TextinPutCustom

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderRadius: 10,
        margin:10,
        borderWidth: 1,
        borderColor: "gray"

    }
})