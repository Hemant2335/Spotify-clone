import React from 'react'
import {View , Text , Image , TouchableOpacity} from 'react-native';
import poster from "../../asset/images/poster.jpg"
import styles from './SearchCard.style';

const SearchCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.cardcontainer}>
          <Image
            source={{uri : item?.album?.images?.[0]?.url}}
            style={styles.cardImg}
          />
          <View>
          <Text style={styles.cardtext} >{item?.album?.name.slice(0,25)}..</Text>
          <Text style={styles.arttext} >Artist : {item?.album?.artists?.[0]?.name}</Text>
          </View>
    </TouchableOpacity>
  )
}

export default SearchCard