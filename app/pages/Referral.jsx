import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Share
} from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import group from "../../assets/group.png";

const Referral = () => {
  const navigation = useNavigation();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this awesome content!',
        url: 'https://example.com',  // Add a URL if needed
        title: 'Awesome Content'
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View className="h-full w-full bg-[#F7F4FF]">
      <View className="h-[120px]  p-4 w-full bg-white ">
        <View className="mt-12 flex-row gap-x-4 p-3  w-full">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={19} color={"gray"} />
          </TouchableOpacity>
          <Text className="font-[500] text-[16px]">Referral</Text>
        </View>
      </View>
      <Text className="mt-10 text-center font-[700] text-[28px] tracking-wider leading-7">
        Refer Friends!
      </Text>
      <View className="w-[300px] items-center justify-center mx-auto ">
        <Text className="px- mt-3 font-[400] text-[#A5A1A1]  justify-center text-center leading-[20px] text-[14px] ">
          Use your referral code to invite your friends and earn once they join,
          verify and fund their account
        </Text>
      </View>

      <View className="w-full h-[110px] mt-6   items-center  justify-center mx-auto ">
        <Image source={group} className=" " />
      </View>

      <Text className=" mt-4 p-6 text-center font-[400] text-[#A5A1A1] ">
        You will receive your reward once your friends:
      </Text>

      <View className="w-[90%] h-[110px] mt-1 px-4 flex-row  justify-between items-center  mx-auto">
        <View className="grid mx-auto w-[33.3%] gap-y-2">
          <View className="w-[30px] h-[30px] mx-auto bg-[#C3FFB5] rounded-full items-center justify-center">
            <Text className="font-[500]">1</Text>
          </View>
          <Text className="text-center leading-[16px] w-[80%] mx-auto text-xs">
            Sign up and verify their account
          </Text>
        </View>

        <View className="mx-auto grid w-[33.3%] gap-y-2">
          <View className="w-[30px] h-[30px] mx-auto bg-[#C3FFB5] rounded-full items-center justify-center">
            <Text className="font-[500]">2</Text>
          </View>
          <Text className="text-center leading-[16px] w-[80%] mx-auto text-xs">
            Fund their wallet with ₦2,000 or more
          </Text>
        </View>

        <View className="mx-auto grid w-[33.3%] gap-y-2">
          <View className="w-[30px] h-[30px] mx-auto bg-[#C3FFB5] rounded-full items-center justify-center">
            <Text className="font-[500]">3</Text>
          </View>
          <Text className="text-center leading-[16px] w-[80%] mx-auto text-xs">
            Perform a transaction in 24hrs
          </Text>
        </View>
      </View>

      <View className="h-[420px] w-full bg-white p-4 grid ">
        <View className="h-[106px] bg-[#D6C2FF] w-full rounded-lg flex-row px-2 mx-auto justify-between">
          <View className="grid w-[60%]  h-full p-4">
            <View className="flex-row gap-x-2">
              <Text className="text-sm font-[300]">
                Available asset balance
              </Text>
              <Ionicons name="eye-outline" size={19} color={"black"} />
            </View>

            <View className="flex-row gap-x-2 mt-5 items-center">
              <Text className="text-3xl font-semibold">90,000</Text>
              <TouchableOpacity className="flex-row gap-x-1">
                <Text className="text-xs font-[300]">USD</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="p-2">
            <View className="bg-[#8B52FF] mt-12 rounded-xl items-center h-8 w-[90px]">
              <Text className="text-white my-auto ">Redeem</Text>
            </View>
          </View>
        </View>

        <View className="h-[82px] mt-3 gap-x-3 flex-row justify-between w-full px-">
          <View className="w-[49%] h-[80px] bg-[#F7F4FF]  rounded-xl text-center mx-auto items-center grid p-2 items-center">
            <Text className="font-[400] text-xs">Total earnings</Text>
            <View className="flex-row mt-4 gap-x-2">
              <Text className="text-[24px]">500</Text>
              <Text className="text-xs mt-2">USD</Text>
            </View>
          </View>

          <View className="w-[49%] h-[80px] bg-[#F7F4FF] grid rounded-xl text-center mx-auto items-center p-2">
            <Text className="mt-1 text-xs">Total referral</Text>
            <Text className="mt-2 text-[24px] font-[500]">2</Text>
          </View>
        </View>

        <View className="h-[82px] mt-3 gap-x-3 flex-row justify-between w-full px-">
          <View className="w-[64%] h-[80px] bg-[#F7F4FF]  rounded-xl text-center mx-auto items-center grid p-2 items-center">
            <Text className="font-[400] text-xs text-[#A5A1A1]">Your referal code</Text>
            <View className="flex-row mt-4  justify-between w-full">
              <Text className="font-[700] text-[16px] mx-auto">tFh273</Text>
              <Feather name="copy" className='mx-auto' size={19} color={"black"} />
            </View>
          </View>

          <TouchableOpacity onPress={onShare} className="w-[34%] h-[80px] bg-[#8B52FF] justify-center   flex-row  rounded-xl text-center mx-auto items-center p-2">
            <Feather name="share-2" size={19} color={"white"} />
            <Text className=" text-white font-[500]  ">Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Referral;
