import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SpotifyWebApi from "spotify-web-api-node";
import FetchContext from "../../context/FetchContext";
import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { useSearchParams } from "expo-router";
import axios from "axios";

const spotifyApi = new SpotifyWebApi();

const Player = (props) => {
  const params = useSearchParams();
  const { acesstoken, authtoken } = useContext(FetchContext);
  const [playing, setPlaying] = useState(true);
  const { data, isLoading, error, setdata, seterror, setisLoading } = useFetch(
    authtoken,
    "me"
  );

  // spotifyApi.setAccessToken(token);

  useEffect(() => {
    // console.log(data?.album?.uri, acesstoken, authtoken);
    console.log(data);

    // const play = async() => {
    //   const token = await authtoken;
    //   const data = {
    //     context_uri: "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
    //     offset: {
    //       position: 5,
    //     },
    //     position_ms: 0,
    //   };

    //   const config = {
    //     headers: {
    //          "Content-Type": "application/json",
    //          Authorization: `Bearer ${token}`
    //      }
    //  };

    //   try {
    //     await axios.put("https://api.spotify.com/v1/me/player/play" , data , config)
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // play();
// spotifyApi.play()
//   .then(function() {
//     console.log('Playback started');
//   }, function(err) {
//     //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
//     console.log('Something went wrong!', err);
//   });
  }, []);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "1%",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            spotifyApi.pause().then(
              function () {
                setPlaying(false);
                console.log("Playback paused");
              },
              function (err) {
                //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
                console.log("Something went wrong!", err);
              }
            )
          }
          style={{
            display: playing ? "flex" : "none",
            paddingHorizontal: "10%",
            paddingTop: "5%",
            marginTop: Dimensions.get("window").height < 700 ? "10%" : "6%",
          }}
        >
          <Ionicons name="pause" size={50} color="grey" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            spotifyApi.play().then(
              function () {
                setPlaying(true);
                console.log("Playback resumed");
              },
              function (err) {
                //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
                console.log("Something went wrong!", err);
              }
            )
          }
          style={{
            display: playing ? "none" : "flex",
            paddingHorizontal: "10%",
            paddingTop: "5%",
            marginTop: Dimensions.get("window").height < 700 ? "10%" : "6%",
          }}
        >
          <Ionicons name="md-play-sharp" size={50} color="grey" />
        </TouchableOpacity>
      </View>

      {/* <View style={styles.musicProgress}>
        <Text></Text>
      </View> */}
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  musicProgress: {
    backgroundColor: "grey",
    marginLeft: "12%",
    marginRight: "12%",
    borderRadius: 30,
  },
});
