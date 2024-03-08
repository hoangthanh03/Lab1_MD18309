import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WraperBai2 = ({ title1, location, time, car, img}) => {
    return (
        <View style={styles.container}>
                <Text style={{fontSize:25}}>{title1}</Text>
            <View style={styles.item1}>
                <Text>Địa Điểm</Text>
                <Text style={styles.text}>{location}</Text>
                <Text>Thời Gian</Text>
                <Text style={styles.text}>{time}</Text>
                <Text>Phương tiện di chuyển</Text>
                <Text style={styles.text}>{car}</Text>
                <Text>Hình ảnh</Text>
                <Image style={styles.img} source={{uri:img}}/>
            </View>
            
        </View>
    )
}

export default WraperBai2

const styles = StyleSheet.create({
    container: {
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
    }
    
})