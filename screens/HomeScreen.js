import { View, Text ,SafeAreaView, Platform ,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Components/Home/Header'
import Stories from '../Components/Home/Stories'


const HomeScreen = () => {
  return (
    <SafeAreaView style={[styles.safeArea,styles.container]}>
      <Header/>
       <Stories/>
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


