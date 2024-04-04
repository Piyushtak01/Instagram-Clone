import { View, Text, StyleSheet ,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
      <Image
       style={styles.logo}
      source={require('../../assets/Instagram.png')}/>
      </TouchableOpacity>
     <View style={styles.iconcontainer}>
        <TouchableOpacity>
        <Image
        style={styles.icons} 
        source={require('../../assets/more.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
        style={styles.icons} 
        source={require('../../assets/heart.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBages}>
            <Text style={styles.unreadBageText}>11</Text>
          </View>
        <Image
        style={styles.icons} 
        source={require('../../assets/messenger.png')} />
        </TouchableOpacity>
     </View>
    </View>
  )
}




const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:20,
    },
    logo:{
        width:100,
        height:50,
        resizeMode:'contain'
    },
    iconcontainer:{
      flexDirection:"row"
    },
    icons:{
     width:25,
     height:25,
     marginLeft:10,
     resizeMode:'contain',
    },
    unreadBages:{
      height:20,
      width:25,
      backgroundColor:"#ff3250",
      position:"absolute",
      alignItems:'center',
      justifyContent:'center',
      left:20,
      bottom:12,
      borderRadius:100,
      zIndex:1,
    },
    unreadBageText:{
      fontSize:12,
      padding:3,
      color:"white", 
      fontWeight:"700",
    }
})


export default Header
