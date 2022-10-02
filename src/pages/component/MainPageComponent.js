import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../styles/mainPage';
import ColumnsComponent from '../../components/ColumnsComponent';
import HeaderComponent from '../../components/HeaderComponent';
export default function MainPageComponent({list, onNextDetail}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerCont}>
        <Text style = {styles.headerText}>Kripto Borsası</Text>
      </View>
      <HeaderComponent/>
      <ColumnsComponent list={list} onNextDetail={onNextDetail}/>
    </View>
  );
}
