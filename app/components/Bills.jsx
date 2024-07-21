import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import internet from "../../assets/internet.jpg";
import school from "../../assets/school.jpg";
import electricity from "../../assets/Outline.jpg";
import more from "../../assets/more.jpg";

const Bills = () => {
  return (
    <View className="grid px-4 rounded-lg h-[150px] bg-white w-full">
      <View className="flex-row justify-between items-center p-3">
        <Text className="text-[#A5A1A1] text-[14px] font-[400]">
          Bills payment
        </Text>

        <View className="flex-row gap-x-2 items-center">
          <Text className="text-center font-[500] ">Edit</Text>
          <Feather
            name="edit-2"
            className="items-center"
            color={"#A5A1A1"}
            size={20}
          />
        </View>
      </View>
      <View className="bg-[#F0EFEF] mt-2 w-full h-[1px] "></View>
      <View className="items-center flex-row  bg-white mt-5 mx-auto w-full justify-between ">
        <View className="grid items-center   gap-2">
          <Image
            source={internet}
            className="h-[24px] w-[24px] relative   items-center  "
          />
          <Text className="font-[500] text-center ">Internet</Text>
        </View>

        <View className="grid items-center   gap-2">
          <Image
            source={school}
            className="h-[24px] w-[24px] relative   items-center  "
          />
          <Text className="font-[500] text-center ">Tution</Text>
        </View>

        <View className="grid items-center   gap-2">
          <Image
            source={electricity}
            className="h-[24px] w-[24px] relative   items-center  "
          />
          <Text className="font-[500] text-center ">electricity</Text>
        </View>

        <View className="grid items-center   gap-2">
          <Image
            source={more}
            className="h-[24px] w-[24px] relative   items-center  "
          />
          <Text className="font-[500] text-center ">More</Text>
        </View>
      </View>
    </View>
  );
};

export default Bills;
