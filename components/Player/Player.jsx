import React from 'react'
import { View , Text , SafeAreaView , FlatList , ActivityIndicator} from "react-native"
import styles from './Player.style'
import { useContext } from 'react'
import FetchContext from '../../context/FetchContext'
import useFetch from '../../hooks/useFetch'
import { useEffect } from 'react'
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Player = () => {
    const { acesstoken } = useContext(FetchContext);

    const getauth = async()=>{
        console.log("running axios")
        const response = await axios.get("http://10.0.0.2/login")
        response.request("login")
    }
    


  return (
    <View style={styles.container} >
    <TouchableOpacity onPressOut={()=>getauth()}>
        <Text>Click here</Text>
    </TouchableOpacity>
      <Text style={styles.headtext}>Player</Text>
    </View>
  )
}

export default Player;