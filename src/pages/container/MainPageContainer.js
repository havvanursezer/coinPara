import React, {useEffect, useState} from 'react';
import MainPageComponent from '../component/MainPageComponent';
import axios from 'axios';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import lockeys from "../../locKeys/lockeys.json"

export default function MainPageContainer() {
  const [list, setList] = useState(null);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const navigation = useNavigation();

  const getData = async() => {
    let dataFunc = await axios.get('https://apiv2.coinpara.com/api/coins/getAll/true')
    .then(function(response){
      setList(response.data.Data);
    })
    .catch(function(err){
      Alert.alert(lockeys.error)
    })
  }

  useEffect(() => {
    if(list === null){
      getData();
    }
  }, [list]);


  const onUpdateList = (obj, index) =>{
    let tempList = list;
    tempList[index] = obj

    setList(tempList);
    forceUpdate();
    navigation.goBack();
    Alert.alert(lockeys.updateSuccess)
  }

  const onDeleteList = (item) =>{
    setList(list.filter(x=>x.Id !== item.Id));
    forceUpdate();
    navigation.goBack();
    Alert.alert(lockeys.deleteSuccess)
  }

  const onNextDetail = (item, index) =>{
    navigation.navigate("DetailPage", {data: item, onUpdateList:onUpdateList, index:index, onDeleteList:onDeleteList })
  }

  return <MainPageComponent 
    list={list}
    navigation={navigation}
    onNextDetail={onNextDetail}
    />;
}
