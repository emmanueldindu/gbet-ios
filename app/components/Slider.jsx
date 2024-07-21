// Slider.js
import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import pexel from "../../assets/pexels.png";

const { width: viewportWidth } = Dimensions.get("window");

const SLIDER_WIDTH = viewportWidth;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const data = [
  {
    title: "Slide 1",
    text: "This is the first slide",
    image: pexel,
  },
  {
    title: "Slide 2",
    text: "This is the second slide",
    image: pexel,
  },
  {
    title: "Slide 3",
    text: "This is the third slide",
    image: pexel,
  },
];

const Slider = () => {
  return (
    <SwiperFlatList
        autoplay
      autoplayDelay={3}
      autoplayLoop
      index={2}
      paginationStyleItem={{marginTop: 50, width:10, height:10, backgroundColor: 'red' }}
      showPagination
      paginationActiveColor="#00BF63"
    >
      <View
        style={[styles.child, { backgroundColor: "#EEFFEB" }]}
        className="h-[80px] rounded-md flex-row p-2 px-4 justify-between "
      >
        <View className="grid w-[60%] p-2">
          <Text className="font-[500] text-[14px] text-[#022201]">
            Personalized recommendation
          </Text>
          <Text className="text-xs mt-1 text-[#4E824C] leadin">
            You have made multiple transfers to the same account today. Review
          </Text>
        </View>
        <View className="w-[40%] ">
          <Image
            source={pexel}
            className="h-[58px] w-[58px] mx-auto item-center my-auto rounded-full"
          />
        </View>
      </View>

      <View
        style={[styles.child, { backgroundColor: "#EEFFEB" }]}
        className="h-[80px] rounded-md flex-row p-2 px-4 justify-between "
      >
        <View className="grid w-[60%] p-2">
          <Text className="font-[500] text-[14px] text-[#022201]">
            Personalized recommendation
          </Text>
          <Text className="text-xs mt-1 text-[#4E824C] leadin">
            You have made multiple transfers to the same account today. Review
          </Text>
        </View>
        <View className="w-[40%] ">
          <Image
            source={pexel}
            className="h-[58px] w-[58px] mx-auto item-center my-auto rounded-full"
          />
        </View>
      </View>
      <View
        style={[styles.child, { backgroundColor: "#EEFFEB" }]}
        className="h-[80px] rounded-md flex-row p-2 px-4 justify-between "
      >
        <View className="grid w-[60%] p-2">
          <Text className="font-[500] text-[14px] text-[#022201]">
            Personalized recommendation
          </Text>
          <Text className="text-xs mt-1 text-[#4E824C] leadin">
            You have made multiple transfers to the same account today. Review
          </Text>
        </View>
        <View className="w-[40%] ">
          <Image
            source={pexel}
            className="h-[58px] w-[58px] mx-auto item-center my-auto rounded-full"
          />
        </View>
      </View>
    </SwiperFlatList>
  );
};

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  child: { width },
  text: { fontSize: width * 0.5, textAlign: "center" },
});
export default Slider;
