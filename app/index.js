import React from "react";
import { View, Text, SafeAreaView, ScrollView , Button , Image , TouchableOpacity} from "react-native";
import { Stack } from "expo-router";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { useRouter } from "expo-router";
import FetchContext from "../context/FetchContext";
import { useContext } from "react";
import { useEffect } from "react";
import poster from "../asset/images/headphones.jpg";
import poster1 from "../asset/images/3988.jpg";
import * as AuthSession from 'expo-auth-session';

const index = () => {
  const router = useRouter();
  const { setauthtoken } = useContext(FetchContext);
  const spotifyClientId = '443c9eae28b147c2a3aad22d957a2fc2';
  const redirectUri = "https://auth.expo.io/@do_one/spotify";

  const SpotifyAuth = ()=>{
    AuthSession.startAsync({
      authUrl:
        'https://accounts.spotify.com/authorize' +
        `?response_type=token` +
        `&client_id=${spotifyClientId}` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state%20streaming%20user-read-email%20user-read-private`,
    }).then((response) => {
      if (response.type === 'success') {
        const { access_token: accessToken } = response.params;
        setauthtoken(accessToken);
        // Use the access token for API requests or store it securely
        console.log('Access Token:', accessToken);
      }
    });
  }

  // const discovery = {
  //   authorizationEndpoint: "https://accounts.spotify.com/authorize",
  //   tokenEndpoint: "https://accounts.spotify.com/api/token",
  // };

  // const [request, response, promptAsync] = useAuthRequest(
  //   {
  //     responseType: ResponseType.Token,
  //     clientId: "443c9eae28b147c2a3aad22d957a2fc2",
  //     clientSecret: "59748730c6384bcd839c99f34f94bf8d",
  //     scopes: [
  //       "user-read-currently-playing",
  //       "user-read-recently-played",
  //       "user-read-playback-state",
  //       "user-top-read",
  //       "user-modify-playback-state",
  //       "streaming",
  //       "user-read-email",
  //       "user-read-private",
  //     ],
  //     // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
  //     // this must be set to false
  //     usePKCE: false,
  //     redirectUri: "https://auth.expo.io/@do_one/spotify",
  //   },
  //   discovery
  // );

  // useEffect(() => {
  //   if (response?.type === "success") {
  //     const { access_token } = response.params;
  //     console.log(access_token);
  //     setauthtoken(access_token)
  //     console.log("sucessful")
  //     setTimeout(()=>{
  //       router.push("/home")
  //     },1000)
  //   }
  // }, [response]);

  return (
    <View style={{ backgroundColor: "#FFFFF0", height: "100%" }}>

      <Stack.Screen options={{headerStyle : {backgroundColor : "#FFFFF0"} , headerTitle : "" , headerShadowVisible : false}}/>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: 20, gap: 20 }}>
            <View style = {{height : 600 , justifyContent : "center" , alignItems : 'center'}}>
              <View style = {{height : 300  }}>
              <Image source={poster1} style = {{height : 300 , width : 330, borderRadius : 9}} resizeMode="contain"/>
              </View>
              <Text style={{fontFamily : "DMBold" , fontSize : 20 , margin:10}}>Hey! Welcome</Text>
              <Text style={{fontFamily : "DMMedium" , fontSize : 15 , width : 330 , margin:10 ,justifyContent : "center" , alignItems:'center'}}>Here we Provide you all the songs one could ever listen to, with best quality</Text>
              <TouchableOpacity onPress={() => SpotifyAuth()} style ={{backgroundColor : "#F9541A",borderRadius:9 ,justifyContent:"center" , alignItems:"center" , width : 150 , height : 50}}>
                <Text style = {{fontFamily : "DMBold"}}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default index;
