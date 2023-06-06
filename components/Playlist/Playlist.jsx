import React from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import styles from "./Playlist.style";
import useFetch from "../../hooks/useFetch";
import poster from "../../asset/images/poster.jpg";
import { useEffect } from "react";
import { useContext } from "react";
import FetchContext from "../../context/FetchContext";

const Playlist = () => {

    const {acesstoken} = useContext(FetchContext);
    const {data ,isLoading , error , setdata , seterror , setisLoading} = useFetch(acesstoken , 'browse/featured-playlists?country=in')

//   const { data, isLoading, error, setdata, seterror, setisLoading } =
//     useFetch(token);
useEffect(() => {
  console.log(data?.name);
}, [acesstoken]);


  return (
    <View style={styles.container}>
      <Text style={styles.headtext}>Listen Your</Text>
      <View style={{ flexDirection: "row", gap: 4 }}>
        <Text style={styles.headtext}>Favorite</Text>
        <Text style={styles.styletext}>Playlist</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.cardcontainer}>
          <Image
            source={{uri : data?.playlists?.items?.[Math.floor(Math.random() * 10)]?.images?.[0]?.url}}
            style={styles.cardImg}
          />
          <Text style={styles.cardtext} >{data?.playlists?.items?.[Math.floor(Math.random() * 10)]?.name}</Text>
        </View>
      )}
    </View>
  );
};

export default Playlist;
