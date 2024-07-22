import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import profile from "../../assets/profile.png";
import { Feather, Ionicons } from "@expo/vector-icons";
import security from "../../assets/security.jpg";
import notification from "../../assets/elements.png";
import report from "../../assets/report.png";
import share from "../../assets/share.png";
import star from "../../assets/star.png";
import help from "../../assets/help.png";
import about from "../../assets/about.png";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {

    const navigation = useNavigation()
  return (
    <LinearGradient
      colors={[
        "#8B52FF",
        "#F7F4FF",
        "#F7F4FF",
        "#F7F4FF",
        "#F7F4FF",
        "#F7F4FF",
      ]}
      className="h-full "
    >
      <View className="items-center mt-3 justify-between flex-row h-[140px] px-4">
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
            <View className="grid i mt-2  ">
              <Text className="text-md font-[500] text-black">
                Martins Chidume
              </Text>

              <View className="w-[110px] h-[25px] rounded-lg mt-2 items-center justify-center bg-white ">
                <Text className="text-red-500 font-[500] ">Not verified </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center gap-x-4">
          <TouchableOpacity>
            <View className="h-[25px]  rounded-lg w-[25px] items-center ">
              <Ionicons name="qr-code-outline" size={24} color={"black"} />
            </View>
          </TouchableOpacity>
          <View className="h-12  rounded-lg w-12 items-center p-3">
            <Feather name="bell" size={24} color={"black"} />
          </View>
        </View>
      </View>

      <View className="items-center  justify-between flex-row  h-[90px] px-4">
        <View className="grid w-[60%]  h-full p-4">
          <View className="flex-row gap-x-2">
            <Text className="text-sm font-[300]">Available asset balance</Text>
            <Ionicons name="eye-outline" size={19} color={"black"} />
          </View>

          <View className="flex-row gap-x-2 mt-5 items-center">
            <Text className="text-3xl font-semibold">90,000</Text>
            <TouchableOpacity className="flex-row gap-x-1">
              <Text className="text-xs font-[300]">USD</Text>
              <Ionicons name="chevron-down-outline" size={19} color={"black"} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="grid w-[40%] mx-4  h-full p-4">
          <View className="flex-end ">
            <Text className="text-sm font-[300] tracking-wide">
              Referal earnings
            </Text>
          </View>

          <View className="flex-row gap-x-2 mt-5 mx-  items-center">
            <Text className="text-xl font-semibold">50,000</Text>
            <TouchableOpacity className="flex-row justify-center gap-x-1">
              <Text className="text-xs font-[300] justify-center ">USD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="grid px-4 rounded-lg h-auto  bg-white w-[90%] mx-auto mt-4">
        <View>
          <TouchableOpacity className="flex-row justify-between items-center p-3">
            <View className="flex-row gap-x-2 items-center">
              <Image
                source={security}
                className="items-center"
                color={"#A5A1A1"}
              />
              <Text className="text-center font-[500] ">Security</Text>
            </View>

            <Feather
              name="chevron-right"
              className="items-center"
              color={"#A5A1A1"}
              size={22}
            />
          </TouchableOpacity>

          <View className="bg-[#F0EFEF]  mt-2 w-full h-[1px] "></View>
        </View>

        <View>
          <TouchableOpacity className="flex-row justify-between items-center p-3">
            <View className="flex-row gap-x-2 items-center">
              <Image
                source={notification}
                className="items-center"
                color={"#A5A1A1"}
              />
              <Text className="text-center font-[500] ">Notification</Text>
            </View>

            <Feather
              name="chevron-right"
              className="items-center"
              color={"#A5A1A1"}
              size={22}
            />
          </TouchableOpacity>

          <View className="bg-[#F0EFEF]  mt-2 w-full h-[1px] "></View>
        </View>

        <View>
          <TouchableOpacity className="flex-row justify-between items-center p-3">
            <View className="flex-row gap-x-2 items-center">
              <Image
                source={report}
                className="items-center"
                color={"#A5A1A1"}
              />
              <Text className="text-center font-[500] ">Report scam</Text>
            </View>

            <Feather
              name="chevron-right"
              className="items-center"
              color={"#A5A1A1"}
              size={22}
            />
          </TouchableOpacity>

          <View className="bg-[#F0EFEF]  mt-2 w-full h-[1px] "></View>
        </View>

        <View>
          <TouchableOpacity className="flex-row justify-between items-center p-3" onPress={() => navigation.navigate('Referral')}>
            <View className="flex-row gap-x-2 items-center">
              <Image
                source={share}
                className="items-center"
                color={"#A5A1A1"}
              />
              <Text className="text-center font-[500] ">Referral</Text>
            </View>

            <Feather
              name="chevron-right"
              className="items-center"
              color={"#A5A1A1"}
              size={22}
            />
          </TouchableOpacity>

          <View className="bg-[#F0EFEF]  mt-2 w-full h-[1px] "></View>
        </View>

        <View>
          <TouchableOpacity className="flex-row justify-between items-center p-3">
            <View className="flex-row gap-x-2 items-center">
              <Image source={star} className="items-center" color={"#A5A1A1"} />
              <Text className="text-center font-[500] ">Rate SFx</Text>
            </View>

            <Feather
              name="chevron-right"
              className="items-center"
              color={"#A5A1A1"}
              size={22}
            />
          </TouchableOpacity>

          <View className="bg-[#F0EFEF]  mt-2 w-full h-[1px] "></View>
        </View>

        <View>
          <TouchableOpacity className="flex-row justify-between items-center p-3">
            <View className="flex-row gap-x-2 items-center">
              <Image source={help} className="items-center" color={"#A5A1A1"} />
              <Text className="text-center font-[500] ">Help & support</Text>
            </View>

            <Feather
              name="chevron-right"
              className="items-center"
              color={"#A5A1A1"}
              size={22}
            />
          </TouchableOpacity>

          <View className="bg-[#F0EFEF]  mt-2 w-full h-[1px] "></View>
        </View>

        <View>
          <TouchableOpacity className="flex-row justify-between items-center p-3">
            <View className="flex-row gap-x-3 items-center">
              <Image
                source={about}
                className="items-center"
                color={"#A5A1A1"}
              />
              <Text className="text-center font-[500] ">About us</Text>
            </View>

            <Feather
              name="chevron-right"
              className="items-center"
              color={"#A5A1A1"}
              size={22}
            />
          </TouchableOpacity>

          <View className="bg-[#F0EFEF]  mt-2 w-full h-[1px] "></View>
        </View>
      </View>

      <View className="grid px-4 rounded-lg h-[60px] justify-center items-center  bg-white w-[90%] mx-auto mt-5 ">
        <View className="flex-row gap-x-2 items-center ">
          <Feather
            name="log-out"
            className="items-center"
            color={"#A5A1A1"}
            size={22}
          />
          <Text className="text-[#A5A1A1]">Logout</Text>
        </View>
      </View>

      <View className='mt-2 w-full justify-center items-center p-2'>
        <Text className="text-[#A5A1A1] text-xs">Version 2.0</Text>
      </View>
    </LinearGradient>
  );
};

export default Settings;
