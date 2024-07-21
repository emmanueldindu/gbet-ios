import { View, Text, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import flag from "../../assets/flag.jpg";

const Transactions = () => {
  return (
    <View className="grid px-4 rounded-lg h-[150px] bg-white w-full">
      <View className="flex-row justify-between items-center p-3">
        <Text className="text-[#A5A1A1] text-[14px] font-[400]">
          Transactions
        </Text>

        <View className="flex-row gap-x-2 items-center">
          <Text className="text-center font-[500] ">View all</Text>
          <Feather
            name="chevron-right"
            className="items-center"
            color={"#A5A1A1"}
            size={20}
          />
        </View>
      </View>
      <View className="bg-[#F0EFEF] mt-2 w-full h-[1px] "></View>

      <View className="flex-row my-auto  justify-between items-center w-full ">
        <View className="flex-row p-2 gap-x-3">
          <Image className source={flag} />
          <View className="grid ">
            <Text className="font-[500]">GHN-NGN</Text>
            <Text className="mt-2 font-[400] text-[#A5A1A1]">
              6:00 am . 12 jul 2014
            </Text>
          </View>
        </View>
        <View className='p-2 flex-row gap-x-1 text-center items-center'>
            <Text className='font-[500]'>500</Text>
             <Text className='text-[#A5A1A1] font-[400] text-xs'>USD</Text>
        </View>
      </View>
    </View>
  );
};

export default Transactions;
