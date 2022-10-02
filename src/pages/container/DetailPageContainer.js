import React, { useEffect, useState } from 'react'
import DetailPageComponent from '../component/DetailPageComponent'
import { useNavigation } from '@react-navigation/native'

export default function DetailPageContainer({route}) {
  const [code, setCode] = useState(route.params.data.Code)
  const [minWithdraw, setMinWithdraw] = useState(route.params.data.WithdrawMinLimit.toString())
  const [maxWithdraw, setMaxWithdraw] = useState(route.params.data.WithdrawMaxLimit.toString())
  const [minDeposit, setMinDeposit] = useState(route.params.data.DepositMinLimit.toString())
  const [maxDeposit, setMaxDeposit] = useState(route.params.data.DepositMaxLimit.toString())
  const navigation = useNavigation();
  const data = route.params.data;

  const setDataFunc = () => {
    let postData = data;
    postData["Code"] = code
    postData["WithdrawMaxLimit"] = maxWithdraw
    postData["WithdrawMinLimit"] = minWithdraw
    postData["DepositMaxLimit"] = maxDeposit
    postData["DepositMinLimit"] = minDeposit
    route.params.onUpdateList(postData, route.params.index);
  }

  const onDelete = () =>{
    route.params.onDeleteList(data)
  }

  return (
    <DetailPageComponent 
      navigation={navigation}
      code={code}
      minWithdraw={minWithdraw}
      maxWithdraw={maxWithdraw}
      minDeposit={minDeposit}
      maxDeposit={maxDeposit}
      setCode={setCode}
      setMinWithdraw={setMinWithdraw}
      setMaxWithdraw={setMaxWithdraw}
      setMinDeposit={setMinDeposit}
      setMaxDeposit={setMaxDeposit}
      setDataFunc={setDataFunc}
      onDelete={onDelete}
    />
  )
}