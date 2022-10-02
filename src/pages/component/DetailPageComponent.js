import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../styles/mainPage'
import stylesDet from '../../styles/detailPage'

export default function DetailPageComponent({
  navigation,
  code, 
  minWithdraw, 
  maxWithdraw, 
  minDeposit, 
  maxDeposit,
  setCode,
  setMinWithdraw,
  setMaxWithdraw,
  setMinDeposit,
  setMaxDeposit,
  setDataFunc,
  onDelete
}) {

  return (
    <View style = {styles.container}>
      <View style = {stylesDet.headerCont}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../../assets/back.png")}/>
        </TouchableOpacity>
        <Text style = {styles.headerText}>Coin Detayları</Text>
        <TouchableOpacity onPress={()=>onDelete()} >
          <Image source={require("../../assets/trash.png")}/>
        </TouchableOpacity>
      </View>
      <View style={stylesDet.pageCont}>
        <View style={stylesDet.listCont}>
          <View style={stylesDet.secHeaderCont}>
            <Text>Sembol:</Text>
            <Text>Maks. Para Çekme:</Text>
            <Text>Min. Para Çekme:</Text>
            <Text>Maks. Mevduat:</Text>
            <Text>Min. Mevduat:</Text>
          </View>
          <View style = {stylesDet.textInputCont}>
            <TextInput  
            onChangeText={text => setCode(text)}
            style = {stylesDet.textInput}
            value={code}
            />
            <TextInput 
            onChangeText={text => setMaxWithdraw(text)}
            style = {stylesDet.textInput}
            value={maxWithdraw}
            />
            <TextInput 
            onChangeText={text => setMinWithdraw(text)}
            style = {stylesDet.textInput}
            value={minWithdraw}
            />
            <TextInput 
            onChangeText={text => setMaxDeposit(text)}
            style = {stylesDet.textInput}
            value={maxDeposit}
            />
            <TextInput 
            onChangeText={text => setMinDeposit(text)}
            style = {stylesDet.textInput}
           value={minDeposit}
            />
          </View>
        </View>
        <View style={stylesDet.buttonCont}>
          <TouchableOpacity 
          onPress={()=>setDataFunc()}
          style ={stylesDet.saveButton}>
            <Text style = {stylesDet.buttonText}>Kaydet</Text>
          </TouchableOpacity>  
        </View>
        
      </View>
    </View>
  )
}