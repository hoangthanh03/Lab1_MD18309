import { StyleSheet, Text, TouchableOpacity, View, YellowBox } from 'react-native'
import React from 'react'

const WraperBai2_1 = ({ title, location, timeOpen,nameHoltel }) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:25}}>{title}</Text>
            <View style={styles.item1}>
                <Text>Khách sạn</Text>
                <Text style={styles.text}>{nameHoltel}</Text>
                <Text>Địa Điểm</Text>
                <Text style={styles.text}>{location}</Text>
                <Text>Thời Gian Mở Cửa</Text>
                <Text style={styles.text}>{timeOpen}</Text>
                <TouchableOpacity style={{width:"100%",backgroundColor:'pink',alignItems:"center",justifyContent:"center",height:30,borderRadius:10}}>
                    <Text>Chi tiết</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WraperBai2_1

const styles = StyleSheet.create({container: {
    flex: 1,
    margin:10
},
item1:{
    justifyContent:"center",
    padding:10,
    backgroundColor:"rgba(0,0,0,0.3)",
    borderRadius:10
    
},
img:{
    width:"100%"
    ,height:90
},
text:{
    marginBottom:10,
    color:"green"
}})