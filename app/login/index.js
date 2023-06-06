import React from 'react'
import {View , Text} from "react-native"
import { Button } from 'react-native'
import authHandler from '../../utils/authentication'

const index = () => {
  return (
    <View>
        <Button onPress={()=>{authHandler.onLogin()}} title='Press to Login'></Button>
    </View>
  )
}

export default index