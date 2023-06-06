import React, { useEffect } from "react";
import { View, Text, ActivityIndicator , SafeAreaView , FlatList } from "react-native";
import styles from "./Yourtrack.style";
import { useContext } from "react";
import FetchContext from "../../context/FetchContext";
import useFetch from "../../hooks/useFetch";
import RecommCard from "../RecommCard/RecommCard";

const Yourtrack = () => {
  const { acesstoken } = useContext(FetchContext);
  const { data, isLoading, error, setdata, seterror, setisLoading } = useFetch(acesstoken,'tracks?ids=6IMSEuBlYCq516sYSj71uA%2C6c4Po8zyQjB4cR5XgLhcGb%2C6ly48Yuj3mEN5DpiIhAySr%2C455OjhLhU9JCNYKKoUOFwr%2Chttps%3A%2F%2Fopen.spotify.com%2Ftrack%2F4oTEFJkFQyuElVkVzrX4yu%3Fsi%3Deff5c85fd6744c99');

  return (
    <View >
      <Text style={styles.headtext}>Your Tracks</Text>
      {isLoading ? (
        <ActivityIndicator size="large"></ActivityIndicator>
      ) : (
        <SafeAreaView>
            <FlatList
              data={data?.tracks}
              renderItem={({ item }) => <RecommCard item={item}/>}
              keyExtractor={(item) => item?.id}
              contentContainerStyle={{ columnGap: 20 }}
              showsHorizontalScrollIndicator = {false}
              horizontal
            />
          </SafeAreaView>
      )}
    </View>
  );
};

export default Yourtrack;
