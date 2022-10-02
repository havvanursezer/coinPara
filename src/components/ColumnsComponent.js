import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import styles from '../styles/mainPage'

export default function ColumnsComponent({list,onNextDetail}) {
  return (
    <View style={styles.pageCont}>
        <FlatList
          data = {list}
          renderItem={({item, index}) => (
            <View style={{flex:1}}>
              <TouchableOpacity 
              style={styles.columnButtons}
              onPress={() =>onNextDetail(item, index)}>
                <Text>{item.Code}</Text>
                <Text>{item.WithdrawMaxLimit}</Text>
                <Text>{item.WithdrawMinLimit}</Text>
                <Text>{item.DepositMaxLimit}</Text>
                <Text>{item.DepositMinLimit}</Text>
                </TouchableOpacity>
            </View>
          )}
        />
      </View>
  )
}