import React from "react";
import { View, Text, SafeAreaView, ScrollView , TouchableOpacity , Image } from "react-native";
import { Stack } from "expo-router";
import Headerbtn from "../../../components/headerbtn/Headerbtn";
import back from "../../../asset/icons/chevron-left.png";
import { useRouter } from "expo-router";
import Player from "../../../components/Player/Player";

const index = () => {
  const router = useRouter();

  return (
    <View style={{ backgroundColor: "#FFFFF0", height: "100%" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FFFFF0" },
          headerShadowVisible: false,
          headerLeft: () => (
            <Headerbtn
              source={back}
              handlepress={() => {
                router.back();
              }}
            />
          ),
        }}
      />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: 20, gap: 20 }}>
           <Player/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default index;
