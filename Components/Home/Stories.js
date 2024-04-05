import { View, Text, ScrollView ,Image ,StyleSheet, FlatList} from 'react-native'
import React from 'react'
import { USERS } from '../../Utils/data'


const  data = USERS;

const Stories = () => {
  return (
    <View>
       <FlatList
          data={data}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return(
                <View style={{alignItems:'center'}}>
                <Image source={item.image} style={styles.image}/>
                <Text style={{color:"white", fontWeight:'500', marginBottom:10,}}>
                    {
                     item.name.length > 11 ? item.name.slice(0,10).toLowerCase() + '...' 
                     : item.name.toLowerCase() }
                </Text>
                </View>
            )
          }}
       /> 
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        marginTop:10,
        height:70,
        width:70,
        borderRadius:50,
        marginLeft:6,
        borderWidth:3,
        borderColor:'#ff8501',
    },
})


export default Stories