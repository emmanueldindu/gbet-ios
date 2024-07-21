import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import internet from "../../assets/internet.jpg";
import school from "../../assets/school.jpg";
import electricity from "../../assets/Outline.jpg";
import more from "../../assets/more.jpg";

const BillPayment = () => {
  const navigation = useNavigation();

  return (
    <View className="h-full w-full bg-[#F7F4FF]">
      <View className="h-[150px]  p-4 w-full bg-white ">
        <View className="mt-12 flex-row gap-x-4 p-3  w-full">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={19} color={"gray"} />
          </TouchableOpacity>
          <Text className="font-[500] text-[16px]">Bill payment</Text>
        </View>
      </View>

      <View className="grid h-[150px] bg-white px-4 w-[90%] mx-auto rounded-lg  mt-10">
        <View className="items-center  flex-wrap  bg-white mt-8 mx-auto w-full justify-between ">
        <View className="flex-row justify-between w-full">
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

          {/* <View className="flex-row    w-full mt-4">
          <View className="grid items-center   gap-2">
            <Image
              source={more}
              className="h-[24px] w-[24px] relative   items-center  "
            />
            <Text className="font-[500] text-center ">More</Text>
          </View>

          <View className="grid items-center   gap-2">
            <Image
              source={more}
              className="h-[24px] w-[24px] relative   items-center  "
            />
            <Text className="font-[500] text-center ">More</Text>
          </View>
          </View> */}


        </View>
      
      </View>
    </View>
  );
};

export default BillPayment;
