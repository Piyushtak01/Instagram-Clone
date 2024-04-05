import { View, Text ,SafeAreaView, Platform ,StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Header from '../Components/Home/Header'
import Stories from '../Components/Home/Stories'
import Post from '../Components/Home/Post'
import { POSTS } from '../Utils/posts'



const HomeScreen = () => {
  return (
    <SafeAreaView style={[styles.safeArea,styles.container]}>
      <Header/>
       <Stories/>
       <FlatList
         data={POSTS}
         renderItem={({item , index}) => (
           <Post post={item} key={index}/>
         )}
       />
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  safeArea:{
    paddingTop: Platform.OS  === "android" ? 40 : 0
  },
  container:{
   flex:1,
   backgroundColor:'black',
  }
   
})

export default HomeScreen


