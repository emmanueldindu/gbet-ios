import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import logo from '../assets/gbet.png'
import splashimg from '../assets/splashimg.png'


const Layout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
        navigation.navigate('Home');
      }, 1000); // Navigate after 3 seconds
  
      return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  return (
    <>
      <StatusBar barStyle="light" backgroundColor="" />
      <SafeAreaView className="">
        <View className=" h-full w-full justify-center items-center px-4 ">

        <Image 
        source={logo}
        resizeMode="contain"
        className='w-[295px] h-[89px] top-[120px]'



        />
        <View className='top-[190px] relative' >

        <Image 
        source={splashimg}
        resizeMode="contain"
        className='w-[] h-[400px] '




        />
        </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Layout;
