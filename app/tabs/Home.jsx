import * as React from "react";
import { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RadioButton } from 'react-native-paper';

import { Video, ResizeMode } from "expo-av";
import { Feather, Ionicons } from "@expo/vector-icons";
import profile from "../../assets/profile.png";

import dollar from "../../assets/dollar.jpg";
import coin from "../../assets/coins.jpg";
import card from "../../assets/elements.jpg";
import gift from "../../assets/gift.jpg";
import { LinearGradient } from "expo-linear-gradient";
import Slider from "../components/Slider";
import Bills from "../components/Bills";
import { Modalize } from "react-native-modalize";
import Transactions from "../components/Transactions";
import { useNavigation } from "@react-navigation/native";
export default function Home() {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const navigation = useNavigation();
  const [selected, setSelected] = useState('USD');
  return (
    // <SafeAreaView>
    <GestureHandlerRootView>
      <ScrollView>
        <LinearGradient
          colors={["#8B52FF", "#F7F4FF", "#F7F4FF"]}
          className="h-auto"
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
                <Text className="text-sm font-[300]">
                  Available asset balance
                </Text>
                <Ionicons name="eye-outline" size={19} color={"black"} />
              </View>

              <View className="flex-row gap-x-2 mt-5 items-center">
                <Text className="text-3xl font-semibold">90,000</Text>
                <TouchableOpacity className="flex-row gap-x-1" onPress={onOpen}>
                  <Text className="text-xs font-[300]">USD</Text>
                  <Ionicons
                    name="chevron-down-outline"
                    size={19}
                    color={"black"}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View className="p-2">
              <View className="bg-[#8B52FF] mt-12 rounded-xl items-center h-8 w-[90px]">
                <Text className="text-white my-auto ">Add money</Text>
              </View>
            </View>
          </View>

          <View className="px-6 items-center flex-row  h-[80px] w-[90%] bg-white mt-5 mx-auto justify-between rounded-lg">
            <View className="grid items-center   gap-2">
              <Image
                source={dollar}
                className="h-[24px] w-[24px] relative   items-center  "
              />
              <Text className="font-[500] text-center ">Withdraw</Text>
            </View>

            <View className="grid items-center gap-2 ">
              <Image
                source={coin}
                className="h-[24px] w-[24px] items-center  "
              />
              <Text className="font-[500] text-center">Swap</Text>
            </View>

            <View className="grid items-center gap-2 ">
              <Ionicons name="card" size={24} color={"#00BF63"} />

              <Text className="font-[500] text-center">Card</Text>
            </View>

            <View className="grid gap-2 items-center">
              <Image
                source={gift}
                className="h-[24px] w-[25px] items-center  "
              />

              <Text className="font-[500] text-center">Referral</Text>
            </View>
          </View>
          <View className="px-4 mt-6 w-[97%] mx-auto ">
            <Slider />
          </View>

          <View className="px-4 mt-12 w-full  rounded-lg h-[170px] mx-auto ">
            <Bills />
          </View>

          <View className="px-4 m w-full  rounded-lg h-[250px] mx-auto ">
            <Transactions />
          </View>
        </LinearGradient>
        <Modalize ref={modalizeRef} snapPoint={550}>
          <View className="w-full h-[500px]   p-2 bg-[#F7F4FF]">
            <View className="p-4 mx-5 items-center flex-row gap-x-2 mt-3">
              <Ionicons 
              name="arrow-back-outline"
              size={20}
              color={'gray'}

              />
              <Text>Available balance</Text>

            </View>

      <View className="bg-gray-300 mt-2 w-[95%] mx-auto h-[1px] "></View>

      <View style={styles.container}>
      {/* <Text style={styles.title}>Available balance</Text> */}
      <TouchableOpacity
        style={[styles.option, selected === 'USD' && styles.selectedOption]}
        onPress={() => setSelected('USD')}
      >
        <Text style={styles.text}>900,000 USD</Text>
        <RadioButton
          value="USD"
          status={selected === 'USD' ? 'checked' : 'unchecked'}
          onPress={() => setSelected('USD')}
          color="#8B50FF"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, selected === 'TRY' && styles.selectedOption]}
        onPress={() => setSelected('TRY')}
      >
        <Text style={styles.text}>900,000 TRY</Text>
        <RadioButton
          value="TRY"
          status={selected === 'TRY' ? 'checked' : 'unchecked'}
          onPress={() => setSelected('TRY')}
          color="#8B50FF"
        />
      </TouchableOpacity>
    </View>
          </View>
        </Modalize>
      </ScrollView>
    </GestureHandlerRootView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color: '#000',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  selectedOption: {
    borderColor: '#8B50FF',
    borderWidth: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
