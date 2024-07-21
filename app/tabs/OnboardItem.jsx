import { View, Text, Image, useWindowDimensions } from 'react-native'
import React from 'react'

const OnboardItem = ({item}) => {

    // const {width} = useWindowDimensions() 
  return (
    <View className='flex-1 justify-center items-center w-full'>
   <Image source={item.image} resizeMode='contain' className='justify-center' />
   <Text>{item.title}</Text>
   <Text>{item.text}</Text>

    </View>
  )
}

export default OnboardItem