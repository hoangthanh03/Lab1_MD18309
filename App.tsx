import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React,{useState} from 'react'
import Header from './Component/Banner/Header'
import Wraper from './Component/Banner/Wraper'
import WraperBai2 from './Component/Banner/WraperBai2'
import WraperBai2_1 from './Component/Banner/WraperBai2_1'
import TextinPutCustom from './Component/Banner/TextinPutCustom'

const App = () => {
  const [hoTen, sethoTen] = useState('')
  return (
    <View style={{ flex: 1 }}>

      {/* <Wraper tilte="Header" backgroundColor="red">
        <View style={{ flexDirection: 'row', justifyContent: "space-between",margin:10 }}>
          <TouchableOpacity>
            <Image style={style.back} source={require('./image/back.png')} />
          </TouchableOpacity>
          <Image source={require('./image/profile.png')} />
        </View>
      </Wraper>


      <Wraper tilte="Body" backgroundColor="cyan">
        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center",margin:10 }}>
          <TouchableOpacity>
            <Image style={style.back} source={require('./image/back.png')} />
          </TouchableOpacity>
        </View>
      </Wraper>
      <Wraper tilte="Footer" backgroundColor="pink">
      <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center",margin:10 }}>
          <TouchableOpacity>
            <Image style={style.back} source={require('./image/back.png')} />
          </TouchableOpacity>
        </View>
      </Wraper> */}


      {/* <WraperBai2
        title1="Lịch Trình"
        location="Hồ Tràm, Vũng Tàu"
        time="9:00 AM - 12:00 AM, 12/12/2024"
        car="Xe Bus"
        img='https://i.pinimg.com/564x/32/b0/50/32b050f9f375d158b2e3dd20c9b11553.jpg' />

      <WraperBai2_1
        title="Khách sạn"
        nameHoltel="Hồng Quỳnh"
        timeOpen="9:00 AM - 12:00 AM, 12/12/2024"
        location="Hồ Tràm, Vũng Tàu"/> */}


        <TextinPutCustom
              onChangeText={sethoTen}
              placeholder ="Nhập họ tên"
              placehoherTextColor ="#000"
        />
        
        <TextinPutCustom
              onChangeText={sethoTen}
              placeholder ="Nhập họ tên"
              placehoherTextColor ="#000"
        />

    </View>


  )
}

export default App

const style = StyleSheet.create({
  back: {
    width: 20,
    height: 20
  }
})