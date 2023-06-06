import React from 'react'
import { View , Text , SafeAreaView , FlatList , ActivityIndicator} from "react-native"
import styles from './Artist.style'
import { useContext } from 'react'
import FetchContext from '../../context/FetchContext'
import useFetch from '../../hooks/useFetch'
import { useEffect } from 'react'
import ArtCard from '../ArtCard/ArtCard'


const Artist = () => {
    const { acesstoken } = useContext(FetchContext);
  const { data, isLoading, error, setdata, seterror, setisLoading } = useFetch(
    acesstoken,
    "artists/3b3PfZsOrb3cPzSCZjawbr/related-artists"
  );

  useEffect(() => {
    console.log(data?.artists?.[0]?.images?.[0]);
  }, [acesstoken]);


  return (
    <View style={styles.container}>
      <Text style={styles.headtext}>Top Artists</Text>
      {isLoading ? (
        <ActivityIndicator size="large"></ActivityIndicator>
      ) : (
        <SafeAreaView>
            <FlatList
              data={data?.artists}
              renderItem={({ item }) => <ArtCard item={item} />}
              keyExtractor={(item) => item?.id}
              contentContainerStyle={{ columnGap: 20 }}
              showsHorizontalScrollIndicator = {false}
              horizontal
            />
          </SafeAreaView>
      )}
    </View>
  )
}

export default Artist