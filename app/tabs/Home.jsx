import * as React from "react";
import {
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { Feather, Ionicons } from "@expo/vector-icons";
import profile from "../../assets/profile.png";
import dollar from "../../assets/dollar.jpg";
import coin from '../../assets/coins.jpg'
import { LinearGradient } from "expo-linear-gradient";
export default function Home() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <LinearGradient
      colors={["#8B52FF", "#F7F4FF", "#FFFFFF"]}
      className="h-full"
    >
      <View className="items-center  justify-between flex-row  h-[180px] px-4">
        <View className="flex-row gap-x-3">
          <TouchableOpacity>
            <View className="h-12   rounded-full w-12 items-center ">
              <Image
                source={profile}
                className="h-12 w-12 items-center rounded-full "
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="grid i mt-2">
              <View className="flex-row gap-x-1">
                <Text className="text-gray-100">Welcome </Text>
              </View>
              <Text className="text-md text-white">Martins Chidume</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center gap-x-4">
          <TouchableOpacity>
            <View className="h-[25px]  rounded-lg w-[25px] items-center ">
              <Ionicons name="qr-code-outline" size={24} color={"white"} />
            </View>
          </TouchableOpacity>
          <View className="h-12  rounded-lg w-12 items-center p-3">
            <Feather name="bell" size={24} color={"white"} />
          </View>
        </View>
      </View>

      <View className="flex-row px-4 gap-x-7">
        <View className="w-[90px] h-8 bg-white items-center  rounded-xl">
          <Text className="text-sm item-center my-auto">Account</Text>
        </View>

        <View className=" h-9    items-center p-2 rounded-xl">
          <Text className="text-[#F1EBFF] text-sm">Rate</Text>
        </View>

        <View className=" h-9  items-center p-2 rounded-xl">
          <Text className="text-[#F1EBFF] text-sm">Discover</Text>
        </View>
      </View>

      <View className="px-4 flex-row h-[120px] bg-white w-[90%] rounded-xl mx-auto justify-between mt-5">
        <View className="grid w-[60%]  h-full p-4">
          <View className="flex-row gap-x-2">
            <Text className="text-sm font-[300]">Available asset balance</Text>
            <Ionicons name="eye-outline" size={19} color={"black"} />
          </View>

          <View className="flex-row gap-x-2 mt-5 items-center">
            <Text className="text-3xl font-semibold">90,000</Text>
            <Text className="text-xs font-[300]">USD</Text>
            <Ionicons name="chevron-down-outline" size={19} color={"black"} />
          </View>
        </View>

        <View className="p-2">
          <View className='bg-[#8B52FF] mt-12 rounded-xl items-center h-8 w-[90px]'>
            <Text className='text-white my-auto '>Add money</Text>
          </View>
        </View>

      </View>

      <View className='px-4 items-center flex-row h-[80px] w-[90%] bg-white mt-5 mx-auto justify-between rounded-lg'>
        <View className='grid'>
        <Image
                source={dollar}
                className="h-[24px] w-[24px] items-center  "
              />
          <Text>Card</Text>
        </View>

        <View className='grid'>
        <Image
                source={coin}
                className="h-[24px] w-[24px] items-center  "
              />
          <Text>Card</Text>
        </View>

        <View>
          <Text>Card</Text>
        </View>

        <View>
          <Text>Card</Text>
        </View>

      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
  },
});
